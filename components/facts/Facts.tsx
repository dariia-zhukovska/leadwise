import { facts } from '@app/helpers/mockedData';
import styles from './styles.module.scss'

const Facts = () => {
  return (
    <div className={styles.facts}>
      <h1 className={styles.title}>Some Facts About Us</h1>
      <p className={styles.description}>
        We are a passionate and inquisitive team distributed across the globe.
      </p>
      <div className={styles.factsList}>
        {facts.map((fact) => (
          <div key={fact.id} className={styles.factItem}>
            <span className={styles.number}>{fact.number}</span>
            <p className={styles.content}>{fact.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facts