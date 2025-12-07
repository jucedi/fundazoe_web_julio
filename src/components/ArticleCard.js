// src/components/ArticleCard.js
import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleCard.module.css';

// Este componente recibe un 'article' con toda su información
export default function ArticleCard({ article }) {
  return (
    <Link href={`/recursos/${article.slug}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={article.imagenURL}
          alt={article.titulo}
          fill // 'fill' hace que la imagen llene el contenedor
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{article.categoria}</span>
        <h3>{article.titulo}</h3>
        <p>{article.extracto}</p>
        <div className={styles.readMore}>Leer Más →</div>
      </div>
    </Link>
  );
}