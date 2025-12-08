"use client"; 

import { useState, useEffect } from 'react';
// Asegúrate que la ruta a tu CSS sea correcta. 
// Si usas Tailwind puro, quizás no necesites importar styles.
import styles from './ProgramsSection.module.css'; 
import ProgramCard from './ProgramCard';

export default function ProgramsSection() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        // ✅ CORRECTO: Consumimos nuestra propia API
        const res = await fetch('/api/programas');
        if (!res.ok) throw new Error('Error al cargar datos');
        
        const data = await res.json();
        setPrograms(data);
      } catch (error) {
        console.error("Error al obtener los programas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <section className={styles.programsSection || "py-12 bg-white"}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Un Camino para Cada Necesidad</h2>

        {loading ? (
          <p className="text-center text-gray-500">Cargando programas...</p>
        ) : (
          <div className={styles.grid || "grid grid-cols-1 md:grid-cols-3 gap-8"}>
            {programs.map(program => (
              <ProgramCard
                key={program.id}
                // Ajusta estas props según lo que espere tu ProgramCard real
                icon={program.icono || program.icon} 
                title={program.titulo || program.title}
                description={program.descripcion || program.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}