export function ExternalLink(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
      {...props}
      className="rtl inline-block text-gray-950 transition-colors duration-200 after:block after:h-[2px] after:w-0 after:bg-gray-500 after:transition-[width] after:duration-200 hover:text-gray-500 hover:after:w-full"
    />
  );
}
