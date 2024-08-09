"use client";
import TopInfo from "@components/top-info/TopInfo";
import styles from "./styles.module.scss";
import MiniCard from "@components/mini-card/MiniCard";
import Image from "next/image";
import { miniCards, partnerIcons, timeline } from "@app/helpers/mockedData";
import ReachOut from "@components/reach-out-us/ReachOut";
import Facts from "@components/facts/Facts";
// import TeamMemberSlider from "@components/sliders/team-members-slider/TeamMemberSlider";
import useMediaQuery from "@hooks/useMediaQuery";
import TeamMemberSlider from "@components/sliders/team-members-slider/TeamMemberSlider";

const AboutUs = () => {
  const isMobile = useMediaQuery(768);
  return (
    <main className={styles.container}>
      <div className={styles.topInfoContainer}>
        {" "}
        <TopInfo
          mainTitle="About Us"
          subtitle="More Than a Lead Generation Agency"
          description="Our primary objective has always been building strong partnerships. Not only with our clients, but internally as well. As a result, we`ve built the most connected team in the industry."
          buttonPlaceholder={"Talk to Our Experts"}
          imageSrc="/assets/images/about-us.png"
        />
      </div>

      <div className={styles.minicards}>
        {miniCards.map((item) => (
          <MiniCard key={item.id} number={item.number} content={item.content} />
        ))}
      </div>
      <div className={styles.mapContainer}>
        <h1 className={styles.title}>We Work With Brands Globally</h1>

        <Image
          src={"/assets/images/map.svg"}
          alt={"map"}
          width={isMobile ? 352 : 1272}
          height={isMobile ? 174 : 535}
          loading="lazy"
        />
      </div>
      <div className={styles.howStarted}>
        <h1 className={styles.title}> How It All Started in 2023</h1>
        <p className={styles.description}>
          LeadWise was founded in December 2023 by Dmytro Ishler. The founder
          brought an extensive background in B2B sales and established a
          partnership based on a common idea: predictable, scalable growth
          achieved through transparency, perseverance, experience, and
          creativity, instead of empty promises, work without results, or
          prioritizing numbers over people.
        </p>
        <div className={styles.timeline}>
          {timeline.map((item) => (
            <div key={item.id} className={styles.timeItems}>
              <span className={styles.timeStep}>{item.id}</span>
              <span>{item.content}</span>
              <p>{item.number}</p>
            </div>
          ))}
        </div>
      </div>
      <TeamMemberSlider />
      <div className={styles.customersBlock}>
        <div className={styles.customers}>
          <h1 className={styles.title}>20+ Satisfied Customers.</h1>
          <p className={styles.description}>
            We align our services with unique needs of our clients to deliver
            the best results in our space. We employ driven professionals united
            by our joint vision and mission.
          </p>
          <div className={styles.partnersContainer}>
            {partnerIcons.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt={`Partner ${index + 1}`}
                width={100}
                height={50}
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className={styles.facts}>
          <Facts />
        </div>
      </div>
      <div className={styles.reachOutBlock}>
        <ReachOut />
      </div>
    </main>
  );
};

export default AboutUs;
