import { SVGProps } from 'react';

type IconLinkProps = {
  Component: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  link: string;
};

export function IconLink({ Component, link }: IconLinkProps) {
  return (
    <a href={link}>
      <Component className="duration:500 h-8 w-8 fill-gray-400 transition hover:scale-125 hover:fill-gray-600 md:h-9 md:w-9" />
    </a>
  );
}
