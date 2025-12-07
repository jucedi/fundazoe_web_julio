// src/components/layout/Footer.jsx
import Link from 'next/link';

// --- ESTILOS ---
const TEAL = '#00897B';
const ORANGE = '#F57C00';
const DARK_BG = '#263238'; // Un gris muy oscuro/azulado para el fondo
const TEXT_GRAY = '#B0BEC5';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: DARK_BG, color: 'white', paddingTop: '60px', paddingBottom: '20px', fontFamily: 'var(--font-nunito)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        
        {/* Columna 1: Identidad */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-montserrat)', fontSize: '20px', fontWeight: 'bold', color: ORANGE, marginBottom: '20px' }}>
            Fundazoe
          </h3>
          <p style={{ color: TEXT_GRAY, lineHeight: '1.6', fontSize: '15px' }}>
            Transformando vidas con principios eternos. Una luz de esperanza para la restauración integral de las familias.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Explora</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}><Link href="/sobre-nosotros" style={{ color: TEXT_GRAY, textDecoration: 'none' }}>Quiénes Somos</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/programas" style={{ color: TEXT_GRAY, textDecoration: 'none' }}>Nuestros Programas</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/articulos" style={{ color: TEXT_GRAY, textDecoration: 'none' }}>Blog de Esperanza</Link></li>
            <li><Link href="/involucrate" style={{ color: TEXT_GRAY, textDecoration: 'none' }}>Voluntariado</Link></li>
          </ul>
        </div>

        {/* Columna 3: Acción y Contacto */}
        <div>
          <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Actúa Hoy</h4>
          <Link href="/donar" style={{ display: 'inline-block', backgroundColor: TEAL, color: 'white', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', marginBottom: '20px' }}>
            Hacer una Donación
          </Link>
          <p style={{ color: TEXT_GRAY, fontSize: '14px' }}>
            ¿Necesitas ayuda inmediata?<br/>
            <Link href="/ayuda" style={{ color: ORANGE, textDecoration: 'underline' }}>Contáctanos aquí</Link>
          </p>
        </div>

      </div>

      {/* Barra Final */}
      <div style={{ borderTop: '1px solid #37474F', marginTop: '50px', paddingTop: '20px', textAlign: 'center', fontSize: '14px', color: '#546E7A' }}>
        <p>© {new Date().getFullYear()} Fundación Fundazoe. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}