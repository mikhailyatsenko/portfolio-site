import { ReactNode } from 'react';

// import cls from './MockIphone.module.css';

interface MockIphoneProps {
  screenContent: ReactNode;
}

export const MockIphone = ({ screenContent }: MockIphoneProps) => {
  return (
    <div
      className={`z-1 absolute left-2/4 h-[500px] w-60 shrink-0 -translate-x-2/4 rounded-[45px] border-8 border-zinc-900 shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] sm576:relative sm576:left-0 sm576:translate-x-0 lg:h-[600px] lg:w-72`}
    >
      {/* Dynamic Island --> */}

      <div className="absolute left-1/2 top-2 z-20 h-[18px] w-[75px] -translate-x-1/2 transform rounded-full bg-zinc-900 lg:h-[22px] lg:w-[90px]"></div>

      <div className="pointer-events-none absolute -inset-[1px] rounded-[37px] border-[3px] border-zinc-700 border-opacity-40"></div>

      {/* Screen Content --> */}

      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[37px] bg-zinc-900/10">
        {screenContent}
      </div>

      {/* Left Side Buttons --> */}

      {/* Silent Switch --> */}

      <div className="absolute left-[-12px] top-20 h-8 w-[6px] rounded-l-md bg-zinc-900 shadow-md"></div>

      {/* Volume Up --> */}

      <div className="absolute left-[-12px] top-36 h-12 w-[6px] rounded-l-md bg-zinc-900 shadow-md"></div>

      {/* Volume Down --> */}

      <div className="absolute left-[-12px] top-52 h-12 w-[6px] rounded-l-md bg-zinc-900 shadow-md"></div>

      {/* Right Side Button (Power) --> */}

      <div className="absolute right-[-12px] top-36 h-16 w-[6px] rounded-r-md bg-zinc-900 shadow-md"></div>
    </div>
  );
};
