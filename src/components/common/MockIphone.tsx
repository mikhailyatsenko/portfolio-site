import Image from 'next/image';
import slide from '../../assets/projectsSlides/project-1-slide-1.webp';

export const MockIphone = () => {
  return (
    <div className="relative ml-1 h-[600px] w-72 rounded-[45px] border-8 border-zinc-900 shadow-[0_0_2px_2px_rgba(255,255,255,0.1)]">
      {/* Dynamic Island --> */}

      <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[90px] -translate-x-1/2 transform rounded-full bg-zinc-900"></div>

      <div className="pointer-events-none absolute -inset-[1px] rounded-[37px] border-[3px] border-zinc-700 border-opacity-40"></div>

      {/* Screen Content --> */}

      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[37px] bg-zinc-900/10">
        <Image src={slide} alt="Project 3. Welle slide" />
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
