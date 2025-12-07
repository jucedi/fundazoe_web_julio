// src/app/programas/page.js

// --- (Inicio) Definición de Estilos (CSS-en-JS) ---

const sectionPadding = {
  padding: '80px 20px',
  maxWidth: '1200px',
  margin: '0 auto',
};

// 1. Estilos Sección Hero
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

// 2. Estilos Listado de Programas
const programsSectionStyle = {
  backgroundColor: '#F4F4F4', // Fondo Gris Claro
  width: '100%',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // Tarjetas anchas
  gap: '40px',
  alignItems: 'start',
};

const programCardStyle = {
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  overflow: 'hidden', // Para el borde superior
  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  borderTop: '6px solid #F57C00', // Borde Naranja para resaltar
  height: '100%', // Para que todas tengan la misma altura
  display: 'flex',
  flexDirection: 'column',
};

const cardContentStyle = {
  padding: '40px 30px',
};

const programNameStyle = {
  fontFamily: 'var(--font-montserrat)',
  fontSize: '26px',
  color: '#00897B', // Teal
  marginBottom: '10px',
  fontWeight: 'bold',
};

const programCategoryStyle = {
  fontFamily: 'var(--font-nunito)',
  fontSize: '14px',
  color: '#F57C00', // Naranja
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 'bold',
  marginBottom: '20px',
  display: 'block',
};

const descriptionStyle = {
  fontFamily: 'var(--font-nunito)',
  color: '#555',
  fontSize: '16px',
  lineHeight: 1.6,
  marginBottom: '30px',
};

const pointsListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const pointItemStyle = {
  fontFamily: 'var(--font-nunito)',
  fontSize: '16px',
  color: '#333',
  marginBottom: '12px',
  display: 'flex',
  alignItems: 'start',
};

const checkIconStyle = {
  color: '#00897B',
  marginRight: '10px',
  fontWeight: 'bold',
};

// --- (Fin) Definición de Estilos ---


export default function ProgramasPage() {
  return (
    <div>
      
      {/* 1. SECCIÓN HERO */}
      <section style={heroSectionStyle}>
        <h1 style={heroTitleStyle}>
          Un Camino Probado hacia la Libertad.
        </h1>
        <p style={heroSubtitleStyle}>
          Nuestros programas están diseñados para intervenir en cada etapa de la crisis, desde la prevención hasta la restauración total.
        </p>
      </section>

      {/* 2. LISTADO DE PROGRAMAS */}
      <div style={programsSectionStyle}>
        <section style={sectionPadding}>
          
          <div style={gridStyle}>
            
            {/* Programa 1: Renacer */}
            <div style={programCardStyle}>
              <div style={cardContentStyle}>
                <span style={programCategoryStyle}>El Proceso Personal</span>
                <h2 style={programNameStyle}>Programa "Renacer"</h2>
                <p style={descriptionStyle}>
                  Consejería individual y grupal con enfoque bíblico, diseñada para sanar el corazón y fortalecer la identidad.
                </p>
                <ul style={pointsListStyle}>
                  <li style={pointItemStyle}>
                    <span style={checkIconStyle}>✓</span> Diagnóstico integral.
                  </li>
                  <li style={pointItemStyle}>
                    <span style={checkIconStyle}>✓</span> Plan de acción por etapas.
                  </li>
                  <li style={pointItemStyle}>
                    <span style={checkIconStyle}>✓</span> Supervisión de objetivos específicos.
                  </li>
                </ul>
              </div>
            </div>

            {/* Programa 2: Escuela de Familias */}
            <div style={programCardStyle}>
              <div style={cardContentStyle}>
                <span style={programCategoryStyle}>El Pilar Familiar</span>
                <h2 style={programNameStyle}>Escuela de Familias</h2>
                <p style={descriptionStyle}>
                  Convertimos a los padres y tutores en "co-terapeutas" determinantes para el éxito del proceso.
                </p>
                <ul style={pointsListStyle}>
                  <li style={pointItemStyle}>
                    <span style={checkIconStyle}>✓</span> Orientación para tutores.
                  </li>
                  <li style={pointItemStyle}>
                    <span style={checkIconStyle}>✓</span> Herramientas de manejo de crisis.
                  </li>
                  <li style={pointItemStyle}>
                    <span style={checkIconStyle}>✓</span> Restauración del vínculo familiar.
                  </li>
                </ul>
              </div>
            </div>

            {/* Programa 3: Prevención */}
            <div style={programCardStyle}>
              <div style={cardContentStyle}>
                <span style={programCategoryStyle}>El Futuro</span>
                <h2 style={programNameStyle}>Proyecto "Luz y Verdad"</h2>
                <p style={descriptionStyle}>
                  Charlas y talleres en escuelas y empresas para llevar un mensaje de prevención y conciencia.
                </p>
                <ul style={pointsListStyle}>
                  <li style={pointItemStyle}>
                    <span style={checkIconStyle}>✓</span> Concientización temprana.
                  </li>
                  <li style={pointItemStyle}>
                    <span style={checkIconStyle}>✓</span> Detección de señales de alerta.
                  </li>
                  <li style={pointItemStyle}>
                    <span style={checkIconStyle}>✓</span> Fortalecimiento de valores.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </div>

    </div>
  );
}