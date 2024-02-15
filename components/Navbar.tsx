'use client';

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Btn from './Btn';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/Aqua.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col lg:flex-row h-full gap-12 lg:flex`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 fleCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">

      </div>

      <Image
        src="menu.svg"
        alt="hamburger"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
