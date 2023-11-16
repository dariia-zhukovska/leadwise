import CaseStudyCard from "@components/sliders/case-stydies-slider/case-study-card/CaseStudyCard";
import ReachOut from "@components/reach-out-us/ReachOut";
import TopInfo from "@components/top-info/TopInfo";
import React from "react";
import caseStudiesList from "@app/api/caseStudiesList.json";
import styles from "./styles.module.scss";
import ReachOutCard from "@components/reach-out-us/reach-out-card/ReachOutCard";

const CaseStudies = () => {
  return (
    <main className={styles.wrapper}>
      <TopInfo
        mainTitle="Case Studies"
        subtitle="Inspiring success stories of our clients"
        description="Discover how LeadWise has helped companies from 3 industries unlock their growth potential. Want alike results"
        buttonPlaceholder="Contact Us"
        imageSrc="/assets/images/case-studies/main-image.png"
      />
      <div className={styles.caseStudiesList}>
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
      </div>
      <div className={styles.reachOut}>
        <ReachOutCard
          title="Want to get regular appointments and 4x growth?"
          description="Sync up with our lead gen experts to reimagine your strategy and boost your revenue."
        />
      </div>
    </main>
  );
};

export default CaseStudies;
