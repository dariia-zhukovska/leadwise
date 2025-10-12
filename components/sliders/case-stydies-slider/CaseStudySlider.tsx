import Image from "next/image";
import styles from "./styles.module.scss";

import CommonSlider from "@components/common/slider/Slider";
import useMediaQuery from "@hooks/useMediaQuery";
import CaseStudyCard from "./case-study-card/CaseStudyCard";
import caseStudiesList from "@app/api/caseStudiesList.json";
import CommonFeedbackSlider from "@components/common/slider/feedbackslider/CommonFeedbackSlider";

const CaseStudySlider = () => {
  const isMobile = useMediaQuery(768);

  return (
    <div className={styles.memberList}>
      <CommonSlider title={"Our Case Studies"}>
        {caseStudiesList.map((item) => (
          <CaseStudyCard
            key={item.id}
            data={item.data}
            time={item.time}
            cardDescription={item.cardDescription}
            cardTitle={item.cardTitle}
            casePicture={item.casePicture}
            slug={item.slug}
          />
        ))}
      </CommonSlider>
    </div>
  );
};

export default CaseStudySlider;
