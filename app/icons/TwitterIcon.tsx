import { Twitter } from 'iconoir-react';
import type { ComponentProps, SVGProps } from 'react';

export const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <Twitter {...(props as ComponentProps<typeof Twitter>)} />
);
