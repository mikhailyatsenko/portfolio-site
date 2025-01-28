import React from 'react';

export const DownloadButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={`button h-16 w-fit cursor-pointer select-none rounded-full border-[1px] border-indigo-400 bg-indigo-500 px-4 transition-all duration-75 [box-shadow:0_10px_0_0_#4f46e5,0_15px_0_0_#1b48f840] active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#4f46e5,0_0px_0_0_#1b48f840] ${className || ''}`}
    >
      <span className="flex h-full flex-col items-center justify-center text-lg font-semibold text-white">
        {children}
      </span>
    </button>
  );
};
