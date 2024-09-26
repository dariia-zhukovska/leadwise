"use client";

import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import caseStudyData from "@app/api/caseStudyData.json";
import CaseStudiesList from "@app/api/caseStudiesList.json";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import Button from "@components/common/common-buttons/Button";
import ReachOut from "@components/reach-out-us/ReachOut";
import { CALENDLY_LINK } from "@app/helpers/mockedData";
import useMediaQuery from "@hooks/useMediaQuery";

const CaseStudy = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMediaQuery(576);

  return (
    <div className={styles.container}>
      {caseStudyData?.map((item) => {
        if (pathname === `/case-studies/${item.name}`) {
          return (
            <>
              <div onClick={() => router.back()} className={styles.backButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M13 15L8 10L13 5"
                    stroke="#F2F3F2"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a>Back to home page</a>
              </div>
              <div className={styles.topCardWrapper}>
                <div className={styles.topCardInfo}>
                  <Image
                    src={item.icon}
                    width={134}
                    height={32}
                    alt="company-logo"
                    loading="lazy"
                  />
                  <h1 className={styles.title}>{item.mainTitle}</h1>
                  <div className={styles.mainInfoNumbers}>
                    {item.numbers.map((number) => (
                      <div key={number.id} className={styles.numberBlock}>
                        <p className={styles.appointmentsNumber}>
                          {number.title}
                        </p>
                        <p className={styles.numberTitle}>
                          {number.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <Image
                  src={item.mainPicture}
                  width={isMobile ? 350 : 627}
                  height={isMobile ? 220 : 417}
                  alt="main-image"
                  style={{ borderRadius: "16px" }}
                  loading="lazy"
                />
              </div>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <h2 className={styles.listItemTitle}>Category</h2>
                  <p className={styles.listItemDescription}>{item.category}</p>
                </div>
                <div className={styles.listItem}>
                  <h2 className={styles.listItemTitle}>Industry</h2>
                  <p className={styles.listItemDescription}>{item.industry}</p>
                </div>
                <div className={styles.listItem}>
                  <h2 className={styles.listItemTitle}>Company size</h2>
                  <p className={styles.listItemDescription}>
                    {item["company-size"]}
                  </p>
                </div>
                <div className={styles.listItem}>
                  <h2 className={styles.listItemTitle}>Headquarters</h2>
                  <p className={styles.listItemDescription}>
                    {item.headquarters}
                  </p>
                </div>
              </div>
              <div className={styles.mainWrapper}>
                <div className={styles.contentContainer}>
                  <div className={styles.aboutWrapper}>
                    <h2 className={styles.title}>{item.about}</h2>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                  <Image
                    src={item.aboutImage}
                    alt={"about-case-image"}
                    width={isMobile ? 350 : 841}
                    height={isMobile ? 220 : 473}
                    loading="lazy"
                  />
                  <div className={styles.challangeWrapper}>
                    <h2 className={styles.title}>Client&rsquo;s challenges</h2>
                    <p className={styles.description}>
                      {item.challengeDescription}
                    </p>
                    <ol className={styles.challengeList}>
                      {item["challengeList"].map((item) => (
                        <li key={item.id} className={styles.listItem}>
                          <span className={styles.listItemTitle}>
                            {item.title}
                          </span>{" "}
                          <span className={styles.listItemDescription}>
                            {item.description}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className={styles.solutionsWrapper}>
                    <h2 className={styles.title}>Solutions</h2>
                    <p className={styles.description}>
                      {item.solutionDescription}
                    </p>
                    <ol className={styles.solutionList}>
                      {item["solutionList"].map((item) => (
                        <li key={item.id} className={styles.listItem}>
                          <span className={styles.listItemTitle}>
                            {item.title}{" "}
                          </span>
                          <span className={styles.listItemDescription}>
                            {item.description}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className={styles.implementationWrapper}>
                    <h3 className={styles.title}>Implementation</h3>
                    <p className={styles.description}>
                      {item.implementationDescription}
                    </p>
                    <ul className={styles.implementationList}>
                      {item["implementationList"] &&
                        item["implementationList"].map((item) => (
                          <li key={item.id} className={styles.listItem}>
                            {item.description}
                          </li>
                        ))}
                    </ul>
                  </div>
                  {item.extendedBlock &&
                    item.extendedBlock.map((extendedItem) => (
                      <div
                        className={styles.extendedBlock}
                        key={extendedItem.id}
                      >
                        <p className={styles.extendedDescription}>
                          <span className={styles.extendedTitle}>
                            {extendedItem.extendedTitle}
                          </span>
                          {extendedItem.extendedDescription}
                        </p>
                      </div>
                    ))}
                  <Image
                    src={item.resultImage}
                    alt={"result-image"}
                    width={isMobile ? 350 : 841}
                    height={isMobile ? 220 : 473}
                    loading="lazy"
                  />
                  <div className={styles.resultsWrapper}>
                    <h3 className={styles.results}>Results:</h3>
                    <div className={styles.resultsData}>
                      <div className={styles.resultsDataItem}>
                        <p className={styles.resultsDataItemNumber}>
                          {item.resultsList[0].title}
                        </p>
                        <h3 className={styles.resultsDataItemTitle}>
                          Appointments
                        </h3>
                      </div>
                      <div className={styles.resultsDataItem}>
                        <p className={styles.resultsDataItemNumber}>
                          {item.resultsList[1].title}
                        </p>
                        <h3 className={styles.resultsDataItemTitle}>
                          Avg. KPIs achieved
                        </h3>
                      </div>
                      <div className={styles.resultsDataItem}>
                        <p className={styles.resultsDataItemNumber}>
                          {item.resultsList[2].title}
                        </p>
                        <h3 className={styles.resultsDataItemTitle}>
                          Cold email open rate
                        </h3>
                      </div>
                    </div>
                    <div className={styles.collaboration}>
                      <h3 className={styles.title}>{item.resultDescription}</h3>
                      {item["resultDescriptionList"].map((item) => (
                        <li key={item.id} className={styles.listItem}>
                          {item.description}
                        </li>
                      ))}
                      <p className={styles.collabDescription}>
                        {item.resultsEnding}
                      </p>
                    </div>
                  </div>
                </div>
                <aside className={styles.extraInfo}>
                  {CaseStudiesList.map((item) => {
                    if (pathname === `/case-studies/${item.slug}`) {
                      return (
                        <div className={styles.readingInfo} key={item.id}>
                          <h5>Reading duration</h5>
                          <span>{item.time}</span>
                          <h5>Published</h5>
                          <span>{item.data}</span>
                        </div>
                      );
                    }
                  })}
                  <div className={styles.bookCallButton}>
                    <h3>Want 50+ qualified appointments yearly?</h3>
                    <p>
                      Let&rsquo;s map your winning lead generation strategy.
                    </p>
                    <Link href={CALENDLY_LINK} target="_blank">
                      <Button
                        size={"S"}
                        variant={"primary"}
                        state={"default"}
                        placeholder={"Book a Call"}
                      />
                    </Link>
                  </div>
                </aside>
              </div>
              <ReachOut />
            </>
          );
        }
      })}
    </div>
  );
};

export default CaseStudy;
