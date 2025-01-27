const ButtonBack: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`inline-block rounded-full border border-foreground p-3 text-foreground hover:bg-foreground hover:text-background focus:outline-none focus:ring active:bg-gray-500 ${className || ''}`}
    >
      <svg
        className="size-5 rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  );
};

export default ButtonBack;
