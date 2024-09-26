import styles from "./styles.module.scss";
import ReachOutCard from "./reach-out-card/ReachOutCard";

interface IProps {
  padding?: string;
}

const ReachOut = ({ padding }: IProps) => {
  return (
    <div className={styles.container} style={{ padding: `${padding}` }}>
      <ReachOutCard
        title={"Want some sales-ready B2B leads?"}
        description={"Reach out to get 10+ appointments each month."}
      />
    </div>
  );
};

export default ReachOut;
