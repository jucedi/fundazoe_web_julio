// src/app/articulos/page.js
import Link from 'next/link';
import Image from 'next/image';
import { ARTICULOS_DATA } from '@/data/articulos'; // Importamos los datos locales

// --- ESTILOS ---
const TEAL = '#00897B';
const ORANGE = '#F57C00';
const DARK = '#333333';
const LIGHT_BG = '#F8F9FA';

export default function ArticulosPage() {
  // Usamos los datos del archivo local
  const allArticles = ARTICULOS_DATA;
  const featuredArticle = allArticles[0];
  const gridArticles = allArticles.slice(1);

  // Estilos (Mismos que antes)
  const container = { maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' };
  const heroCard = { display: 'flex', flexWrap: 'wrap', backgroundColor: LIGHT_BG, borderRadius: '16px', overflow: 'hidden', marginBottom: '60px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' };
  const heroImageContainer = { flex: '1 1 500px', height: '400px', position: 'relative' };
  const heroContent = { flex: '1 1 400px', padding: '60px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' };
  const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' };
  const cardStyle = { borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', backgroundColor: '#fff', border: '1px solid #eee' };

  return (
    <div style={{ backgroundColor: '#FFF', minHeight: '100vh' }}>
      <div style={container}>
        <h1 style={{ textAlign: 'center', fontFamily: 'var(--font-montserrat)', fontSize: '48px', color: TEAL, marginBottom: '60px' }}>Biblioteca de Esperanza</h1>

        {/* DESTACADO */}
        {featuredArticle && (
          <div style={heroCard}>
            <div style={heroImageContainer}>
              <Image src={featuredArticle.imagen} alt={featuredArticle.titulo} fill style={{objectFit: 'cover'}} />
            </div>
            <div style={heroContent}>
              <span style={{color: ORANGE, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px'}}>Destacado</span>
              <h2 style={{fontFamily: 'var(--font-montserrat)', fontSize: '32px', color: DARK, marginBottom: '20px'}}>{featuredArticle.titulo}</h2>
              <Link href={`/articulos/${featuredArticle.id}`} style={{display: 'inline-block', padding: '12px 30px', backgroundColor: ORANGE, color: 'white', borderRadius: '50px', textDecoration: 'none', alignSelf: 'flex-start', fontWeight:'bold'}}>
                Leer Artículo
              </Link>
            </div>
          </div>
        )}

        {/* GRID */}
        <div style={gridStyle}>
          {gridArticles.map((art) => (
            <div key={art.id} style={cardStyle}>
              <div style={{height: '200px', position: 'relative'}}>
                <Image src={art.imagen} alt={art.titulo} fill style={{objectFit: 'cover'}} />
              </div>
              <div style={{padding: '25px'}}>
                <span style={{color: TEAL, fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase'}}>{art.categoria}</span>
                <h3 style={{fontFamily: 'var(--font-montserrat)', fontSize: '20px', margin: '10px 0', color: DARK}}>{art.titulo}</h3>
                <Link href={`/articulos/${art.id}`} style={{color: TEAL, fontWeight: 'bold', textDecoration: 'none'}}>Leer más →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}