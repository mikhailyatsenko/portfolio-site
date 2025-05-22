'use client';

import {
  BlueGradient,
  PinkGradient,
} from '../components/common/GradientElements';
import { useGradient } from '@/context/GradientContext';

export const GradientWrapper = () => {
  const { isAtBottom } = useGradient();

  console.log(isAtBottom);

  return (
    <>
      <BlueGradient className={`${isAtBottom ? 'projectsBottom' : ''}`} />
      <PinkGradient className={`${isAtBottom ? 'projectsBottom' : ''}`} />
    </>
  );
};
