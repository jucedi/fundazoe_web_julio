'use client';

import { useState, useEffect } from 'react';
// Asegúrate de tener este componente. Si no, avísame.
import ArticleCard from '@/components/ArticleCard'; 

export default function ArticulosPage() {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticulos() {
      try {
        const response = await fetch('/api/articulos');
        
        if (!response.ok) {
          throw new Error('Error al conectar con el servidor');
        }

        const data = await response.json();
        setArticulos(data);
      } catch (err) {
        console.error("Fallo en la carga:", err);
        setError('No pudimos cargar los artículos.');
      } finally {
        setLoading(false);
      }
    }

    fetchArticulos();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-600 font-medium">Cargando artículos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-red-500">⚠️ {error}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Nuestros Artículos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora noticias y recursos de Fundazoe.
          </p>
        </div>

        {articulos.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">Aún no hay artículos publicados.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articulos.map((articulo) => (
              <ArticleCard 
                key={articulo.id} 
                title={articulo.title || articulo.titulo}
                image={articulo.image || articulo.imagen}
                summary={articulo.summary || articulo.resumen || "Sin descripción"}
                slug={articulo.id}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}