'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <>
      <h1 className='relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300'>
        {'Freelancing better together.'.split(' ').map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: 'easeInOut',
            }}
            className='mr-2'
          >
            {word}
          </motion.span>
        ))}
      </h1>
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.8,
        }}
        className='relative z-10 mx-auto max-w-2xl py-4 text-center text-xl md:text-[1.75rem] font-normal text-neutral-600 dark:text-neutral-400'
      >
        Team up with other freelancers, share projects, and build better
        work—together.
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 1,
        }}
        className='relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4'
      >
        <Link href='/auth'>
          <Button
            className='cursor-pointer w-60 h-12 transform rounded-lg bg-black px-6 py-2 font-medium text-lg text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200'
            size='lg'
          >
            Get Started
          </Button>
        </Link>
      </motion.div>
    </>
  );
}
