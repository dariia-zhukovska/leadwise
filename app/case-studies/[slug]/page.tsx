"use client";

import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import caseStudyData from "@app/api/caseStudyData.json";
import { useRouter } from "next/navigation";

const CaseStudy = () => {
  const router = useRouter();

  const urlParts = window.location.pathname.split("/");

  const urlSlug = urlParts[urlParts.length - 1];

  return (
    <div className={styles.container}>
      {caseStudyData?.map((item) => {
        if (urlSlug === item.name) {
          return (
            <>
              <div onClick={() => router.back()}>
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
                  />
                  <h1 className={styles.title}>{/* Title */}</h1>
                  <div className={styles.mainInfoNumbers}>
                    <p className={styles.appointmentsNumber}>
                      {/* Appointments Number */}
                    </p>
                    <p className={styles.kpiNumber}>{/* KPI Number */}</p>
                    <p className={styles.appointments}>
                      Appointments booked in 4 months
                    </p>
                    <p className={styles.kpi}>Avg. KPIs reached</p>
                  </div>
                </div>
                <Image
                  src={item.mainPicture}
                  width={627}
                  height={417}
                  alt="main-image"
                />
              </div>
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <h2 className={styles.listItemTitle}>Appointment Setting</h2>
                  <p className={styles.listItemDescription}>
                    {/* Description */}
                  </p>
                </div>
                <div className={styles.listItem}>
                  <h2 className={styles.listItemTitle}>Industry</h2>
                  <p className={styles.listItemDescription}>
                    {/* Description */}
                  </p>
                </div>
                <div className={styles.listItem}>
                  <h2 className={styles.listItemTitle}>Company size</h2>
                  <p className={styles.listItemDescription}>
                    {/* Description */}
                  </p>
                </div>
                <div className={styles.listItem}>
                  <h2 className={styles.listItemTitle}>Headquarters</h2>
                  <p className={styles.listItemDescription}>
                    {/* Description */}
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.aboutWrapper}>
                  <h2 className={styles.title}>{/* About Title */}</h2>
                  <p className={styles.description}>
                    {/* About Description */}
                  </p>
                </div>
                <Image
                  src={item.aboutImage}
                  alt={"about-case-image"}
                  width={841}
                  height={473}
                />
                <div className={styles.challangeWrapper}>
                  <h2 className={styles.title}>Client`s challenges</h2>
                  <p className={styles.description}>
                    {/* Challenges Description */}
                  </p>
                  <ol className={styles.challengeList}>
                    {item["challengeList"].map((item) => (
                      <li key={item.id} className={styles.listItem}>
                        <span className={styles.listItemTitle}>
                          {item.title}
                        </span>
                        <span>{item.description}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className={styles.solutionsWrapper}>
                  <h2 className={styles.title}>Solutions</h2>
                  <p className={styles.description}>
                    {/* Solutions Description */}
                  </p>
                  <ol className={styles.solutionList}>
                    {item["solutionList"].map((item) => (
                      <li key={item.id} className={styles.listItem}>
                        <span className={styles.listItemTitle}>
                          {item.title}
                        </span>
                        <span>{item.description}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className={styles.implementationWrapper}>
                  <h3 className={styles.title}>Implementation</h3>
                  <p className={styles.description}>
                    In the implementation phase, LeadWise:
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
                <Image
                  src={item.resultImage}
                  alt={"result-image"}
                  width={841}
                  height={473}
                />
                <div className={styles.resultsWrapper}>
                  <h2 className={styles.results}>Results:</h2>
                  <div className={styles.resultsData}>
                    <div className={styles.resultsDataItem}>
                      <p className={styles.resultsDataItemNumber}>
                        {/* Results Data Number */}
                      </p>
                      <h3 className={styles.resultsDataItemTitle}>
                        Appointments
                      </h3>
                    </div>
                    <div className={styles.resultsDataItem}>
                      <p className={styles.resultsDataItemNumber}>
                        {/* Results Data Number */}
                      </p>
                      <h3 className={styles.resultsDataItemTitle}>KPIs</h3>
                    </div>
                    <div className={styles.resultsDataItem}>
                      <p className={styles.resultsDataItemNumber}>
                        {/* Results Data Number */}
                      </p>
                      <h3 className={styles.resultsDataItemTitle}>
                        Cold email open rate
                      </h3>
                    </div>
                  </div>
                  <div className={styles.collaboration}>
                    <h3 className={styles.title}>
                      {/* Collaboration Title */}
                    </h3>
                    {item["resultDescriptionList"].map((item) => (
                      <li key={item.id} className={styles.listItem}>
                        {item.description}
                      </li>
                    ))}
                    <p className={styles.collabDescription}>
                      {/* Collaboration Description */}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default CaseStudy;
