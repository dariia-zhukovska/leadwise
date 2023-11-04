import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <Link href={"/"} className={styles.logoWrapper}>
          <Image
            src={"/assets/images/svg/logo.svg"}
            alt={"logo"}
            width={68}
            height={40}
            className={styles.logo}
          />
        </Link>

        <div className={styles.footerWrapper}>
          <div className={styles.rights}>
            <span>
              © 2023 LeadWise <br /> All rights reserved.
            </span>
            <span>
              128 City Road <br />
              London, EC1V 2NX
              <br /> United Kingdom
            </span>
            <span>hello@leadwise.co</span>
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
              <Link className={styles.link} href={"/services"}>
                Services{" "}
              </Link>
              <Link className={styles.link} href={"/case-study"}>
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
            <Link href="https://www.facebook.com/">
              <Image
                src={"/assets/images/svg/facebook.svg"}
                alt={"social-network-logo"}
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.twitter.com/">
              <Image
                src={"/assets/images/svg/twitter.svg"}
                alt={"social-network-logo"}
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.instagram.com/">
              <Image
                src={"/assets/images/svg/instagram.svg"}
                alt={"social-network-logo"}
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.linkedin.com/">
              <Image
                src={"/assets/images/svg/linkedin.svg"}
                alt={"social-network-logo"}
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
