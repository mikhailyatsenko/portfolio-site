'use client';

import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
// import i18nConfig from '@/../i18nConfig';
import { ChangeEvent } from 'react';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  // const currentPathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // if (
    //   currentLocale === i18nConfig.defaultLocale &&
    //   !i18nConfig.prefixDefault
    // ) {
    //   router.push('/' + newLocale + currentPathname);
    // } else {
    //   router.push(
    //     currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
    //   );
    // }

    router.refresh();
  };

  // Определяем доступные локали
  const locales = [
    { code: 'en', label: currentLocale === 'en' ? 'EN' : 'English' },
    { code: 'de', label: currentLocale === 'de' ? 'DE' : 'Deutsch' },
  ];

  // Генерируем элементы option, сначала для выбранной локали
  const options = locales.map((locale) => (
    <option key={locale.code} value={locale.code}>
      {locale.label} {locale.code === 'en' ? '🇬🇧' : '🇩🇪'}
    </option>
  ));

  // Перемещаем выбранный элемент на первое место
  const selectedOption = options.find(
    (option) => option.props.value === currentLocale,
  );
  const otherOptions = options.filter(
    (option) => option.props.value !== currentLocale,
  );

  return (
    <select
      onChange={handleChange}
      value={currentLocale}
      id="countries"
      className="mr-1 w-[50px] bg-transparent text-sm text-foreground"
    >
      {selectedOption}
      {otherOptions}
    </select>
  );
}
