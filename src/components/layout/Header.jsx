'use client';
import Link from 'next/link';
import Image from 'next/image';

const headerStyle = { 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between', 
  padding: '10px 40px', 
  position: 'fixed', 
  top: 0, 
  left: 0, 
  width: '100%', 
  background: 'white', 
  borderBottom: '1px solid #eee', 
  zIndex: 100 
};

const navStyle = { 
  display: 'flex', 
  alignItems: 'center',
  gap: '20px' // Espacio uniforme entre enlaces
};

const linkStyle = { 
  fontWeight: 'bold', 
  color: '#00897B', 
  fontSize: '16px',
  textDecoration: 'none'
};

const ctaButtonStyle = {
  ...linkStyle,
  background: '#F57C00', 
  color: 'white', 
  padding: '10px 20px', 
  borderRadius: '20px',
  transition: 'transform 0.2s'
};

export default function Header() {
  return (
    <header style={headerStyle}>
      {/* Logo */}
      <Link href="/">
        <Image 
          src="/images/logo.png" 
          alt="Fundazoe" 
          width={50} 
          height={50} 
          style={{borderRadius:'50%', objectFit:'cover'}} 
          priority 
        />
      </Link>

      {/* Navegación Completa */}
      <nav style={navStyle}>
        <Link href="/sobre-nosotros" style={linkStyle}>Nosotros</Link>
        <Link href="/programas" style={linkStyle}>Programas</Link>
        <Link href="/articulos" style={linkStyle}>Blog</Link>
        <Link href="/involucrate" style={linkStyle}>Involúcrate</Link>
        
        {/* Botón Destacado */}
        <Link href="/ayuda" style={ctaButtonStyle}>
          Pedir Ayuda
        </Link>
      </nav>
    </header>
  );
}