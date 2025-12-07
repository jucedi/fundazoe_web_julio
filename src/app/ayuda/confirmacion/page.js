import Link from 'next/link';
export default function Confirmacion() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ color: '#00897B' }}>¡Mensaje Recibido!</h1>
      <p style={{ fontSize: '18px', margin: '20px 0' }}>Gracias por confiar en Fundazoe. Hemos recibido tu solicitud.</p>
      <Link href="/" style={{ textDecoration: 'underline', color: '#F57C00' }}>Volver al Inicio</Link>
    </div>
  );
}