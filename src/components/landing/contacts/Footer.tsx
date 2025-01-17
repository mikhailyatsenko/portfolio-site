export const Footer = () => {
  return (
    <footer className="flex w-full justify-between pt-4 text-sm text-gray-500">
      <p>Created by &copy;Mykhailo Yatsenko {new Date().getFullYear()}</p>
      <a className="text-sm text-gray-100 transition-colors hover:text-gray-400">
        Legal Notice
      </a>
    </footer>
  );
};
