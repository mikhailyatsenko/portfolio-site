import { HTMLAttributes } from 'react';
import cls from './BlueGradient.module.css';

interface BlueGradientProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const BlueGradient = ({
  className = '',
  ...props
}: BlueGradientProps) => {
  return (
    <div className={`${cls.blueGradient} ${cls[className]}`} {...props}></div>
  );
};
