import Button from "@components/common/common-buttons/Button";
import styles from "./styles.module.scss";

import { matchList } from "@app/helpers/mockedData";

const MatchCard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>It`s a match!</h1>
      <ul className={styles.matchingList}>
        {matchList.map((item) => (
          <li className={styles.matchItem} key={item.id}>
            {item.content}
          </li>
        ))}
      </ul>
      <Button
        size={"M"}
        variant={"primary"}
        state={"default"}
        placeholder={"Lets Boost your sales"}
      />
    </div>
  );
};

export default MatchCard;
