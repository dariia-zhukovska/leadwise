import styles from "./styles.module.scss";
import ReachOutCard from "./reach-out-card/ReachOutCard";

const ReachOut = () => {
  return (
    <div className={styles.container}>
      <ReachOutCard
        title={"Want some sales-ready B2B leads?"}
        description={"Reach out to get 10+ appointments each month."}
      />
    </div>
  );
};

export default ReachOut;
