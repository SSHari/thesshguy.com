import { Link, NavLink, useMatches, type NavLinkProps } from '@remix-run/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cls } from '~/utils/helpers';
import AnimatedName from './AnimatedName';

type AnimatedLinkProps = NavLinkProps & {
  delayFactor: number;
};

function AnimatedLink({ delayFactor, ...props }: AnimatedLinkProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.25 * delayFactor,
        default: { duration: 1.25, ease: 'easeInOut' },
        opacity: { duration: 0.6, ease: [1, 0, 0.8, 1] },
      }}
    >
      <NavLink
        {...props}
        className={({ isActive }) =>
          cls('text-lg font-medium hover:text-gray-800', {
            'text-gray-500': !isActive,
            'text-gray-800': isActive,
          })
        }
      />
    </motion.div>
  );
}

export function Header() {
  const match = useMatches();
  const { id } = match[match.length - 1];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div>
      <nav
        className={cls(
          'fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between bg-white px-5 py-2 transition-shadow duration-75 ease-in md:px-24 lg:px-48',
          {
            'shadow-[0px_24px_48px_rgb(0,0,0,.16)]': !!ref.current && !isInView,
          },
        )}
      >
        <Link to="/" className="h-full">
          {id !== 'routes/_index' && <AnimatedName speed="normal" />}
        </Link>
        <div className="mt-3 flex gap-2">
          <AnimatedLink to="/about" delayFactor={1}>
            About
          </AnimatedLink>
        </div>
      </nav>
      <div ref={ref} className="h-16 w-full" />
    </div>
  );
}
