import { PropsWithChildren } from 'react';

export const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="px-8 pt-[70px]">{children}</div>;
};
