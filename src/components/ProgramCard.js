// src/components/ProgramCard.js
import styles from './ProgramCard.module.css';

// El componente recibe props para el título, descripción e icono.
export default function ProgramCard({ title, description, icon }) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}