"use client";

import BlogCard from "@components/blog/blog-card/BlogCard";
import React from "react";
import blogList from "@app/api/blogList.json";
import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";
import Link from "next/link";
import useMediaQuery from "@hooks/useMediaQuery";

const Blog = () => {
  const isMobile = useMediaQuery(768);

  return (
    <>
      <div className={styles.topWrapper}>
        <div className={styles.topInfo}>
          <div className={styles.description}>
            <div className={styles.tags}>
              <div className={styles.date}>{blogList[0].data}</div>
              <div className={styles.time}>{blogList[0].time}</div>
              <div className={styles.hashtag}>{blogList[0].hashtag}</div>
            </div>
            <div className={styles.textData}>
              <h2 className={styles.title}>{blogList[0].cardTitle}</h2>
              <p className={styles.description}>
                {blogList[0].cardDescription}
              </p>
            </div>
            <Link href={`/blog/${blogList[0].slug}`}>
              <Button
                size={isMobile ? "S" : "M"}
                variant={"link"}
                state={"default"}
                placeholder={"Read more"}
              />
            </Link>
          </div>
        </div>
      </div>
      <main className={styles.wrapper}>
        <div className={styles.blogPostsList}>
          {blogList
            .slice(0,2)
            .sort((a: any, b: any) => b.id - a.id)
            .map((item) => (
              <BlogCard
                key={item.id}
                data={item.data}
                time={item.time}
                hashtag={item.hashtag}
                cardDescription={item.cardDescription}
                cardTitle={item.cardTitle}
                casePicture={item.casePicture}
                slug={item.slug}
              />
            ))}
        </div>
      </main>
    </>
  );
};

export default Blog;
