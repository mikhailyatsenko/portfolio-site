import Link from 'next/link';

export const Header = () => {
  return (
    <header className="p-8">
      <div className="backdrop"></div>
      <div className="backdrop-edge"></div>
      <div className="z-10 relative flex justify-between items-center">
        <div className="flex flex-col gap-0.5 bg-purple-800 p-2.5">
          <h2 className="text-h4 leading-[1] font-serif">Mykhailo</h2>
          <h2 className="text-h4 leading-[1] font-serif">Yatsenko</h2>
        </div>

        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contacts">Contacts</Link>
      </div>
    </header>
  );
};
