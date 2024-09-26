import styles from "./styles.module.scss";
import { RxCross2, RxPlus } from "react-icons/rx";
import { Collapse } from "react-collapse";
import React from "react";

interface IProps {
  open: any;
  toggle: () => void;
  title: string;
  description: string | string[] | any;
  isDescriptionList?: boolean | undefined;
  descriptionList?: any | undefined;
  descriptionTitle: string | undefined;
}

const AccordionItem = ({
  open,
  toggle,
  title,
  description,
  descriptionTitle,
  isDescriptionList,
  descriptionList,
}: IProps) => {
  console.log(description);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title} onClick={toggle}>
        <p>{title}</p>
        <div>{open ? <RxCross2 size={24} /> : <RxPlus size={24} />}</div>
      </div>
      <Collapse isOpened={open}>
        <div style={{ maxWidth: "90%" }} className={styles.description}>
          {descriptionTitle}
        </div>
        {descriptionList && (
          <ul className={styles.descriptionList} style={{ maxWidth: "90%" }}>
            {descriptionList.map((item: any) => (
              <React.Fragment key={item.id}>
                <li className={styles.descriptionListTitle}>
                  {item.descriptionListTitle}
                </li>
                <p className={styles.descriptionListDescription}>
                  {item.descriptionListDescription}
                </p>
              </React.Fragment>
            ))}
          </ul>
        )}
      </Collapse>
    </div>
  );
};

export default AccordionItem;
