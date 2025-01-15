import FernsehturmIcon from '@/assets/icons/fernsehturm-dark.svg';
import cls from './Contacts.module.css';
import { Footer } from './Footer';
import LocationTime from './lib/LocationTime';

export const Contacts = () => {
  return (
    <section
      id="contact"
      className="relative h-full w-full bg-foreground p-6 text-background"
    >
      <div className={cls.stars}></div>
      <div className={cls.twinkling}></div>
      <div className="relative z-[2] mx-auto flex h-full w-full flex-col justify-between">
        <div id="get-in-touch-content" className="h-full w-full">
          <div className="flex w-full justify-center gap-6 h-sm:gap-12">
            <div className="w-1/2 max-w-3xl text-gray-500">
              <h2 className="text-right text-sm">Let&apos;s stay in touch</h2>
            </div>
            <div className="w-1/2 text-sm text-gray-500">
              <p className="text-left">
                <LocationTime />
              </p>
            </div>
          </div>
          <div className="mt-6 flex w-full justify-center gap-10 h-sm:gap-20">
            <div className="flex w-[calc(50%-0.75rem)] justify-end divide-x divide-dashed text-sm h-sm:w-[calc(50%-2.5rem)]">
              <div className="1/3 pr-6">
                <p className="mb-2 text-gray-400">Social</p>
              </div>
              <div className="1/3 px-6">
                <p className="mb-2 text-gray-400">Email</p>
                <a
                  href="mailto: yatsenkomike@gmail.com"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-100 transition-colors hover:text-gray-400"
                >
                  yatsenkomike@gmail.com
                </a>
              </div>
              <div className="1/3 pl-6">
                <p className="mb-2 text-gray-400">Social</p>
                <a
                  className="block leading-6 text-gray-100 transition-colors hover:text-gray-400"
                  href="https://www.linkedin.com/in/mikhailyatsenko"
                  target="_blank"
                  rel="noopener"
                >
                  Linkedin
                </a>
                <a
                  className="block leading-6 text-gray-100 transition-colors hover:text-gray-400"
                  href="https://github.com/mikhailyatsenko"
                  target="_blank"
                  rel="noopener"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="w-[calc(50%-1.5rem)] shrink-0 h-sm:w-[calc(50%-2.5rem)]">
              <p className="text-md max-w-full break-words indent-8 text-gray-400">
                I&apos;m based in Berlin but open to remote work opportunities
                worldwide. If you&apos;re working on something exciting or want
                to explore potential collaboration, don&apos;t hesitate to get
                in touch. I&apos;m actively responding to emails and would love
                to connect!
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <FernsehturmIcon className="fixed bottom-0 left-1/2 z-[1] h-[58vh] -translate-x-1/2 transform" />
    </section>
  );
};
