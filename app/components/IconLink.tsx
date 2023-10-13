import { SVGProps } from 'react';

type IconLinkProps = {
  Component: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  link: string;
  title: string;
};

export function IconLink({ Component, link, title }: IconLinkProps) {
  return (
    <a href={link} title={title}>
      <Component className="duration:500 h-8 w-8 fill-gray-50 text-gray-500 transition hover:scale-125 hover:fill-gray-100 hover:text-gray-700 md:h-9 md:w-9" />
    </a>
  );
}
