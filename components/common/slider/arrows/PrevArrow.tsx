import { MouseEventHandler } from "react";
import styles from "./styles.module.scss";
import { BsChevronLeft } from "react-icons/bs";
interface IProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const PrevArrow = ({ onClick }: IProps) => {
  return (
    <div className={styles.prevArrowCotainer} onClick={onClick}>
      <div className={styles.prevButton}>
        <BsChevronLeft />
      </div>
    </div>
  );
};

export default PrevArrow;
