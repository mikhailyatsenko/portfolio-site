import { HTMLAttributes } from 'react';
import cls from './PinkGradient.module.css';

interface PinkGradientProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const PinkGradient = ({
  className = '',
  ...props
}: PinkGradientProps) => {
  return (
    <div className={`${cls.pinkGradient} ${cls[className]}`} {...props}></div>
  );
};
