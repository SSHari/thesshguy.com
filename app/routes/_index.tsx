import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ClientOnly } from 'remix-utils/client-only';
import AnimatedName from '~/components/AnimatedName';
import { BlogIcon } from '~/icons/BlogIcon';
import { GitHubIcon } from '~/icons/GitHubIcon';
import { LinkedInIcon } from '~/icons/LinkedInIcon';
import { TwitterIcon } from '~/icons/TwitterIcon';

export const meta = () => {
  return [{ title: 'Sai Hari' }];
};

export default function Index() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center px-6 md:px-12">
      <div className="flex w-full max-w-2xl flex-col items-center gap-12">
        {/* Animated Name - Hero */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg">
            <AnimatedName speed="slow" />
          </h1>
        </motion.div>

        {/* Tagline with cycling animation */}
        <ClientOnly>{() => <CyclingTagline tagLines={tagLines} />}</ClientOnly>

        {/* Social Links */}
        <motion.nav
          className="flex items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.6 + index * 0.1,
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              aria-label={link.label}
            >
              <div className="relative">
                <link.icon className="h-6 w-6 stroke-warm-black stroke-[1.5] transition-all duration-300 group-hover:scale-110 group-hover:stroke-terracotta" />
                <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-terracotta transition-all duration-300 group-hover:w-full" />
              </div>
              <span className="text-xs font-medium text-warm-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.nav>

        {/* Footer note */}
        <motion.p
          className="mt-6 text-center text-sm text-warm-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          Developer. Builder. Thinker.
        </motion.p>
      </div>
    </main>
  );
}

function CyclingTagline({ tagLines }: { tagLines: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tagLines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [tagLines.length]);

  return (
    <motion.div
      className="relative flex h-12 w-full items-center justify-center overflow-hidden md:h-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          className="text-center text-xl font-light tracking-tight text-warm-gray-500 md:text-2xl lg:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {tagLines[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}

const tagLines = [
  'Developer of Software',
  'I think, therefore I program.',
  'Level 4 Vim Sommelier',
  'Fastest Code-Slinger in the West',
];

const socialLinks = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/TheSSHGuy',
    icon: TwitterIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/SSHari',
    icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sshari/',
    icon: LinkedInIcon,
  },
  {
    label: 'Blog',
    href: 'https://blog.thesshguy.com',
    icon: BlogIcon,
  },
];
