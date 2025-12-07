// src/components/SubNav.js
import NavLink from './NavLink'; // Reutilizamos nuestro componente de enlace activo
import styles from './SubNav.module.css';

export default function SubNav() {
  const links = [
    { name: 'Nuestra Historia', href: '/quienes-somos' },
    { name: 'Misión y Visión', href: '/quienes-somos/mision-vision' },
    { name: 'Nuestro Equipo', href: '/quienes-somos/equipo' },
  ];

  return (
    <nav className={styles.subNav}>
      {links.map(link => (
        <NavLink key={link.href} href={link.href}>
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}