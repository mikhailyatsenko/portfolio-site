interface GlowingBlockProps {
  className?: string;
  title?: string;
  content: string;
}

export const GradientBlock: React.FC<GlowingBlockProps> = ({
  title,
  content,
  className,
}) => {
  return (
    <div
      className={`relative h-[calc(100vh-160px)] overflow-hidden bg-yellow-300 px-5 py-10 text-center text-black sm576:h-auto sm576:w-5/6 sm576:rounded-3xl lg:w-1/2 ${className || ''}`}
    >
      <div className="relative z-10">
        <h3 className="font-display font-mono text-3xl lg:text-4xl">{title}</h3>
        <p className="text-mono mx-auto mt-4 max-w-md text-lg">{content}</p>
        <div className="mx-auto mt-12 flex justify-center">
          <a
            className="group relative flex h-12 w-12 w-48 items-center justify-center rounded-full bg-black text-white transition-all hover:w-48 sm576:w-12"
            href="#projects"
          >
            <span className="absolute opacity-0 transition-opacity group-hover:opacity-0 sm576:opacity-100">
              →
            </span>
            <span className="absolute opacity-100 transition-opacity group-hover:opacity-100 sm576:opacity-0">
              Go to Projects
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
