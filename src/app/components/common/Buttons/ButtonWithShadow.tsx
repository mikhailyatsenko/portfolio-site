export const ButtonWithShadow: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...rest }) => {
  return (
    <button
      className={`inline-flex cursor-pointer items-center rounded bg-foreground px-6 py-3 font-semibold text-background transition [box-shadow:rgb(197,200,255)4px_4px] hover:[box-shadow:rgb(171,_196,_245)0px_0px] ${className || ''}`}
      {...rest}
    >
      {children}
    </button>
  );
};
