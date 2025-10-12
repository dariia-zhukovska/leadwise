import styles from "./styles.module.scss";
import feedbackList from "@app/api/feedbackList.json";

import useMediaQuery from "@hooks/useMediaQuery";
import FeedbackCard from "./feedback-card/FeedbackCard";
import CommonFeedbackSlider from "@components/common/slider/feedbackslider/CommonFeedbackSlider";
import CommonSlider from "@components/common/slider/Slider";

const FeedbackSlider = () => {
  const isMobile = useMediaQuery(768);

  return (
    <section className={styles.sliderSection}>
      {/* <div className={styles.header}>
        <p className={styles.extraTitle}>Clients Feedback</p>
        <h2 className={styles.title}>What our clients are saying about us.</h2>
      </div> */}

      <div className={styles.sliderWrapper}>
        <CommonSlider
          // variant="testimonial"
          extraTitle="Clients Feedback"
          title="What our clients are saying about us."
          isFeedBack

          // centerMode={false}
          // slidesToShow={1}
          // centerPadding="0px"
        >
          {feedbackList.map((feedback) => (
            <FeedbackCard
              key={feedback.id}
              ceoImgLarge={feedback.ceoImgLarge}
              companyLogo={feedback.companyLogo}
              ceoImgSmall={feedback.ceoImgSmall}
              ceoName={feedback.ceoName}
              ceoTitle={feedback.ceoTitle}
              feedbackDescription={feedback.feedbackDescription}
            />
          ))}
        </CommonSlider>
      </div>
    </section>
  );
};

export default FeedbackSlider;
