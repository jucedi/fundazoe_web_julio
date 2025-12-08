'use client'; // 👈 VITAL: Esto convierte al archivo en un Componente de Cliente

import { useState, useEffect } from 'react';
// Asumo que tienes este componente creado según tu lista de archivos.
// Si no lo tienes, avísame y te paso el código de la tarjeta también.
import ArticleCard from '@/components/ArticleCard'; 

export default function ArticulosPage() {
  // 1. Estados: Memoria del componente para guardar los datos, la carga y errores
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Efecto: Se ejecuta una sola vez cuando el usuario entra a la página
  useEffect(() => {
    async function fetchArticulos() {
      try {
        // Llamamos a la "Ventanilla" (API Route) que conecta con Firebase
        const response = await fetch('/api/articulos');
        
        if (!response.ok) {
          throw new Error('Error al conectar con el servidor');
        }

        const data = await response.json();
        setArticulos(data);
      } catch (err) {
        console.error("Fallo en la carga:", err);
        setError('No pudimos cargar los artículos. Intenta de nuevo más tarde.');
      } finally {
        // Pase lo que pase (éxito o error), quitamos el reloj de "Cargando"
        setLoading(false);
      }
    }

    fetchArticulos();
  }, []);

  // 3. Renderizado Condicional: Qué mostramos según el estado

  // Escenario A: Cargando...
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Cargando artículos...</p>
        </div>
      </div>
    );
  }

  // Escenario B: Hubo un error
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
          <p className="text-red-500 text-xl mb-4">⚠️</p>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Ups, algo salió mal</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  // Escenario C: Éxito (Mostramos la grilla de artículos)
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Nuestros Artículos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora noticias, actualizaciones y recursos para conocer más sobre nuestra labor en Fundazoe.
          </p>
        </div>

        {articulos.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">Aún no hay artículos publicados.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articulos.map((articulo) => (
              // Pasamos los datos al componente ArticleCard
              //