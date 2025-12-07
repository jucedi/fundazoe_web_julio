// src/app/recursos/page.js
"use client";

import { useState, useEffect } from 'react';
import styles from './Recursos.module.css';
import { db } from '../../lib/firebaseAdmin';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import ArticleCard from '@/components/ArticleCard';

export default function RecursosPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
       const articlesQuery = query(
  collection(db, 'articulos')
);
        const querySnapshot = await getDocs(articlesQuery);
        const articlesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articlesData);
      } catch (error) {
        console.error("Error al obtener los artículos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <h1>Recursos de Esperanza y Conocimiento</h1>
      <p className={styles.intro}>
        Un espacio para compartir herramientas, testimonios de transformación y noticias de la comunidad.
      </p>

      {loading ? (
        <p>Cargando artículos...</p>
      ) : (
        <div className={styles.grid}>
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}