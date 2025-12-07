// src/app/programas/orientacion-familiar/page.js
import TwoColumnLayout from '@/components/TwoColumnLayout';
import Button from '@/components/Button';
import Link from 'next/link';
import styles from './Orientacion.module.css';

export default function OrientacionFamiliarPage() {
  const mainContent = (
    <div>
      <h1>Programa de Orientación y Apoyo Familiar</h1>
      <h2>Un primer paso hacia la recuperación y el bienestar.</h2>
      <p className={styles.intro}>Este programa está diseñado para familias...</p>

      <h3>¿Cómo funciona nuestro programa?</h3>
      <ul className={styles.phaseList}>
        <li><strong>Fase 1: Visita y Acercamiento Inicial.</strong> Un profesional visita el domicilio...</li>
        <li><strong>Fase 2: Evaluación y Diagnóstico.</strong> A través de un diálogo abierto...</li>
        <li><strong>Fase 3: Terapia Inicial y Plan de Acción.</strong> Incluye sesiones de terapia...</li>
        <li><strong>Fase 4: Supervisión y Acompañamiento.</strong> Durante un mes, se realiza un seguimiento...</li>
      </ul>

      <h3>Inversión en el bienestar familiar</h3>
      <p>El costo de este programa integral de orientación es de <strong>$120.000</strong>.</p>

      <div className={styles.cta}>
        <h4>¿Están listos para dar el primer paso?</h4>
        <Link href="/contacto"><Button>Contactar Ahora</Button></Link>
      </div>
    </div>
  );

  const summaryContent = (
    <div className={styles.summaryBox}>
      <h4>Resumen del Programa</h4>
      <ul>
        <li><strong>Duración:</strong> 1 mes de seguimiento</li>
        <li><strong>Dirigido a:</strong> Ludopatía, tecnoadicciones</li>
        <li><strong>Modalidad:</strong> Visita a domicilio</li>
        <li><strong>Inversión:</strong> $120.000</li>
      </ul>
    </div>
  );

  return <TwoColumnLayout mainContent={mainContent} summaryContent={summaryContent} />;
}