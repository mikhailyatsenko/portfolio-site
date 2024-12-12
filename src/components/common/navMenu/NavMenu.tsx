'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import cls from './NavMenu.module.css';

export const NavMenu = () => {
  const pathname = usePathname();
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contacts', href: '/contacts' },
  ];

  return (
    <div>
      <nav className={`${cls.menuItems} ${isBurgerActive ? cls.active : ''}`}>
        {navItems.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={isActive ? 'border-b border-purple-800' : ''}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div
        onClick={() => {
          setIsBurgerActive((prevState) => !prevState);
        }}
        className={`${cls.burgerMenu} ${isBurgerActive ? cls.active : ''}`}
      >
        <span className={cls.bar}></span>
        <span className={cls.bar}></span>
        <span className={cls.bar}></span>
      </div>
    </div>
  );
};
