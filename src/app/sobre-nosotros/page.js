// src/app/sobre-nosotros/page.js

// --- PALETA DE COLORES ---
const TEAL = '#00897B';
const ORANGE = '#F57C00';
const DARK = '#333333';
const LIGHT_BG = '#F8F9FA';

// --- ESTILOS (CSS-en-JS) ---

const sectionPadding = {
  padding: '80px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
};

// 1. HERO SECTION (Identidad)
const heroSectionStyle = {
  backgroundColor: TEAL,
  color: '#FFFFFF',
  textAlign: 'center',
  padding: '100px 24px',
  // Un patrón de fondo sutil o degradado para darle textura
  backgroundImage: 'linear-gradient(135deg, #00897B 0%, #00695C 100%)',
};

const heroTitle = {
  fontFamily: 'var(--font-montserrat)',
  fontSize: 'clamp(36px, 5vw, 48px)',
  fontWeight: 'bold',
  marginBottom: '20px',
  lineHeight: '1.2',
};

const heroSubtitle = {
  fontFamily: 'var(--font-nunito)',
  fontSize: 'clamp(18px, 2vw, 22px)',
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.6',
  opacity: 0.9,
};

// 2. SECCIÓN BRÚJULA (Misión y Visión)
const compassSection = {
  backgroundColor: '#FFFFFF',
  ...sectionPadding,
};

const compassHeader = {
  textAlign: 'center',
  marginBottom: '60px',
};

const sectionTitle = {
  fontFamily: 'var(--font-montserrat)',
  fontSize: '32px',
  color: DARK,
  fontWeight: 'bold',
  marginBottom: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

const divider = {
  width: '60px',
  height: '4px',
  backgroundColor: ORANGE,
  margin: '0 auto',
};

const compassGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // Dos columnas responsivas
  gap: '50px',
  alignItems: 'start',
};

const compassCard = {
  padding: '40px',
  backgroundColor: '#FFF',
  borderLeft: `6px solid ${ORANGE}`, // Línea lateral naranja distintiva
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  borderRadius: '0 12px 12px 0',
};

const compassCardTitle = {
  fontFamily: 'var(--font-montserrat)',
  fontSize: '24px',
  color: TEAL,
  fontWeight: 'bold',
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const compassText = {
  fontFamily: 'var(--font-nunito)',
  fontSize: '18px',
  color: '#555',
  lineHeight: '1.8',
  fontStyle: 'italic', // Estilo cita para los textos textuales
};

// 3. SECCIÓN OBJETIVOS (Manifiesto)
const objectivesSection = {
  backgroundColor: LIGHT_BG,
  width: '100%',
};

const objectivesGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px',
  marginTop: '50px',
};

const objectiveCard = {
  backgroundColor: '#FFFFFF',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
  transition: 'transform 0.2s ease',
  borderBottom: `3px solid transparent`,
};

// Efecto hover simple en JS (se aplicaría mejor con CSS real, pero esto funciona)
const objectiveTitle = {
  fontFamily: 'var(--font-montserrat)',
  fontSize: '20px',
  color: DARK,
  fontWeight: 'bold',
  marginBottom: '15px',
};

const objectiveText = {
  fontFamily: 'var(--font-nunito)',
  fontSize: '16px',
  color: '#666',
  lineHeight: '1.6',
};

const iconStyle = {
  color: TEAL,
  fontSize: '24px',
  marginRight: '10px',
};

// --- COMPONENTE PRINCIPAL ---

export default function SobreNosotrosPage() {
  return (
    <div>
      
      {/* 1. HERO: Identidad */}
      <section style={heroSectionStyle}>
        <h1 style={heroTitle}>
          Más que una fundación, somos una familia de fe.
        </h1>
        <p style={heroSubtitle}>
          Conoce el corazón detrás de Fundazoe y nuestra pasión por restaurar lo que parecía perdido.
        </p>
      </section>

      {/* 2. BRÚJULA: Misión y Visión */}
      <section style={compassSection}>
        <div style={compassHeader}>
          <h2 style={sectionTitle}>Nuestra Brújula</h2>
          <div style={divider}></div>
        </div>
        
        <div style={compassGrid}>
          {/* Tarjeta Misión */}
          <div style={compassCard}>
            <h3 style={compassCardTitle}>
              <span>🧭</span> Misión
            </h3>
            <p style={compassText}>
              "Transformar vidas a través del amor y la verdad de JESUCRISTO, ser una luz de esperanza para quienes luchan contra las adicciones y la autodestrucción, por medio de programas basados en principios cristianos."
            </p>
          </div>

          {/* Tarjeta Visión */}
          <div style={compassCard}>
            <h3 style={compassCardTitle}>
              <span>🔭</span> Visión
            </h3>
            <p style={compassText}>
              "Ser un referente en la transformación de vidas, no solo en nuestro entorno local, sino también fuera de nuestras fronteras, con el principal propósito de darle la gloria a nuestro SEÑOR JESUS quien Es nuestra razón de ser, y la fuente de nuestra motivación."
            </p>
          </div>
        </div>
      </section>

      {/* 3. MANIFIESTO: Objetivos */}
      <div style={objectivesSection}>
        <section style={sectionPadding}>
          <div style={compassHeader}>
            <h2 style={{...sectionTitle, color: TEAL}}>Nuestros Objetivos</h2>
            <p style={{fontFamily: 'var(--font-nunito)', fontSize: '18px', color: '#666'}}>Nuestro manifiesto de acción</p>
          </div>

          <div style={objectivesGrid}>
            
            <div style={objectiveCard}>
              <h3 style={objectiveTitle}><span style={iconStyle}>01.</span> Consejería con Propósito</h3>
              <p style={objectiveText}>
                Ofrecer consejería individual y grupal desde una perspectiva bíblica para generar conciencia y decisiones.
              </p>
            </div>

            <div style={objectiveCard}>
              <h3 style={objectiveTitle}><span style={iconStyle}>02.</span> Planes Personalizados</h3>
              <p style={objectiveText}>
                Desarrollar planes de acción por etapas para supervisar objetivos y evaluar resultados.
              </p>
            </div>

            <div style={objectiveCard}>
              <h3 style={objectiveTitle}><span style={iconStyle}>03.</span> Familia Terapéutica</h3>
              <p style={objectiveText}>
                Capacitar a padres y tutores para ser el soporte y respuesta inmediata de apoyo.
              </p>
            </div>

            <div style={objectiveCard}>
              <h3 style={objectiveTitle}><span style={iconStyle}>04.</span> Prevención Activa</h3>
              <p style={objectiveText}>
                Programas en escuelas y empresas para frenar la problemática antes de que inicie.
              </p>
            </div>

            <div style={objectiveCard}>
              <h3 style={objectiveTitle}><span style={iconStyle}>05.</span> Trabajo en Equipo</h3>
              <p style={objectiveText}>
                Crear alianzas estratégicas para ampliar nuestro alcance.
              </p>
            </div>

          </div>
        </section>
      </div>

    </div>
  );
}