'use client';

import { useEffect, useRef, useState } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<any[]>([]);
  const targetRef = useRef({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Инициализируем targetRef теперь, когда мы на клиенте
    targetRef.current = { x: width / 2, y: height / 2 };

    // Создаем точки
    const points = [];
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + (Math.random() * width) / 20;
        const py = y + (Math.random() * height) / 20;
        points.push({
          x: px,
          y: py,
          originX: px,
          originY: py,
          dx: 0,
          dy: 0,
          closest: [],
          circle: null,
        });
      }
    }

    // Определяем ближайшие точки
    for (let i = 0; i < points.length; i++) {
      const closest = [];
      for (let j = 0; j < points.length; j++) {
        if (i !== j) {
          closest.push(points[j]);
        }
      }
      closest.sort(
        (a, b) => getDistance(points[i], a) - getDistance(points[i], b),
      );
      points[i].closest = closest.slice(0, 5);
    }

    // Создаем круги
    points.forEach((point) => {
      point.circle = new Circle(
        point,
        2 + Math.random() * 2,
        'rgba(255,255,255,0.3)',
      );
    });

    pointsRef.current = points;

    // Запускаем анимацию
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  function animate() {
    if (!isClient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pointsRef.current.forEach((point) => {
      // Ограничиваем движение, чтобы не появлялось лишних линий
      point.dx += (Math.random() - 0.5) * 0.1;
      point.dy += (Math.random() - 0.5) * 0.1;
      point.x =
        point.originX + Math.sin(performance.now() / 1000 + point.originX) * 5;
      point.y =
        point.originY + Math.sin(performance.now() / 1000 + point.originY) * 5;

      const distance = getDistance(targetRef.current, point);
      if (distance < 4000) {
        point.active = 0.3;
        point.circle.active = 0.6;
      } else if (distance < 20000) {
        point.active = 0.1;
        point.circle.active = 0.3;
      } else if (distance < 40000) {
        point.active = 0.02;
        point.circle.active = 0.1;
      } else {
        point.active = 0;
        point.circle.active = 0;
      }

      drawLines(ctx, point);
      point.circle.draw(ctx);
    });

    requestAnimationFrame(animate);
  }

  function drawLines(ctx: CanvasRenderingContext2D, point: any) {
    if (!point.active) return;
    for (let i = 0; i < point.closest.length; i++) {
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(point.closest[i].x, point.closest[i].y);
      ctx.strokeStyle = `rgba(156,217,249,${point.active})`;
      ctx.stroke();
    }
  }

  class Circle {
    pos: any;
    radius: number;
    color: string;
    active: number;

    constructor(pos: any, radius: number, color: string) {
      this.pos = pos;
      this.radius = radius;
      this.color = color;
      this.active = 0;
    }

    draw(ctx: CanvasRenderingContext2D) {
      if (!this.active) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = `rgba(156,217,249,${this.active})`;
      ctx.fill();
    }
  }

  function getDistance(p1: any, p2: any) {
    return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
  }

  return isClient ? (
    <canvas ref={canvasRef} className="absolute left-0 top-0 h-full w-full" />
  ) : null;
};

export default ParticleBackground;
