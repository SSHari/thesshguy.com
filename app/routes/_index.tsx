import type { V2_MetaFunction } from '@remix-run/node';
import { motion } from 'framer-motion';
import AnimatedName from '~/components/AnimatedName';
import { IconLink } from '~/components/IconLink';
import { BlogIcon } from '~/icons/BlogIcon';
import { GitHubIcon } from '~/icons/GitHubIcon';
import { LinkedInIcon } from '~/icons/LinkedInIcon';
import { TwitterIcon } from '~/icons/TwitterIcon';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Sai Hari' }];
};

export default function Index() {
  return (
    <main className="flex w-screen flex-1 flex-col items-center py-16 md:justify-center">
      <div className="flex w-full max-w-screen-sm flex-col items-center gap-4 md:max-w-screen-md">
        <h1 className="w-80 md:w-96 lg:w-[30rem]">
          <AnimatedName speed="slow" />
        </h1>
        <motion.span
          className="text-center text-xl font-bold text-gray-600 lg:text-2xl"
          variants={{
            hidden: { opacity: 0, translateY: '20px' },
            visible: { opacity: 1, translateY: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
            default: { duration: 1.5, ease: 'easeInOut' },
            opacity: { duration: 1, ease: [1, 0, 0.8, 1] },
          }}
        >
          {[...tagLines].sort(() => 0.5 - Math.random())[0]}
        </motion.span>
        <div className="mt-1 flex gap-5">
          {iconConfigs.map((config, index) => (
            <motion.div
              key={config.id}
              variants={{
                hidden: { opacity: 0, translateY: `${30 + 5 * index}px` },
                visible: { opacity: 1, translateY: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 1.2 + 0.1 * index,
                default: { duration: 1.25, ease: 'easeInOut' },
                opacity: { duration: 1, ease: [1, 0, 0.8, 1] },
              }}
            >
              <IconLink Component={config.icon} link={config.link} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

const tagLines = [
  'Developer of Software',
  'I think, therefore I program.',
  'Level 4 Vim Sommelier',
  'Fastest Code-Slinger in the West',
];

const iconConfigs = [
  {
    id: 'twitter',
    icon: TwitterIcon,
    link: 'https://twitter.com/TheSSHGuy',
  },
  {
    id: 'linkedin',
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/sshari/',
  },
  {
    id: 'github',
    icon: GitHubIcon,
    link: 'https://github.com/SSHari',
  },
  {
    id: 'blog',
    icon: BlogIcon,
    link: 'https://blog.thesshguy.com',
  },
];
