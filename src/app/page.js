// src/app/page.js
import Link from 'next/link';

// --- PALETA DE COLORES DE LA MARCA ---
const TEAL = '#00897B';   // Verde Azulado (Esperanza, Salud)
const ORANGE = '#F57C00'; // Naranja (Energía, Restauración)
const DARK = '#333333';   // Texto Principal
const LIGHT_BG = '#F8F9FA'; // Fondo Suave

// --- ESTILOS (CSS-en-JS) ---

const sectionPadding = {
  padding: '80px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
};

// 1. HERO SECTION (Impacto Visual Alto)
const heroStyle = {
  position: 'relative',
  // Usamos '85vh' para que sea impactante pero deje ver que hay más contenido
  height: '85vh', 
  minHeight: '600px', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // Imagen cinematográfica de amanecer (Esperanza)
  backgroundImage: "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2000&auto=format&fit=crop')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  textAlign: 'center',
};

const heroOverlay = {
  position: 'absolute',
  top: 0, left: 0, right: 0, bottom: 0,
  background: 'linear-gradient(rgba(0, 50, 50, 0.6), rgba(0, 0, 0, 0.8))', // Degradado elegante
  zIndex: 1,
};

const heroContent = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '900px',
  padding: '20px',
  color: '#FFFFFF',
};

const heroTitle = {
  fontFamily: 'var(--font-montserrat)',
  fontSize: 'clamp(36px, 5vw, 56px)', // Fuente responsiva grande
  fontWeight: '800',
  lineHeight: '1.1',
  marginBottom: '24px',
  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
};

const heroSubtitle = {
  fontFamily: 'var(--font-nunito)',
  fontSize: 'clamp(18px, 2vw, 24px)',
  fontWeight: '300',
  marginBottom: '40px',
  lineHeight: '1.6',
  opacity: 0.95,
};

// Botones CTA (Llamado a la acción)
const btnBase = {
  display: 'inline-block',
  padding: '16px 32px',
  fontSize: '18px',
  fontWeight: 'bold',
  borderRadius: '50px',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  margin: '10px',
  cursor: 'pointer',
};

const btnPrimary = {
  ...btnBase,
  backgroundColor: ORANGE,
  color: '#FFFFFF',
  border: `2px solid ${ORANGE}`,
  boxShadow: '0 4px 15px rgba(245, 124, 0, 0.4)', // Resplandor naranja
};

const btnSecondary = {
  ...btnBase,
  backgroundColor: 'transparent',
  color: '#FFFFFF',
  border: '2px solid #FFFFFF',
};

// 2. SECCIÓN CONFLICTO (Empatía)
const conflictSection = {
  backgroundColor: '#FFFFFF',
  borderBottom: '1px solid #eee',
};

const conflictContainer = {
  ...sectionPadding,
  display: 'flex',
  flexWrap: 'wrap', // Para móviles
  alignItems: 'center',
  gap: '60px',
};

const conflictText = {
  flex: '1 1 400px',
};

const conflictImage = {
  flex: '1 1 400px',
  height: '400px',
  borderRadius: '16px',
  backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop')", // Nueva imagen de apoyo/consejería
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
};

// 3. SECCIÓN MÉTODO (Grid Responsivo)
const methodSection = {
  backgroundColor: LIGHT_BG,
};

const gridContainer = {
  display: 'grid',
  // Esto crea el efecto "grid-cols-1 md:grid-cols-2" automáticamente
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
  gap: '40px',
  marginTop: '50px',
};

const serviceCard = {
  backgroundColor: '#FFFFFF',
  padding: '40px 30px',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  borderTop: `6px solid ${TEAL}`, // Detalle de marca superior
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s',
};

const cardIcon = {
  fontSize: '48px',
  marginBottom: '20px',
  color: TEAL,
};

const sectionHeading = {
  textAlign: 'center',
  fontFamily: 'var(--font-montserrat)',
  fontSize: '36px',
  fontWeight: 'bold',
  color: DARK,
  marginBottom: '16px',
};

// 4. SECCIÓN IDENTIDAD (Visión)
const identitySection = {
  backgroundColor: TEAL,
  color: '#FFFFFF',
  textAlign: 'center',
  padding: '100px 24px',
};

// 5. LLAMADO A LA ALIANZA
const allianceSection = {
  backgroundColor: DARK,
  color: '#FFFFFF',
  ...sectionPadding,
  textAlign: 'center',
};

// --- COMPONENTE PRINCIPAL ---

export default function HomePage() {
  return (
    <div>
      
      {/* 1. HERO: La Promesa */}
      <section style={heroStyle}>
        <div style={heroOverlay}></div>
        <div style={heroContent}>
          <h1 style={heroTitle}>
            Una Luz de <span style={{color: ORANGE}}>Esperanza</span> frente a la Adicción.
          </h1>
          <p style={heroSubtitle}>
            Transformamos vidas a través del amor y la verdad de <strong style={{color: ORANGE}}>Jesucristo</strong>. Un camino de restauración integral donde la fe es nuestra fuente inagotable.
          </p>
          <div>
            <Link href="/ayuda" style={btnPrimary}>
              Solicitar Ayuda Ahora
            </Link>
            <Link href="/programas" style={btnSecondary}>
              Conocer Nuestro Enfoque
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CONFLICTO: Empatía */}
      <section style={conflictSection}>
        <div style={conflictContainer}>
          <div style={conflictImage}></div>
          <div style={conflictText}>
            <h2 style={{...sectionHeading, textAlign: 'left', color: TEAL}}>¿La batalla parece imposible?</h2>
            <p style={{fontFamily: 'var(--font-nunito)', fontSize: '18px', lineHeight: '1.8', color: '#555'}}>
              Sabemos que luchar contra las adicciones es enfrentar una tormenta que afecta el cuerpo, la mente y el espíritu. 
              <br/><br/>
              Pero no tienes que caminar solo. En <strong>Fundazoe</strong>, entendemos tu dolor y creemos firmemente que ninguna vida está perdida cuando se encuentra con la <strong style={{color: ORANGE}}>Verdad</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MÉTODO: Grid de Servicios */}
      <section style={methodSection}>
        <div style={sectionPadding}>
          <h2 style={sectionHeading}>Un Plan de Acción para la <span style={{color: TEAL}}>Restauración</span></h2>
          <p style={{textAlign:'center', fontSize:'18px', maxWidth:'700px', margin:'0 auto', color:'#666'}}>
            Profesionalismo terapéutico + Principios de fe.
          </p>

          <div style={gridContainer}>
            {/* Tarjeta 1 */}
            <div style={serviceCard}>
              <span style={cardIcon}>📖</span>
              <h3 style={{fontSize:'22px', fontWeight:'bold', marginBottom:'10px', color: DARK}}>Consejería Bíblica</h3>
              <p style={{lineHeight:'1.6', color:'#555'}}>
                Integramos una perspectiva profesional con el enfoque bíblico para generar conciencia y sanidad interior.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div style={serviceCard}>
              <span style={cardIcon}>📈</span>
              <h3 style={{fontSize:'22px', fontWeight:'bold', marginBottom:'10px', color: DARK}}>Proceso Paso a Paso</h3>
              <p style={{lineHeight:'1.6', color:'#555'}}>
                No improvisamos. Desarrollamos un plan de acción personalizado por etapas claras para medir el avance.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div style={serviceCard}>
              <span style={cardIcon}>🏠</span>
              <h3 style={{fontSize:'22px', fontWeight:'bold', marginBottom:'10px', color: DARK}}>Familia como Soporte</h3>
              <p style={{lineHeight:'1.6', color:'#555'}}>
                Capacitamos a los padres para que sean un soporte terapéutico determinante en la recuperación.
              </p>
            </div>

            {/* Tarjeta 4 */}
            <div style={serviceCard}>
              <span style={cardIcon}>🛡️</span>
              <h3 style={{fontSize:'22px', fontWeight:'bold', marginBottom:'10px', color: DARK}}>Prevención Activa</h3>
              <p style={{lineHeight:'1.6', color:'#555'}}>
                Llevamos programas a escuelas y empresas. Creemos que la mejor batalla es la que se evita antes de comenzar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IDENTIDAD: Razón de Ser */}
      <section style={identitySection}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{...sectionHeading, color: '#FFFFFF'}}>Nuestra Razón de Ser</h2>
          <p style={{fontFamily: 'var(--font-nunito)', fontSize: '20px', lineHeight: '1.8', opacity: 0.95}}>
            "Aspiramos a ser un referente de transformación traspasando fronteras. Todo lo que hacemos tiene un propósito principal: darle toda la gloria a nuestro <strong style={{color: ORANGE}}>Señor Jesús</strong>, quien es el motor y la fuente de nuestra esperanza."
          </p>
        </div>
      </section>

      {/* 5. ALIANZA: Expansión */}
      <section style={allianceSection}>
        <h2 style={{...sectionHeading, color: '#FFFFFF'}}>Multipliquemos el Impacto</h2>
        <p style={{fontSize: '18px', marginBottom: '30px', color: '#CCC'}}>
          La misión es grande y necesitamos manos unidas. Buscamos alianzas con iglesias y empresas.
        </p>
        <Link href="/involucrate" style={{...btnBase, backgroundColor: '#FFFFFF', color: DARK}}>
          Convertirme en Aliado
        </Link>
      </section>

    </div>
  );
}