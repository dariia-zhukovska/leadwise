import MatchCard from "./match-card/MatchCard";
import NotMatchCard from "./not-matc-card/NotMatchCard";
import styles from "./styles.module.scss";

const PerfectMatch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemWrapper}>
        <h2 className={styles.serviceItemTitle}>
          We could be your perfect match
        </h2>
        <span className={styles.serviceItemDescription}>
          Your time is priceless to us. To avoid wasting it, let us help you
          determine whether you need our help.
        </span>
      </div>
      <div className={styles.matchCardsContainer}>
        <MatchCard />
        <NotMatchCard />
      </div>
    </div>
  );
};

export default PerfectMatch;
