import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.background}></div>
        <div className={styles.backgroundTop}></div>
        <Link href={"/"} className={styles.logoWrapper}>
          <Image
            src={"/assets/images/svg/logo.svg"}
            alt={"logo"}
            width={68}
            height={40}
            className={styles.logo}
            loading="lazy"
          />
        </Link>

        <div className={styles.footerWrapper}>
          <div className={styles.rights}>
            <span>
              © 2023 LeadWise <br /> All rights reserved.
            </span>
            <span>
              Lviv, Lviv oblast
              <br /> Ukraine
            </span>
            <span>dmytroishler@leadwise.agency</span>
          </div>
          <div className={styles.solutions}>
            <h1>Solutions</h1>
            <div className={styles.usefulLinks}>
              <Link
                className={styles.link}
                href={"/services/appointment-setting"}
              >
                Appointment Setting
              </Link>
              <Link
                className={styles.link}
                href={"/services/demand-generation"}
              >
                Demand Generation
              </Link>
              <Link className={styles.link} href={"/services/email-outreach"}>
                Cold Email Outreach
              </Link>
              <Link
                className={styles.link}
                href={"/services/linkedin-marketing"}
              >
                LinkedIn Marketing
              </Link>
            </div>
          </div>
          <div className={styles.company}>
            <h1>Company</h1>
            <div className={styles.usefulLinks}>
              {/* <Link className={styles.link} href={"/services"}>
                Services{" "}
              </Link> */}
              <Link className={styles.link} href={"/case-studies"}>
                Case study
              </Link>
              <Link className={styles.link} href={"/blog"}>
                Blog{" "}
              </Link>
              <Link className={styles.link} href={"/about-us"}>
                About us
              </Link>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <Link href="https://www.facebook.com/profile.php?id=61554688681769" target="_blank">
              <Image
                src={"/assets/images/svg/facebook.svg"}
                alt={"social-network-logo"}
                width={24}
                height={24}
                loading="lazy"
              />
            </Link>
            <Link href="https://twitter.com/LeadWiseAgency" target="_blank">
              <Image
                src={"/assets/images/svg/twitter.svg"}
                alt={"social-network-logo"}
                width={24}
                height={24}
                loading="lazy"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/lwagency" target="_blank">
              <Image
                src={"/assets/images/svg/linkedin.svg"}
                alt={"social-network-logo"}
                width={24}
                height={24}
                loading="lazy"
              />
            </Link>
            <Link href="https://www.instagram.com/leadwise_agency/" target="_blank">
              <Image
                src={"/assets/images/svg/instagram.svg"}
                alt={"social-network-logo"}
                width={24}
                height={24}
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
