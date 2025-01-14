import { AnimateInView } from '@/components/common/AnimateInView';

export const Contacts = () => {
  return (
    <section id="contact" className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
              Contact
            </p>
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Let&apos;s get in touch!
            </h2>
            <AnimateInView>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                In hac habitasse platea dictumst
              </p>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
};
