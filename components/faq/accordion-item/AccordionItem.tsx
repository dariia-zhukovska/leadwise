import styles from "./styles.module.scss";
import { RxCross2, RxPlus } from "react-icons/rx";
import { Collapse } from "react-collapse";

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
        <div className={styles.description}>{descriptionTitle}</div>
        {descriptionList && (
          <ul className={styles.descriptionList}>
            {descriptionList.map((item: any, index: number) => (
              <>
                <li key={index} className={styles.descriptionListTitle}>
                  {item.descriptionListTitle}
                </li>
                <p key={index} className={styles.descriptionListDescription}>
                  {item.descriptionListDescription}
                </p>
              </>
            ))}
          </ul>
        )}
      </Collapse>
    </div>
  );
};

export default AccordionItem;
