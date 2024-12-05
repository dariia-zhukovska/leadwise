"use client";

import { usePathname, useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import blogPostData from "@app/api/blog-posts/blogPostData.json";
import BlogPost01 from "@components/blog/blog-posts/blog-post-01/blogPost01";
import BlogPost02 from "@components/blog/blog-posts/blog-post-02/blogPost02";
import BlogPost03 from "@components/blog/blog-posts/blog-post-03/blogPost03";
import BlogPost04 from "@components/blog/blog-posts/blog-post-04/blogPost04";
import PlogPreviewLayout from "@components/blog/blog-preview/PlogPreviewLayout";
import styles from "./styles.module.scss";

const BlogPost = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Find the item that matches the current path
  const item = blogPostData.find((item) => pathname === `/blog/${item.name}`);

  if (!item) {
    return <p>Blog post not found</p>;
  }

  return (
    <>
      <Head>
        <title>{item.mainTitle}</title>
        <meta name="description" content={item.paragraph01} />
        <meta property="og:title" content={item.mainTitle} />
        <meta property="og:description" content={item.paragraph01} />
        <meta name="image" property="og:image" content={item.blogPicture} />
        <meta
          property="og:url"
          content={`https://leadwise-blogs-git-blogposts-dariiazhukovskas-projects.vercel.app/${pathname}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div key={item.id}>
            <div className={styles.topInfo}>
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
              <div className={styles.mainInfo}>
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
                alt="main-image"
                fill={true}
                sizes="100vw"
                style={{ borderRadius: "16px" }}
                loading="lazy"
              />
            </div>
            {item.id === "1" && <BlogPost01 />}
            {item.id === "2" && <BlogPost02 />}
            {item.id === "3" && <BlogPost03 />}
            {item.id === "4" && <BlogPost04 />}
          </div>
        </div>
        <PlogPreviewLayout />
      </div>
    </>
  );
};

export default BlogPost;
