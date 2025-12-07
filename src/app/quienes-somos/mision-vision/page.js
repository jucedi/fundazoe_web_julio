// src/app/quienes-somos/mision-vision/page.js
import styles from './MisionVision.module.css';

export default function MisionVisionPage() {
  return (
    <div className={styles.pageContainer}>
      <h1>Los Pilares de Nuestra Fundación</h1>
      <article>
        <h2>Misión</h2>
        <p>Transformar vidas a través del amor y la verdad de JESUCRISTO...</p>
      </article>
      <article>
        <h2>Visión</h2>
        <p>Ser un referente en la transformación de vidas...</p>
      </article>
      <article>
        <h2>Nuestros Valores</h2>
        <ul>
          <li><strong>Fe en Cristo:</strong> Creemos que la verdadera y duradera restauración...</li>
          <li><strong>Compasión:</strong> Actuamos con empatía y amor...</li>
          <li><strong>Verdad y Transparencia:</strong> Hablamos con honestidad...</li>
          <li><strong>Profesionalismo:</strong> Integramos las mejores prácticas...</li>
          <li><strong>Servicio:</strong> Estamos aquí para servir a nuestra comunidad...</li>
        </ul>
      </article>
    </div>
  );
}