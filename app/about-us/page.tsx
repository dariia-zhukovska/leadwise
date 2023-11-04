import TopInfo from "@components/top-info/TopInfo";
import styles from "./styles.module.scss";
import MiniCard from "@components/mini-card/MiniCard";
import Image from "next/image";
import { miniCards, partnerIcons, timeline } from "@app/helpers/mockedData";
import ReachOut from "@components/reach-out-us/ReachOut";
import Facts from "@components/facts/Facts";

const AboutUs = () => {
  return (
    <main className={styles.container}>
      <TopInfo
        mainTitle="About Us"
        subtitle="More Than a Lead Generation Agency"
        description="Our primary objective has always been building strong partnerships. Not only with our clients, but internally as well. As a result, we`ve built the most connected team in the industry."
        buttonPlaceholder={"Talk to Our Experts"}
        imageSrc="/assets/images/about-us.png"
      />
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
          width={1272}
          height={535}
        />
      </div>
      <div className={styles.howStarted}>
        <h1 className={styles.title}> How It All Started in 2022</h1>
        <p className={styles.description}>
          LeadWise was founded in 2022 by Dmytro Ishler. Founder shared an
          extensive background in B2B sales and struck a partnership forged on a
          common idea - predictable, scaleable growth achieved through
          transparency, perseverance, experience, and creativity instead of
          empty promises, work without results, or numbers before people.
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
        <div className={styles.facts}>
          <Facts />
        </div>

        <div className={styles.customers}>
          <h1 className={styles.title}> 40+ Satisfied Customers.</h1>
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
              />
            ))}
          </div>
        </div>
        <ReachOut />
      </div>
    </main>
  );
};

export default AboutUs;
