import { Post } from 'iconoir-react';
import type { ComponentProps, SVGProps } from 'react';

export const BlogIcon = (props: SVGProps<SVGSVGElement>) => (
  <Post {...(props as ComponentProps<typeof Post>)} />
);
