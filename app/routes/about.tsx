import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

export const meta = () => {
  return [{ title: 'Sai Hari | About' }];
};

export default function About() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 md:px-12">
      <div className="flex w-full max-w-3xl flex-col gap-20">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-warm-gray-400 transition-colors hover:text-terracotta"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            <span>Back</span>
          </Link>
        </motion.div>

        {/* About content */}
        <motion.article
          className="flex flex-col gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold tracking-tight text-warm-black md:text-5xl lg:text-6xl">
              About Me
            </h1>
            <div className="h-px w-16 bg-terracotta" />
          </div>

          {/* Content sections */}
          <div className="flex flex-col gap-8 text-lg leading-relaxed text-warm-gray-600 md:text-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Hey there! My name is Sai and I like to build things. Usually I'm
              building for the web, but as long as I'm having fun, the{' '}
              <span className="italic text-warm-black">where</span> isn't so
              important.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Today that building happens at{' '}
              <a
                href="https://www.dragos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-warm-black underline decoration-terracotta decoration-2 underline-offset-4 transition-colors hover:text-terracotta"
              >
                Dragos
              </a>
              , where our mission is to{' '}
              <span className="italic text-warm-black">
                safeguard civilization
              </span>
              . My team is pretty small, which is nice, because it means I get
              to build things that span across our tech stack.
            </motion.p>
          </div>

          {/* Tech stack */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-base font-medium uppercase tracking-wider text-warm-gray-400">
              Recent Technologies
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="group flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                >
                  <span className="font-mono text-xs text-terracotta">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base font-medium text-warm-black transition-colors group-hover:text-terracotta">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Optional: Get in touch section */}
          <motion.div
            className="mt-8 flex flex-col gap-4 rounded-2xl border border-warm-gray-200 bg-warm-white p-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="text-lg font-semibold text-warm-black">
              Let's connect
            </h2>
            <p className="text-base leading-relaxed text-warm-gray-600">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out on{' '}
              <a
                href="https://twitter.com/TheSSHGuy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-black underline decoration-terracotta decoration-2 underline-offset-2 transition-colors hover:text-terracotta"
              >
                Twitter
              </a>{' '}
              or{' '}
              <a
                href="https://www.linkedin.com/in/sshari/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-black underline decoration-terracotta decoration-2 underline-offset-2 transition-colors hover:text-terracotta"
              >
                LinkedIn
              </a>
              .
            </p>
          </motion.div>
        </motion.article>
      </div>
    </main>
  );
}

const technologies = [
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
];
