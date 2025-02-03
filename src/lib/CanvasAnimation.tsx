'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

class Circle {
  pos: { x: number; y: number };
  radius: number;
  color: string;
  active: number = 0;

  constructor(pos: { x: number; y: number }, rad: number, color: string) {
    this.pos = pos;
    this.radius = rad;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D, theme: 'light' | 'dark') {
    if (!this.active) return;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = `rgba(${theme === 'dark' ? '156,217,249' : '225, 250, 255'},${this.active})`;
    ctx.fill();
  }
}

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  closest: Point[];
  circle: Circle | null;
  active?: number;
}

interface CanvasAnimationProps {
  width: number;
  height: number;
  theme: 'light' | 'dark';
}

const CanvasAnimation: React.FC<CanvasAnimationProps> = ({
  width,
  height,
  theme,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const pointsRef = useRef<Point[]>([]);
  const dimensionsRef = useRef({ width, height });
  const targetRef = useRef({ x: 0, y: 0 });
  const animateHeaderRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initCanvas = () => {
      const isMobile = window.innerWidth < 768; // Простая проверка на мобильные устройства
      const pointSpacing = isMobile ? 15 : 30; // На мобильных уменьшаем плотность точек

      dimensionsRef.current.width = window.innerWidth;
      dimensionsRef.current.height = window.innerHeight;
      targetRef.current = {
        x: dimensionsRef.current.width / 2,
        y: dimensionsRef.current.height / 2,
      };

      canvas.width = dimensionsRef.current.width;
      canvas.height = dimensionsRef.current.height;

      pointsRef.current = [];
      for (
        let x = 0;
        x < dimensionsRef.current.width;
        x += dimensionsRef.current.width / pointSpacing
      ) {
        for (
          let y = 0;
          y < dimensionsRef.current.height;
          y += dimensionsRef.current.height / pointSpacing
        ) {
          const px =
            x + (Math.random() * dimensionsRef.current.width) / pointSpacing;
          const py =
            y + (Math.random() * dimensionsRef.current.height) / pointSpacing;
          const p = {
            x: px,
            originX: px,
            y: py,
            originY: py,
            closest: [] as Point[],
            circle: null,
          };
          pointsRef.current.push(p);
        }
      }

      for (let i = 0; i < pointsRef.current.length; i++) {
        const p1 = pointsRef.current[i];
        const closest = pointsRef.current
          .filter((p2) => p1 !== p2)
          .sort((a, b) => getDistance(p1, a) - getDistance(p1, b))
          .slice(0, 5);
        p1.closest = closest;
        p1.circle = new Circle(
          p1,
          2 + Math.random() * 2,
          'rgba(255,255,255,0.3)',
        );
      }
    };

    const getDistance = (
      p1: { x: number; y: number },
      p2: { x: number; y: number },
    ) => (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;

    const animate = () => {
      if (!animateHeaderRef.current) return;
      ctx.clearRect(
        0,
        0,
        dimensionsRef.current.width,
        dimensionsRef.current.height,
      );

      for (const p of pointsRef.current) {
        if (Math.abs(getDistance(targetRef.current, p)) < 4000) {
          p.active = 0.3;
          if (p.circle) p.circle.active = 0.6;
        } else if (Math.abs(getDistance(targetRef.current, p)) < 20000) {
          p.active = 0.1;
          if (p.circle) p.circle.active = 0.3;
        } else if (Math.abs(getDistance(targetRef.current, p)) < 40000) {
          p.active = 0.02;
          if (p.circle) p.circle.active = 0.1;
        } else {
          p.active = 0;
          if (p.circle) p.circle.active = 0;
        }

        drawLines(p, ctx);
        if (p.circle) {
          p.circle.draw(ctx, theme);
        }
      }

      requestAnimationFrame(animate);
    };

    const drawLines = (p: Point, ctx: CanvasRenderingContext2D) => {
      if (!p.active) return;
      ctx.beginPath();
      for (const close of p.closest) {
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(close.x, close.y);
      }
      ctx.strokeStyle = `rgba(${theme === 'dark' ? '156,217,249' : '225, 250, 255'},${p.active})`;
      ctx.stroke();
    };

    const shiftPoint = (p: Point) => {
      gsap.to(p, {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        duration: 1 + Math.random(),
        ease: 'power2.inOut',
        onComplete: () => shiftPoint(p),
      });
    };

    let mouseMoveTimeout: number | null = null;

    const mouseMove = (e: MouseEvent) => {
      if (mouseMoveTimeout) return;
      mouseMoveTimeout = window.requestAnimationFrame(() => {
        targetRef.current.x = e.clientX;
        targetRef.current.y = e.clientY;
        mouseMoveTimeout = null;
      });
    };

    const resize = () => {
      dimensionsRef.current.width = window.innerWidth;
      dimensionsRef.current.height = window.innerHeight;
      canvas.width = dimensionsRef.current.width;
      canvas.height = dimensionsRef.current.height;
      initCanvas();
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('resize', resize);

    initCanvas();
    for (const p of pointsRef.current) shiftPoint(p);
    animate();

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', resize);
    };
  }, [width, height, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute left-0 top-0 h-full w-full will-change-transform"
    />
  );
};

export default CanvasAnimation;
