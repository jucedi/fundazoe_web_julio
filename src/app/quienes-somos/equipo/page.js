// src/app/quienes-somos/equipo/page.js
import styles from './Equipo.module.css';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Luis Eduardo Arismendi Moreno',
    role: 'Director y Consejero Principal',
    description: 'Con más de [...] años de experiencia en consejería familiar y un profundo llamado a servir...',
    imageUrl: '/images/luis-arismendi.jpg' // Añadir imagen en /public/images
  },
  {
    name: 'Julio Cesar Diaz Uribe',
    role: 'Representante Legal Suplente',
    description: 'Julio aporta su experiencia legal y administrativa para asegurar la integridad y el buen funcionamiento...',
    imageUrl: '/images/julio-diaz.jpg' // Añadir imagen en /public/images
  }
];

const TeamMemberCard = ({ member }) => (
  <div className={styles.card}>
    <Image src={member.imageUrl} alt={member.name} width={150} height={150} className={styles.cardImage} />
    <h3>{member.name}</h3>
    <h4>{member.role}</h4>
    <p>{member.description}</p>
  </div>
);

export default function EquipoPage() {
  return (
    <div className={styles.pageContainer}>
      <h1>Un Equipo Comprometido con tu Restauración</h1>
      <p className={styles.intro}>Detrás de cada programa y cada historia de éxito, hay un equipo de profesionales apasionados y dedicados...</p>
      <div className={styles.grid}>
        {teamMembers.map(member => <TeamMemberCard key={member.name} member={member} />)}
      </div>
    </div>
  );
}
