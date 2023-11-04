import Button from "@components/common/common-buttons/Button";
import styles from "./styles.module.scss";

import { notMatchList } from "@app/helpers/mockedData";

const NotMatchCard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sorry, not this time</h1>
      <ul className={styles.matchingList}>
        {notMatchList.map((item) => (
          <li className={styles.matchItem} key={item.id}>
            {item.content}
          </li>
        ))}
      </ul>
      <Button
        size={"M"}
        variant={"primary"}
        state={"disabled"}
        placeholder={"Contact Us"}
      />
    </div>
  );
};

export default NotMatchCard;
