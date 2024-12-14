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
    <div className="ml-auto">
      <nav className={`${cls.menuItems} ${isBurgerActive ? cls.active : ''}`}>
        {navItems.map((link) => {
          const isLinkActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`${isLinkActive ? 'border-b border-[var(--foreground)]' : ''} text-6xl md:text-lg`}
              onClick={() => {
                setIsBurgerActive(false);
              }}
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
