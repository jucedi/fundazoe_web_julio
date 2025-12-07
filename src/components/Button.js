// src/components/Button.js
import styles from './Button.module.css';

// El componente recibe "children" (el texto del botón), "variant" para el estilo,
// y "...props" para cualquier otro atributo HTML que queramos pasar (como onClick).
export default function Button({ children, variant = 'primary', ...props }) {

  // Determinamos qué clase CSS usar basándonos en la prop "variant".
  const variantClass = {
    primary: styles.primary,
    secondary: styles.secondary,
    ghost: styles.ghost, // Una variante para fondos oscuros como el Hero
  }[variant];

  return (
    <button className={`${styles.button} ${variantClass}`} {...props}>
      {children}
    </button>
  );
}