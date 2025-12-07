// src/components/NavLink.js
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css'; // Reutilizamos los estilos del Header

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? styles.active : ''}>
      {children}
    </Link>
  );
}
