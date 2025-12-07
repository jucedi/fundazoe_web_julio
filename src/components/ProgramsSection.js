// src/components/ProgramsSection.js
"use client"; // Necesario para usar hooks como useEffect y useState

import { useState, useEffect } from 'react';
import styles from './ProgramsSection.module.css';
import ProgramCard from './ProgramCard';
import { db } from '../lib/firebaseAdmin'; // Importamos nuestra conexión a la DB
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function ProgramsSection() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        // Pedimos a Firestore la colección 'programas' y la ordenamos por el campo 'orden'
        const programsQuery = query(collection(db, 'programas'), orderBy('orden'));

        const querySnapshot = await getDocs(programsQuery);

        const programsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setPrograms(programsData);
      } catch (error) {
        console.error("Error al obtener los programas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []); // Se ejecuta solo una vez cuando el componente se carga

  return (
    <section className={styles.programsSection}>
      <h2>Un Camino para Cada Necesidad</h2>

      {loading ? (
        <p style={{textAlign: 'center'}}>Cargando programas...</p>
      ) : (
        <div className={styles.grid}>
          {programs.map(program => (
            <ProgramCard
              key={program.id}
              icon={program.icono}
              title={program.titulo}
              description={program.descripcion}
            />
          ))}
        </div>
      )}
    </section>
  );
}