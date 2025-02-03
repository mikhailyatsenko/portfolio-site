import Link from 'next/link';

interface GlowingBlockProps {
  className?: string;
  title?: string;
  content: string;
  buttonText: string;
}

export const GradientBlock: React.FC<GlowingBlockProps> = ({
  title,
  content,
  className,
  buttonText,
}) => {
  return (
    <div
      className={`relative h-[calc(100vh-74px)] w-full overflow-hidden bg-yellow-300 px-3 py-5 text-center text-black h-sm:sm576:h-auto h-sm:sm576:w-5/6 h-sm:sm576:rounded-3xl h-md:px-5 h-md:py-10 lg:w-1/2 ${className || ''}`}
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <h3 className="font-display font-mono text-xl h-md:text-3xl h-md:lg:text-4xl">
          {title}
        </h3>
        <p className="text-mono mx-auto mt-4 max-w-full text-base h-md:text-lg">
          {content}
        </p>
        <div className="mx-auto mt-5 hidden justify-center h-sm:flex h-md:mt-12">
          <Link href="#projects">
            <div className="group relative flex h-12 w-48 items-center justify-center rounded-full bg-black text-white transition-all hover:w-48 sm576:w-12">
              <span className="absolute opacity-0 transition-opacity group-hover:opacity-0 sm576:opacity-100">
                →
              </span>
              <span className="absolute opacity-100 transition-opacity group-hover:opacity-100 sm576:opacity-0">
                {buttonText}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
