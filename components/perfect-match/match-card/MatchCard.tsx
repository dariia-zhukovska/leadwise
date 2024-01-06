import Button from "@components/common/common-buttons/Button";
import styles from "./styles.module.scss";

import { CALENDLY_LINK, matchList } from "@app/helpers/mockedData";
import Link from "next/link";

const MatchCard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>It&rsquo;s a match!</h1>
      <ul className={styles.matchingList}>
        {matchList.map((item) => (
          <li className={styles.matchItem} key={item.id}>
            {item.content}
          </li>
        ))}
      </ul>
      <Link href={CALENDLY_LINK} target="_blank">
        {" "}
        <Button
          size={"M"}
          variant={"primary"}
          state={"default"}
          placeholder={"Lets Boost your sales"}
        />
      </Link>
    </div>
  );
};

export default MatchCard;
