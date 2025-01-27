'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import cls from './NavMenu.module.css';

import { useTranslation } from 'react-i18next';

export const NavMenu = () => {
  const { t } = useTranslation();

  const pathname = usePathname(); // Получение текущего пути
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash); // Установка текущего хэша
    updateHash(); // Установить текущий хэш при загрузке
    window.addEventListener('hashchange', updateHash); // Обновлять при изменении якоря

    return () => {
      window.removeEventListener('hashchange', updateHash);
    };
  }, []);

  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const navItems = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.profile'), href: '/#profile' },
    { label: t('navigation.projects'), href: '/#projects' },
    { label: t('navigation.contacts'), href: '/#contacts' },
  ];

  return (
    <div className="ml-2 sm576:ml-5">
      <nav className={`${cls.menuItems} ${isBurgerActive ? cls.active : ''}`}>
        {navItems.map((link) => {
          // Проверка активного класса
          const isLinkActive =
            (link.href === '/' && pathname === '/' && !currentHash) || // Home активен только без хэша
            currentHash === link.href; // Остальные ссылки активны по хэшу

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`${
                isLinkActive
                  ? 'animate-textGlow shadow-purple-400 dark:shadow-yellow-500'
                  : ''
              } text-6xl lg:text-lg`}
              onClick={() => {
                setIsBurgerActive(false);
                setCurrentHash(link.href); // Устанавливаем активный хэш при клике
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div
        onClick={() => setIsBurgerActive((prevState) => !prevState)}
        className={`${cls.burgerMenu} ${isBurgerActive ? cls.active : ''}`}
      >
        <span className={cls.bar}></span>
        <span className={cls.bar}></span>
        <span className={cls.bar}></span>
      </div>
    </div>
  );
};
