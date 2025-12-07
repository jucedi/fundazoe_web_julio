// src/app/programas/intervencion-intensiva/page.js
import TwoColumnLayout from '@/components/TwoColumnLayout';
import Button from '@/components/Button';
import Link from 'next/link';
import styles from './Intervencion.module.css'; // <-- Asegúrate que esta línea esté perfecta

export default function IntervencionIntensivaPage() {
  const mainContent = (
    <div>
      <h1>Programa de Intervención Intensiva: "Un Día para el Cambio"</h1>
      <h2>Una experiencia transformadora para una nueva perspectiva de vida.</h2>
      <p className={styles.intro}>
        Este programa es el siguiente paso cuando la orientación no es suficiente. Consiste en una jornada vivencial de un día completo en un entorno como un centro de rehabilitación, diseñada para generar una reflexión profunda.
      </p>

      <h3>¿En qué consiste esta jornada?</h3>
      <ol className={styles.stepList}>
        <li>
          <strong>Terapia de Impacto y Conciencia de la Realidad:</strong>
          <p>El participante visita un centro de rehabilitación para visualizar las consecuencias reales de la adicción y motivar un "clic" interno.</p>
        </li>
        <li>
          <strong>Formación y Herramientas a lo Largo del Día:</strong>
          <p>Incluye un ciclo de cuatro charlas especializadas para el joven y su tutor, y la intervención de jóvenes en rehabilitación que comparten sus testimonios reales. El programa cubre desayuno, almuerzo y refrigerio.</p>
        </li>
        <li>
          <strong>Creación de un Nuevo Plan de Acción:</strong>
          <p>Al final del día, se elabora un plan de acción más robusto, con un seguimiento post-jornada a través de un canal de comunicación directa.</p>
        </li>
      </ol>

      <div className={styles.cta}>
        <h4>Conoce las próximas fechas y todos los detalles.</h4>
        <Link href="/contacto"><Button>Contactar para más Información</Button></Link>
      </div>
    </div>
  );

  const summaryContent = (
    <div className={styles.summaryBox}>
      <h4>Resumen del Programa</h4>
      <ul>
        <li><strong>Duración:</strong> Un día completo</li>
        <li><strong>Dirigido a:</strong> Casos con mayor rebeldía o cronicidad</li>
        <li><strong>Modalidad:</strong> Inmersiva en centro de rehabilitación</li>
        <li><strong>Incluye:</strong> Terapias, charlas, testimonios, alimentación</li>
      </ul>
    </div>
  );

  return <TwoColumnLayout mainContent={mainContent} summaryContent={summaryContent} />;
}