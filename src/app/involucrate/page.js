// src/app/involucrate/page.js
import Link from 'next/link';

// --- (Inicio) Definición de Estilos (CSS-en-JS) ---

const sectionPadding = {
  padding: '80px 20px',
  maxWidth: '1200px',
  margin: '0 auto',
};

// 1. Estilos Sección Hero (Llamado a la Acción)
const heroSectionStyle = {
  backgroundColor: '#00897B', // Teal Corporativo
  color: '#FFFFFF',
  textAlign: 'center',
  padding: '100px 20px',
};

const heroTitleStyle = {
  fontFamily: 'var(--font-montserrat)',
  fontSize: '42px',
  fontWeight: 'bold',
  marginBottom: '20px',
  lineHeight: 1.2,
};

const heroSubtitleStyle = {
  fontFamily: 'var(--font-nunito)',
  fontSize: '20px',
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: 1.5,
  opacity: 0.9,
};

// 2. Estilos Opciones de Involucramiento
const optionsSectionStyle = {
  backgroundColor: '#F4F4F4', // Fondo Gris Claro
  width: '100%',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // Tarjetas anchas
  gap: '40px',
  alignItems: 'stretch', // Para que tengan la misma altura
};

const cardStyle = {
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  padding: '40px 30px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Empuja el botón al fondo
  borderTop: '5px solid transparent', // Borde base
};

// Estilo especial para la tarjeta de Donaciones (Resaltada)
const donationCardStyle = {
  ...cardStyle,
  borderTop: '5px solid #F57C00', // Borde Naranja
  transform: 'scale(1.02)', // Un poco más grande para destacar
  boxShadow: '0 8px 25px rgba(245, 124, 0, 0.15)', // Sombra naranja sutil
};

const allianceCardStyle = {
  ...cardStyle,
  borderTop: '5px solid #00897B', // Borde Teal
};

const volunteerCardStyle = {
  ...cardStyle,
  borderTop: '5px solid #333333', // Borde Gris
};

const conceptStyle = {
  fontFamily: 'var(--font-nunito)',
  fontSize: '14px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight: 'bold',
  marginBottom: '15px',
  display: 'block',
};

const cardTitleStyle = {
  fontFamily: 'var(--font-montserrat)',
  fontSize: '26px',
  color: '#333333',
  marginBottom: '20px',
  fontWeight: 'bold',
};

const cardTextStyle = {
  fontFamily: 'var(--font-nunito)',
  color: '#555',
  fontSize: '16px',
  lineHeight: 1.6,
  marginBottom: '30px',
};

// Botones
const btnBaseStyle = {
  display: 'inline-block',
  padding: '12px 25px',
  borderRadius: '50px',
  fontFamily: 'var(--font-montserrat)',
  fontWeight: 'bold',
  textDecoration: 'none',
  fontSize: '16px',
  transition: 'background 0.3s',
};

const btnDonateStyle = {
  ...btnBaseStyle,
  backgroundColor: '#F57C00', // Naranja
  color: '#FFFFFF',
};

const btnAllianceStyle = {
  ...btnBaseStyle,
  backgroundColor: '#00897B', // Teal
  color: '#FFFFFF',
};

const btnVolunteerStyle = {
  ...btnBaseStyle,
  backgroundColor: 'transparent',
  border: '2px solid #333333',
  color: '#333333',
};

// --- (Fin) Definición de Estilos ---


export default function InvolucratePage() {
  return (
    <div>
      
      {/* 1. SECCIÓN HERO */}
      <section style={heroSectionStyle}>
        <h1 style={heroTitleStyle}>
          Tu aporte reescribe historias.
        </h1>
        <p style={heroSubtitleStyle}>
          "La mies es mucha y los obreros pocos." Descubre cómo tus manos, tus recursos o tu influencia pueden acelerar la restauración de vidas.
        </p>
      </section>

      {/* 2. OPCIONES DE INVOLUCRAMIENTO */}
      <div style={optionsSectionStyle}>
        <section style={sectionPadding}>
          <div style={gridStyle}>
            
            {/* OPCIÓN 1: DONACIONES (Sembrar) */}
            <div style={donationCardStyle}>
              <div>
                <span style={{...conceptStyle, color: '#F57C00'}}>Sembrar</span>
                <h2 style={cardTitleStyle}>Donaciones</h2>
                <p style={cardTextStyle}>
                  "Sembrar en tierra fértil." Tu donación no es un gasto, es una inversión en el Reino y en la sociedad. Sostenemos terapias, materiales educativos y ayuda social gracias a ti.
                </p>
              </div>
              <div>
                <Link href="/donar" style={btnDonateStyle}>
                  Sembrar Ahora
                </Link>
              </div>
            </div>

            {/* OPCIÓN 2: ALIANZAS (Estratégico) */}
            <div style={allianceCardStyle}>
              <div>
                <span style={{...conceptStyle, color: '#00897B'}}>Estratégico</span>
                <h2 style={cardTitleStyle}>Alianzas</h2>
                <p style={cardTextStyle}>
                  "Unidos somos más fuertes." Buscamos iglesias, empresas y fundaciones para ampliar nuestro alcance. Si representas a una organización, hagamos equipo.
                </p>
              </div>
              <div>
                {/* Redirige al formulario de contacto general por ahora */}
                <Link href="/ayuda" style={btnAllianceStyle}>
                  Contactar Alianza
                </Link>
              </div>
            </div>

            {/* OPCIÓN 3: VOLUNTARIADO (Servicio) */}
            <div style={volunteerCardStyle}>
              <div>
                <span style={{...conceptStyle, color: '#333333'}}>Servicio</span>
                <h2 style={cardTitleStyle}>Voluntariado y Oración</h2>
                <p style={cardTextStyle}>
                  "Sirviendo con propósito." Ya sea con tu profesión (psicólogos, abogados, maestros) o con tu tiempo y oración, hay un lugar para ti en la familia Fundazoe.
                </p>
              </div>
              <div>
                {/* Redirige al formulario de contacto general por ahora */}
                <Link href="/ayuda" style={btnVolunteerStyle}>
                  Quiero Servir
                </Link>
              </div>
            </div>

          </div>
        </section>
      </div>

    </div>
  );
}