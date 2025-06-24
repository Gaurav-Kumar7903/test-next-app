'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();

  const isActive = useCallback(
    (path: string) => pathname === path,
    [pathname]
  );

  const navLinks = useMemo(
    () =>
      navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
            isActive(item.path)
              ? 'bg-indigo-600 text-white'
              : 'text-gray-700 hover:bg-indigo-100'
          }`}
        >
          {item.name}
        </Link>
      )),
    [isActive]
  );

  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-700">MyPortfolio</div>
        <div className="flex space-x-4">{navLinks}</div>
      </div>
    </nav>
  );
};

export default Navbar;
