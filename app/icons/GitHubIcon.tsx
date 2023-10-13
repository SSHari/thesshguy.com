import { GithubCircle } from 'iconoir-react';
import type { ComponentProps, SVGProps } from 'react';

export const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <GithubCircle {...(props as ComponentProps<typeof GithubCircle>)} />
);
