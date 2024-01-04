"use client";

import styles from "./styles.module.scss";
import Image from "next/image";
import blogPostData from "@app/api/blogPostData.json";

import { usePathname, useRouter } from "next/navigation";
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
      </div>

      <div className={styles.container}>
        {blogPostData?.map((item) => {
          if (pathname === `/blog/${item.name}`) {
            return (
              <>
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
                  <title className={styles.title}>{item.mainTitle}</title>
                </div>

                <div className={styles.topCardWrapper}>
                  <Image
                    src={item.mainPicture}
                    width={838}
                    height={380}
                    alt="main-image"
                    // fill={true}
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
                        <p
                          key={subparagraph.id}
                          className={styles.subparagraph}
                        >
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
    </>
  );
};

export default BlogPost;
