'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { ChangeEvent } from 'react';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
    router.refresh();
  };

  const locales = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ];

  const options = locales.map((locale) => (
    <option key={locale.code} value={locale.code}>
      {locale.label} {locale.code === 'en' ? '🇬🇧' : '🇩🇪'}
    </option>
  ));

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
      className="mr-1 w-fit bg-transparent text-sm"
    >
      {selectedOption}
      {otherOptions}
    </select>
  );
}
