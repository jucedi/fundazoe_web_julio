// src/app/programas/recuperacion-integral/page.js
import TwoColumnLayout from '@/components/TwoColumnLayout';
import Button from '@/components/Button';
import Link from 'next/link';
import styles from './Residencial.module.css';

export default function RecuperacionIntegralPage() {
  const mainContent = (
    <div>
      <h1>Programa Residencial de Recuperación Integral</h1>
      <h2>El Camino Definitivo Hacia una Vida Plena y Libre de Adicciones.</h2>
      <p className={styles.intro}>
        Un programa de internamiento de tres meses para personas que enfrentan adicciones severas (alcohol, sustancias, fármacos) y que no han respondido a intervenciones de menor intensidad.
      </p>
      
      <h3>Nuestro Enfoque Integral: Los Pilares del Tratamiento</h3>
      <ol className={styles.stepList}>
        <li>
          <strong>Proceso de Desintoxicación Supervisado:</strong>
          <p>Un protocolo de apoyo con productos naturales para limpiar el organismo durante los tres meses.</p>
        </li>
        <li>
          <strong>Valoración y Cuidado Médico Completo:</strong>
          <p>Incluye exámenes de ingreso, valoración psicológica y psiquiátrica, acompañamiento constante de un enfermero y seguimiento mensual.</p>
        </li>
        <li>
          <strong>Formación Terapéutica y Espiritual:</strong>
          <p>Formación constante para entender la adicción y una sólida formación espiritual intensiva basada en principios cristianos.</p>
        </li>
        <li>
          <strong>Soporte Logístico Total:</strong>
          <p>Incluye kit de aseo, uniforme, ropa de cama, alimentación y alojamiento.</p>
        </li>
      </ol>

      <h3>Un Servicio a Nivel Nacional</h3>
      <p>Nuestro equipo se desplaza a cualquier parte del país para realizar la intervención y el traslado seguro del participante a nuestras instalaciones.</p>

      <div className={styles.cta}>
        <h4>Solicita una consulta confidencial.</h4>
        <Link href="/contacto"><Button>Iniciar la Transformación</Button></Link>
      </div>
    </div>
  );

  const summaryContent = (
    <div className={styles.summaryBox}>
      <h4>Resumen del Programa</h4>
      <ul>
        <li><strong>Duración:</strong> 3 meses</li>
        <li><strong>Dirigido a:</strong> Adicciones severas (alcohol, sustancias, fármacos)</li>
        <li><strong>Modalidad:</strong> Residencial / Internamiento</li>
        <li><strong>Incluye:</strong> Cuidado 24/7, soporte logístico total</li>
      </ul>
    </div>
  );

  return <TwoColumnLayout mainContent={mainContent} summaryContent={summaryContent} />;
}