// src/app/articulos/[id]/page.js
import Link from "next/link";
import { ARTICULOS_DATA } from "@/data/articulos";

// --- ESTILOS ---
const TEAL = '#00897B';
const ORANGE = '#F57C00';
const DARK = '#333333';

export default async function DetalleArticulo({ params }) {
  // En Next.js 15, params es una promesa, hay que esperarla
  const { id } = await params;
  
  // Buscamos el artículo por ID
  const articulo = ARTICULOS_DATA.find(a => a.id === Number(id));

  if (!articulo) {
    return (
      <div style={{textAlign: 'center', padding: '100px'}}>
        <h1>Artículo no encontrado</h1>
        <Link href="/articulos" style={{color: ORANGE}}>Volver</Link>
      </div>
    );
  }

  // Estilos Específicos
  const headerStyle = {
    position: 'relative',
    height: '50vh',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${articulo.imagen})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '20px'
  };

  const contentContainer = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '60px 24px',
    fontFamily: 'var(--font-nunito)',
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#444'
  };

  return (
    <main>
      {/* 1. HEADER DEL ARTÍCULO */}
      <div style={headerStyle}>
        <div style={{maxWidth: '900px'}}>
          <span style={{backgroundColor: ORANGE, padding: '5px 15px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase'}}>{articulo.categoria}</span>
          <h1 style={{fontFamily: 'var(--font-montserrat)', fontSize: '42px', margin: '20px 0', lineHeight: '1.2'}}>{articulo.titulo}</h1>
          <p style={{fontSize: '16px', opacity: 0.9}}>Por: {articulo.autor} • {articulo.fecha}</p>
        </div>
      </div>

      {/* 2. CONTENIDO (Renderizado HTML) */}
      <article style={contentContainer}>
        {/* Usamos dangerouslySetInnerHTML para mostrar el contenido rico */}
        <div dangerouslySetInnerHTML={{ __html: articulo.contenido }} />
        
        <div style={{marginTop: '60px', borderTop: '1px solid #eee', paddingTop: '30px'}}>
          <Link href="/articulos" style={{color: TEAL, fontWeight: 'bold', textDecoration: 'none'}}>
            &larr; Volver a la Biblioteca
          </Link>
        </div>
      </article>

      {/* 3. CTA RELACIONADO */}
      <section style={{backgroundColor: '#F4F4F4', padding: '60px 20px', textAlign: 'center'}}>
        <h3 style={{fontFamily: 'var(--font-montserrat)', fontSize: '28px', color: DARK, marginBottom: '15px'}}>¿Necesitas ayuda con este tema?</h3>
        <p style={{marginBottom: '30px', color: '#666'}}>No tienes que procesar esta información solo.</p>
        <Link href="/ayuda" style={{backgroundColor: TEAL, color: 'white', padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold'}}>
          Hablar con un Consejero
        </Link>
      </section>
    </main>
  );
}