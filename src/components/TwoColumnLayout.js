// src/components/TwoColumnLayout.js
import styles from './TwoColumnLayout.module.css';

export default function TwoColumnLayout({ mainContent, summaryContent }) {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {mainContent}
      </div>
      <aside className={styles.summaryContent}>
        {summaryContent}
      </aside>
    </div>
  );
}