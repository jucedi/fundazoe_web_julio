'use client';

import { useState, useEffect } from 'react';
// Si tienes un componente para mostrar recursos (ResourceCard?), úsalo aquí.
// Si no, usaremos un diseño simple.

export default function RecursosPage() {
  const [recursos, setRecursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecursos() {
      try {
        const response = await fetch('/api/recursos');
        if (response.ok) {
          const data = await response.json();
          setRecursos(data);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecursos();
  }, []);

  if (loading) return <div className="p-10 text-center">Cargando recursos...</div>;

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Recursos Disponibles
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recursos.map((recurso) => (
            <div key={recurso.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-bold mb-2">{recurso.nombre || recurso.titulo || "Recurso"}</h2>
              <p className="text-gray-600 mb-4">{recurso.descripcion || "Sin descripción"}</p>
              {recurso.url && (
                <a 
                  href={recurso.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Ver Recurso →
                </a>
              )}
            </div>
          ))}
        </div>
        
        {recursos.length === 0 && (
          <p className="text-center text-gray-500">No hay recursos disponibles por ahora.</p>
        )}
      </div>
    </main>
  );
}