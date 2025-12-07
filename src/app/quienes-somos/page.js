// src/app/quienes-somos/page.js
import styles from './QuienesSomos.module.css';
import Image from 'next/image';

export default function QuienesSomosPage() {
  return (
    <div className={styles.pageContainer}>
      <Image
        src="/images/equipo-fundador.jpg"
        alt="Equipo de FUNDAZOE"
        width={800}
        height={400}
        className={styles.mainImage}
      />
      <h1>Nuestra Historia: Una Misión Nacida de la Fe y la Compasión</h1>
      <div className={styles.content}>
        <p>En el corazón de Piedecuesta...</p>
        {/* ... el resto del texto ... */}
      </div>
    </div>
  );
}