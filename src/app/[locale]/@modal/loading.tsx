export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
      <div className="z-20 h-16 w-16 animate-rotate">
        <div
          className="inset-0 bg-transparent"
          style={{
            height: '100%',
            width: '100%',
            backgroundImage: `
          linear-gradient(#e879f9 16px, transparent 0),
          linear-gradient(#5eead4 16px, transparent 0),
          linear-gradient(#5eead4 16px, transparent 0),
          linear-gradient(#e879f9 16px, transparent 0)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '16px 16px',
            backgroundPosition:
              'left top, left bottom, right top, right bottom',
          }}
        />
      </div>
    </div>
  );
}
