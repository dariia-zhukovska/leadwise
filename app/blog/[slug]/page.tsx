"use client";

import styles from "./styles.module.scss";
import Image from "next/image";
import blogPostData from "@app/api/blogPostData.json";

import { usePathname, useRouter } from "next/navigation";
import { ArticleJsonLd, NextSeo } from "next-seo";
// import { Metadata } from "next";

// const postTitle = blogPostData.map((item) => item.mainTitle);
// const previewImg = blogPostData.map((item) => item.mainPicture);

// export const metadata: Metadata = {
//   title: `${postTitle}`,
//   openGraph: {
//     images: `${previewImg}`,
//   },
// };

const BlogPost = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={styles.container}>
      {blogPostData?.map((item) => {
        if (pathname === `/blog/${item.name}`) {
          return (
            <>
              <>
                <NextSeo
                  title={item.mainTitle}
                  description={item.paragraph01}
                  canonical={`leadwise.agency/blog/${item.name}`}
                  openGraph={{
                    type: "article",
                    article: {
                      publishedTime: "2023-01-04T23:04:13Z",
                      modifiedTime: "2023-01-04T23:04:13Z",
                      authors: [
                        "https://www.linkedin.com/in/dmytro-ishler-4828b0134/",
                      ],
                      tags: [
                        "leadgeneration",
                        "marketing",
                        "buisness",
                        "leads",
                      ],
                    },
                    url: "www.example.com/next-seo-blog",
                    images: [
                      {
                        url: "https://leadwise.agency/assets/images/blog/mainPost-01.svg",
                        width: 850,
                        height: 650,
                        alt: "Blof main picture",
                      },
                    ],
                    site_name: "LeadWise Blog",
                  }}
                />
                <ArticleJsonLd
                  type="BlogPosting"
                  url={`leadwise.agency/blog/${item.name}`}
                  title={item.mainTitle}
                  images={[
                    "https://leadwise.agency/assets/images/blog/mainPost-01.svg",
                    // "https://example.com/photos/4x3/photo.jpg",
                    // "https://example.com/photos/16x9/photo.jpg",
                  ]}
                  datePublished="2023-01-04T23:04:13Z"
                  dateModified="2023-01-04T23:04:13Z"
                  authorName="Dmytro Ishler"
                  description={item.paragraph01}
                />
                {/* <p>Manage SEO in NextJS with Next SEO - Blog</p> */}
              </>
              <div className={styles.topInfo}>
                {" "}
                <div
                  onClick={() => router.back()}
                  className={styles.backButton}
                >
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
                </div>
                <div className={styles.mainInfo} key={item.id}>
                  <div className={styles.description}>
                    {item?.tags?.map((tag, index) => (
                      <p key={index} className={styles.blogTags}>
                        # {tag.tagName}
                      </p>
                    ))}
                    <div className={styles.readingInfo}>
                      <span>{item.timeToRead}</span>
                      <span>·</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h1 className={styles.title}>{item.mainTitle}</h1>
                </div>
              </div>

              <div className={styles.topCardWrapper}>
                <Image
                  src={item.mainPicture}
                  // width={838}
                  // height={380}
                  alt="main-image"
                  fill={true}
                  sizes="100vw"
                  style={{ borderRadius: "16px" }}
                  loading="lazy"
                />
              </div>
              <div className={styles.blogPostWrapper}>
                <div className={styles.mainWrapper}>
                  <section className="">
                    <p className={styles.paragraph}>
                      <span>{item["paragraph01"].split(".")[0] + "."}</span>
                      {item["paragraph01"].split(".").slice(1).join(".")}
                    </p>
                  </section>
                  <section>
                    <h2>{item.paragraphTitle02}</h2>
                    <p className={styles.paragraph}>{item.paragraph021}</p>
                    <p className={styles.paragraph}>{item.paragraph022}</p>
                  </section>
                  <section>
                    <h2>{item.paragraphTitle03}</h2>
                    <p className={styles.paragraph}>{item.paragraph031}</p>
                    <p className={styles.paragraph}>{item.paragraph032}</p>
                  </section>
                  <section>
                    <h2>{item.paragraphTitle04}</h2>
                    <p className={styles.paragraph}>{item.paragraph04}</p>
                    <ul>
                      {item.subparagraphs04.map((subparagraph04) => (
                        <ol
                          key={subparagraph04.id}
                          className={styles.subparagraph}
                        >
                          <span>{subparagraph04.id}. </span>
                          <span className={styles.boldParagraph}>
                            {subparagraph04.boldText}
                          </span>
                          {subparagraph04.mainText}
                        </ol>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h2>{item.paragraphTitle05}</h2>
                    {item.subparagraphs05.map((subparagraph) => (
                      <p key={subparagraph.id} className={styles.subparagraph}>
                        <span className={styles.boldParagraph}>
                          {subparagraph.boldText}
                        </span>
                        {subparagraph.mainText}
                      </p>
                    ))}
                  </section>
                  <section>
                    <h2>{item.conclusionTitle}</h2>
                    <p className={styles.paragraph}>{item.conclusion}</p>
                  </section>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default BlogPost;
