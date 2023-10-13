import { ArrowRightCircle } from 'iconoir-react';
import type { ComponentProps, SVGProps } from 'react';

export const ArrowCircleRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <ArrowRightCircle {...(props as ComponentProps<typeof ArrowRightCircle>)} />
);
