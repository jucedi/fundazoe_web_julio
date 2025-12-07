// src/components/Header.js

"use client"; // Marca este como un componente de cliente para poder usar estado e interactividad

import { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink'; // Importamos nuestro componente inteligente
import styles from './Header.module.css';

export default function Header() {
  // Estado para saber si el menú móvil está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  // Definimos los enlaces de navegación en un solo lugar
  const navLinks = [
    { name: 'Quiénes Somos', href: '/quienes-somos' },
    { name: 'Nuestros Programas', href: '/programas' },
    { name: 'Recursos', href: '/recursos' },
    { name: 'Involúcrate', href: '/involucrate' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className={styles.header}>
      {/* --- Logo que lleva al inicio --- */}
      <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
        FUNDAZOE
      </Link>

      {/* --- Navegación para Escritorio --- */}
      <nav className={styles.navDesktop}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              {/* Usamos NavLink para que detecte la página activa */}
              <NavLink href={link.href}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- Botón de Hamburguesa para Móvil --- */}
      <button 
        className={styles.hamburgerButton} 
        onClick={() => setMenuOpen(!menuOpen)} // Alterna el estado (abrir/cerrar)
        aria-label="Abrir menú"
      >
        {menuOpen ? '✕' : '☰'} 
      </button>

      {/* --- Menú Desplegable Móvil (solo se muestra si menuOpen es true) --- */}
      {menuOpen && (
        <div className={styles.navMobile}>
          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  {/* También usamos NavLink aquí, y cerramos el menú al hacer clic */}
                  <NavLink href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}