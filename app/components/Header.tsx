import { Link, NavLink, useMatches } from '@remix-run/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cls } from '~/utils/helpers';
import AnimatedName from './AnimatedName';

export function Header() {
  const match = useMatches();
  const { id } = match[match.length - 1];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div>
      <motion.nav
        className={cls(
          'fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between bg-cream/80 px-6 backdrop-blur-sm transition-all duration-200 md:px-12',
          {
            'border-b border-warm-gray-200': !!ref.current && !isInView,
          },
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Link to="/" className="h-full py-4">
          {id !== 'routes/_index' && <AnimatedName speed="normal" />}
        </Link>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cls('group relative text-base font-medium transition-colors', {
                'text-warm-gray-400 hover:text-warm-black': !isActive,
                'text-warm-black': isActive,
              })
            }
          >
            {({ isActive }) => (
              <>
                About
                <span
                  className={cls(
                    'absolute -bottom-1 left-0 h-px bg-terracotta transition-all duration-300',
                    {
                      'w-0 group-hover:w-full': !isActive,
                      'w-full': isActive,
                    },
                  )}
                />
              </>
            )}
          </NavLink>
        </motion.div>
      </motion.nav>
      <div ref={ref} className="h-20 w-full" />
    </div>
  );
}
