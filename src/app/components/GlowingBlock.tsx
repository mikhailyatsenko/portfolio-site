interface GlowingBlockProps {
  className?: string;
  children: React.ReactNode;
}

export const GlowingBlock: React.FC<GlowingBlockProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`xl:2/4 group relative w-5/6 lg:w-2/4 ${className || ''}`}>
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <div className="relative flex flex-col items-center justify-center space-x-6 rounded-lg bg-background px-7 py-6">
        {children}
      </div>
    </div>
  );
};
