import { LinkedIn } from 'iconoir-react';
import type { ComponentProps, SVGProps } from 'react';

export const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <LinkedIn {...(props as ComponentProps<typeof LinkedIn>)} />
);
