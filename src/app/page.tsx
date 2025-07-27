'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const faqs: { title: string; content: string; id: number }[] = [
  {
    id: 1,
    title: 'What is Frontend Mentor, and how will it help me?',
    content:
      'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.',
  },
  {
    id: 2,
    title: 'Is Frontend Mentor Free?',
    content: `The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.`,
  },
  {
    id: 3,
    title: 'Can I use Frontend Mentor projects in my portfolio?',
    content: `Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!`,
  },
  {
    id: 4,
    title: `How can I get help if I'm stuck on a challenge?`,
    content: `The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated "help" channel! If you haven't joined yet, you can get an invite to our Discord server here.`,
  },
];

export default function Home() {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({
    1: true,
  });

  const toggleSection = (id: number) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [id]: !prevOpenSections[id],
    }));
  };

  return (
    <main className='relative flex h-full w-full items-center justify-center'>
      <div className="absolute top-0 z-[-1] h-58 w-full bg-[url('/images/background-pattern-mobile.svg')] bg-cover bg-no-repeat md:h-80 md:bg-[url('/images/background-pattern-desktop.svg')] md:bg-center" />

      {/* FAQs */}
      <div className='my-32.5 w-full max-w-81.75 rounded-lg bg-white p-6 md:my-41.75 md:max-w-150 md:rounded-2xl md:p-10'>
        <div className='flex items-center gap-6'>
          <img
            src='/images/icon-star.svg'
            alt='faq icon star'
            className='h-6 w-6 md:h-10 md:w-10'
          />
          <h1 className='text-preset-1-mobile md:text-preset-1'>FAQs</h1>
        </div>

        <div>
          {faqs.map((faq) => (
            <section
              className='border-b-[1px] border-purple-100 py-6 last:border-none last:pb-0 md:first:pt-10'
              key={faq.id}
            >
              <button
                type='button'
                aria-label='minus icon'
                onClick={() => toggleSection(faq.id)}
                className='hover:text-violet flex w-full cursor-pointer items-center justify-between text-start'
              >
                <h2 className='text-preset-2-mobile md:text-preset-2 w-full max-w-56.25 md:max-w-none'>
                  {faq.title}
                </h2>

                <motion.img
                  src={
                    openSections[faq.id]
                      ? '/images/icon-minus.svg'
                      : '/images/icon-plus.svg'
                  }
                  alt='minus icon'
                  className='h-7.5 w-7.5'
                  animate={{ rotate: openSections[faq.id] ? 0 : 90 }}
                  transition={{ duration: 0.2 }}
                />
              </button>

              <AnimatePresence>
                {openSections[faq.id] && (
                  <motion.p
                    className='text-preset-3-mobile md:text-preset-3 mt-6 text-purple-600'
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.content}
                  </motion.p>
                )}
              </AnimatePresence>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
