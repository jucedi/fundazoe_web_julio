// src/app/donar/page.js
import Link from 'next/link';

// --- ESTILOS ---
const TEAL = '#00897B';
const ORANGE = '#F57C00';
const DARK = '#333333';
const LIGHT_BG = '#F8F9FA';

export default function DonarPage() {
  
  // Estilos (CSS-in-JS)
  const container = { maxWidth: '1000px', margin: '0 auto', padding: '60px 24px' };
  
  const heroStyle = {
    textAlign: 'center',
    padding: '80px 24px',
    backgroundColor: TEAL,
    color: 'white',
    borderRadius: '0 0 20px 20px', // Borde redondeado abajo
    marginBottom: '60px'
  };

  const sectionTitle = { fontFamily: 'var(--font-montserrat)', fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' };
  const sectionText = { fontFamily: 'var(--font-nunito)', fontSize: '18px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6', opacity: 0.95 };

  // GRID RESPONSIVO (La mejora clave)
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Se adapta a móviles automáticamente
    gap: '30px',
    marginBottom: '60px'
  };

  const cardStyle = {
    backgroundColor: '#FFFFFF',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    borderTop: `5px solid ${ORANGE}`,
    textAlign: 'center'
  };

  const bankLabel = { fontSize: '14px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px', display: 'block' };
  const bankData = { fontSize: '20px', color: DARK, fontWeight: 'bold', fontFamily: 'var(--font-montserrat)', marginBottom: '20px', display: 'block' };

  return (
    <div style={{ backgroundColor: '#FFF', minHeight: '100vh' }}>
      
      {/* 1. HERO */}
      <section style={heroStyle}>
        <h1 style={sectionTitle}>Tu generosidad transforma vidas</h1>
        <p style={sectionText}>
          Cada aporte, grande o pequeño, nos permite mantener las puertas abiertas, ofrecer terapias a bajo costo y llevar alimentos a quienes inician su proceso de restauración.
        </p>
      </section>

      <div style={container}>
        
        {/* 2. OPCIONES DE DONACIÓN */}
        <h2 style={{...sectionTitle, color: DARK, textAlign: 'center', fontSize: '28px'}}>Canales de Donación</h2>
        <p style={{textAlign: 'center', marginBottom: '40px', color: '#666'}}>Elige el medio que sea más fácil para ti.</p>

        <div style={gridStyle}>
          
          {/* Opción A: Transferencia Bancaria */}
          <div style={cardStyle}>
            <div style={{fontSize: '40px', marginBottom: '15px'}}>🏦</div>
            <h3 style={{color: TEAL, fontSize: '22px', fontWeight: 'bold', marginBottom: '20px'}}>Cuenta Bancaria</h3>
            
            <div style={{textAlign: 'left', background: LIGHT_BG, padding: '20px', borderRadius: '8px'}}>
              <span style={bankLabel}>Banco</span>
              <span style={bankData}>Bancolombia</span>
              
              <span style={bankLabel}>Tipo de Cuenta</span>
              <span style={bankData}>Ahorros</span>
              
              <span style={bankLabel}>Número de Cuenta</span>
              <span style={bankData}>000-000000-00</span> {/* ¡PON TU NÚMERO REAL AQUÍ! */}
              
              <span style={bankLabel}>A nombre de</span>
              <span style={{...bankData, marginBottom: 0}}>Fundación Fundazoe</span>
            </div>
            <p style={{fontSize: '14px', marginTop: '15px', color: '#888'}}>NIT: 900.000.000-0</p>
          </div>

          {/* Opción B: Billeteras Digitales (Nequi/Daviplata) */}
          <div style={{...cardStyle, borderTop: `5px solid ${TEAL}`}}>
            <div style={{fontSize: '40px', marginBottom: '15px'}}>📱</div>
            <h3 style={{color: TEAL, fontSize: '22px', fontWeight: 'bold', marginBottom: '20px'}}>Billeteras Digitales</h3>
            
            <p style={{marginBottom: '20px', color: '#555'}}>Escanea el código QR o usa el número celular.</p>
            
            {/* Placeholder para QR */}
            <div style={{width: '150px', height: '150px', background: '#EEE', margin: '0 auto 20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', color: '#AAA'}}>
              (Código QR)
            </div>

            <div style={{textAlign: 'center', background: LIGHT_BG, padding: '15px', borderRadius: '8px'}}>
              <span style={bankLabel}>Nequi / Daviplata</span>
              <span style={bankData}>300 000 0000</span> {/* ¡PON TU NÚMERO REAL AQUÍ! */}
            </div>
          </div>

        </div>

        {/* 3. TRANSPARENCIA Y CONTACTO */}
        <div style={{backgroundColor: LIGHT_BG, padding: '40px', borderRadius: '16px', textAlign: 'center'}}>
          <h3 style={{fontFamily: 'var(--font-montserrat)', fontSize: '24px', fontWeight: 'bold', color: DARK, marginBottom: '15px'}}>¿Necesitas certificado de donación?</h3>
          <p style={{fontFamily: 'var(--font-nunito)', fontSize: '16px', color: '#555', marginBottom: '25px'}}>
            Escríbenos enviando tu comprobante y tus datos fiscales. Te enviaremos el certificado tributario correspondiente.
          </p>
          <a href="https://wa.me/573000000000" target="_blank" style={{display: 'inline-block', padding: '12px 30px', backgroundColor: '#25D366', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold'}}>
            Enviar Comprobante por WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}