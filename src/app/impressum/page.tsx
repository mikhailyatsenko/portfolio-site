import initTranslations from '../i18n';
import { getLocale } from '@/lib/getLocale';

const Impressum = async () => {
  const locale = await getLocale();
  const { t } = await initTranslations(locale, ['impressum']);
  return (
    <div className="mx-auto mt-[74px] min-h-dvh max-w-7xl rounded-lg bg-background p-10">
      <h1 className="mb-6 text-3xl font-bold">{t('impressum')}</h1>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">{t('angaben')}</h2>
        <p className="">
          {t('name')}
          <br />
          {t('address')}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">
          {t('contactInformation')}
        </h2>
        <p className="">{t('email')}</p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">{t('disclaimer')}</h2>
        <p className="">{t('disclaimerText')}</p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold">{t('copyright')}</h2>
        <p className="">{t('copyrightText')} </p>
      </section>
    </div>
  );
};

export default Impressum;
