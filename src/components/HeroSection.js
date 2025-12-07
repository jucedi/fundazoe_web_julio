// src/components/HeroSection.js
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Transformamos vidas a través del amor y la verdad de Jesucristo</h1>
        <p>Somos una luz de esperanza para quienes luchan contra las adicciones y la autodestrucción. Un camino de restauración integral basado en principios cristianos.</p>
        <div className={styles.buttonGroup}>
          {/* Más adelante aquí pondremos el componente <Button /> */}
          <a href="/donar" className={styles.buttonPrimary}>Donar Ahora</a>
          <a href="/programas" className={styles.buttonSecondary}>Ver Programas</a>
        </div>
      </div>
    </section>
  );
}