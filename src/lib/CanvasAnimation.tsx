'use client';

import { useCallback, useEffect, useRef } from 'react';

interface CanvasAnimationProps {
  theme: 'light' | 'dark';
}

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  dx: number;
  dy: number;
  closest: Point[];
  circle: Circle;
  active?: number;
}

class Circle {
  pos: Point;
  radius: number;
  color: string;
  active: number = 0;

  constructor(pos: Point, radius: number, color: string) {
    this.pos = pos;
    this.radius = radius;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.active) return;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color.replace('0.3', String(this.active));
    ctx.fill();
  }
}

const CanvasAnimation: React.FC<CanvasAnimationProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const targetRef = useRef<Point>({
    x: 0,
    y: 0,
    originX: 0,
    originY: 0,
    dx: 0,
    dy: 0,
    closest: [],
    circle: null!,
  });

  const getDistance = useCallback(
    (p1: Point, p2: Point) => (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2,
    [],
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pointsRef.current.forEach((point) => {
      point.x =
        point.originX + Math.sin(performance.now() / 1000 + point.originX) * 5;
      point.y =
        point.originY + Math.sin(performance.now() / 1000 + point.originY) * 5;

      const distance = getDistance(targetRef.current, point);
      point.active =
        distance < 4000
          ? 0.3
          : distance < 20000
            ? 0.1
            : distance < 40000
              ? 0.02
              : 0;
      point.circle.active = point.active ? point.active * 2 : 0;

      point.closest.forEach((p) => {
        if (!point.active) return;
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `rgba(${theme === 'dark' ? '156,217,249' : '225, 250, 255'},${point.active})`;
        ctx.stroke();
      });

      point.circle.draw(ctx);
    });

    requestAnimationFrame(animate);
  }, [getDistance, theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    targetRef.current = {
      x: width / 2,
      y: height / 2,
      originX: 0,
      originY: 0,
      dx: 0,
      dy: 0,
      closest: [],
      circle: null!,
    };

    const points: Point[] = [];
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
          circle: null!,
        });
      }
    }

    points.forEach((point) => {
      point.closest = [...points]
        .filter((p) => p !== point)
        .sort((a, b) => getDistance(point, a) - getDistance(point, b))
        .slice(0, 5);

      point.circle = new Circle(
        point,
        2 + Math.random() * 2,
        `rgba(${theme === 'dark' ? '156,217,249' : '225, 250, 255'},0.3)`,
      );
    });

    pointsRef.current = points;

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
  }, [animate, getDistance, theme]);

  return (
    <canvas ref={canvasRef} className="absolute left-0 top-0 h-full w-full" />
  );
};

export default CanvasAnimation;
