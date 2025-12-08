// Archivo: src/components/ProgramsSection.js
"use client"; 

import { useState, useEffect } from 'react';
// Asegúrate de que esta ruta sea correcta para tus estilos
import styles from './ProgramsSection.module.css'; 
// Asegúrate de que este componente exista en la misma carpeta
import ProgramCard from './ProgramCard';

export default function ProgramsSection() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        // ✅ AHORA: Llamamos a nuestra propia API
        const res = await fetch('/api/programas');
        if (res.ok) {
          const data = await res.json();
          setPrograms(data);
        } else {
          console.error("Error en la respuesta de la API");
        }
      } catch (error) {
        console.error("Error al obtener los programas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []); 

  return (
    <section className={styles.programsSection || "py-12"}>
      <h2 className="text-3xl font-bold text-center mb-8">Un Camino para Cada Necesidad</h2>

      {loading ? (
        <p style={{textAlign: 'center'}}>Cargando programas...</p>
      ) : (
        <div className={styles.grid || "grid grid-cols-1 md:grid-cols-3 gap-6"}>
          {programs.map(program => (
            <ProgramCard
              key={program.id}
              // Ajuste de seguridad por si el icono viene vacío
              icon={program.icono || program.icon || "✨"} 
              title={program.titulo || program.title}
              description={program.descripcion || program.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}