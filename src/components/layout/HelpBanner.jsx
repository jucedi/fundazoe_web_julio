// src/components/layout/HelpBanner.jsx
'use client'; 

import Link from 'next/link'; 

// Estilos en línea para replicar el Mockup 1
const bannerStyle = {
  backgroundColor: '#F57C00', // Naranja Acento
  color: '#FFFFFF',          // Blanco
  padding: '12px 20px',
  textAlign: 'center',
  // Fijo en la parte superior
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 100, // Z-index alto para estar siempre al frente
  fontFamily: 'var(--font-nunito)',
  fontWeight: 'bold',
  fontSize: '16px',
};

const linkStyle = {
  textDecoration: 'underline',
  fontWeight: 'bold',
  marginLeft: '15px',
  color: 'white',
};

export default function HelpBanner() {
  return (
    <div style={bannerStyle}>
      <span>¿Necesitas apoyo? Estamos aquí para ti.</span>
      <Link href="/ayuda" style={linkStyle}>
        NECESITO AYUDA AHORA
      </Link>
      {/* TODO: Añadir el número de teléfono cuando lo defina el cliente */}
      {/* <span style={{ marginLeft: '15px' }}>O llama al: (Número)</span> */}
    </div>
  );
}