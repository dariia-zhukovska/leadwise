import styles from "./styles.module.scss";
import { RxCross2, RxPlus } from "react-icons/rx";
import { Collapse } from "react-collapse";

interface IProps {
  open: any;
  toggle: () => void;
  title: string;
  description: string | string[];
}

const AccordionItem = ({ open, toggle, title, description }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title} onClick={toggle}>
        <p>{title}</p>
        <div>{open ? <RxCross2 size={24} /> : <RxPlus size={24} />}</div>
      </div>
      <Collapse isOpened={open}>
        <div className={styles.description}>{description}</div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
