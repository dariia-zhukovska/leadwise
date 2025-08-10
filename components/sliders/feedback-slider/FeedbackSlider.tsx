import Image from "next/image";
import styles from "./styles.module.scss";
import feedbackList from "@app/api/feedbackList.json";
import CommonSlider from "@components/common/slider/Slider";
import useMediaQuery from "@hooks/useMediaQuery";
import FeedbackCard from "./feedback-card/FeedbackCard";

const TeamMemberSlider = () => {
  const isMobile = useMediaQuery(768);

  return (
    <div className={styles.memberList}>
      <CommonSlider
        title={
          isMobile
            ? "Meet our team"
            : "Meet the Frontline Lead Generation Specialists Driving Revenue at LeadWise."
        }
        isMembers
      >
        {feedbackList.map((feedback) => {
          return (
            <FeedbackCard
              key={feedback.id}
              ceoImgLarge={""}
              companyLogo={""}
              ceoImgSmall={""}
              ceoName={""}
              ceoTitle={""}
              feedbackDescription={""}
            />
          );
        })}
      </CommonSlider>
    </div>
  );
};

export default TeamMemberSlider;
