import { motion } from 'framer-motion';
import { ExternalLink } from '~/components/ExternalLink';
import { ArrowCircleRightIcon } from '~/icons/ArrowCircleRight';

export const meta = () => {
  return [{ title: 'Sai Hari | About' }];
};

export default function About() {
  return (
    <main className="flex flex-col items-center py-16 md:justify-center">
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: '30px' },
          visible: { opacity: 1, translateY: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.5,
          default: { duration: 1.25, ease: 'easeInOut' },
          opacity: { duration: 0.75, ease: [1, 0, 0.8, 1] },
        }}
        className="mx-auto flex w-[90vw] max-w-[800px] flex-col items-center gap-4 rounded-2xl border border-transparent px-8 py-12 pb-12 pt-9 text-gray-500 shadow-[0px_24px_48px_rgb(0,0,0,.16)] md:h-[revert]"
      >
        <h1 className="w-full max-w-sm text-xl font-semibold text-gray-700 sm:max-w-md md:max-w-lg">
          About Me
        </h1>

        <p className="max-w-sm text-justify text-lg font-medium sm:max-w-md md:max-w-lg">
          Hey there! My name is Sai and I like to build things. Usually I'm
          building for the web, but as long as I'm having fun, the{' '}
          <span className="italic">where</span> isn't so important.
        </p>

        <p className="max-w-sm text-justify text-lg font-medium sm:max-w-md md:max-w-lg">
          Today that building happens at{' '}
          <ExternalLink href="https://www.dragos.com/" target="_blank">
            Dragos
          </ExternalLink>
          , where our mission is to{' '}
          <span className="italic">safeguard civilization</span>. My team is
          pretty small, which is nice, because it means I get to build things
          that span across our tech stack.
        </p>

        <p className="max-w-sm text-justify text-lg font-medium sm:max-w-md md:max-w-lg">
          Here are some of the more recent technologies I've been working with:
        </p>

        <ul className="grid w-full max-w-sm grid-cols-2 gap-2 py-2 text-justify text-lg font-medium sm:max-w-md md:max-w-lg md:grid-cols-3">
          {[
            'React',
            'Node',
            'TypeScript',
            'Elasticsearch',
            'AWS Services',
            'Terraform',
            'Docker',
            'Kubernetes',
            'Lua',
            'Neovim',
          ].map((tech) => (
            <li key={tech} className="flex items-center gap-2">
              <ArrowCircleRightIcon className="h-5 w-5 fill-gray-400" />
              {tech}
            </li>
          ))}
        </ul>
      </motion.div>
    </main>
  );
}
