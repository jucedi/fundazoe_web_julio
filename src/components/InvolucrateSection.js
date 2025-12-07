// src/components/InvolucrateSection.js
import styles from './InvolucrateSection.module.css';
import Button from './Button'; // Importamos nuestro botón reutilizable

export default function InvolucrateSection() {
  return (
    <section className={styles.involucrateSection}>
      <h2>Involúcrate</h2>
      <p>Tu apoyo es fundamental para continuar nuestra misión. Descubre cómo puedes hacer la diferencia.</p>
      <div className={styles.buttonGroup}>
        <Button variant="primary">
          Haz una Donación
        </Button>
        <Button variant="secondary">
          Sé Voluntario
        </Button>
      </div>
    </section>
  );
}