import React from "react";
import styles from "./styles.module.scss";
import Button from "@components/common/common-buttons/Button";
import Link from "next/link";
import blogList from "@app/api/blogList.json";
import BlogPreviewCard from "./blog-preview-card/BlogPreviewCard";

const PlogPreviewLayout = () => {
  return (
    <div className={styles.blogPreviewWrapper}>
      <div className={styles.topWrapper}>
        <div className={styles.leftBlock}>
          <h1>Blog</h1>
          <p>Latest content to fuel your revenue pipeline.</p>
        </div>

        <Link href={"/blog"}>
          <Button
            size={"S"}
            variant={"primary"}
            state={"default"}
            placeholder={"View All Posts"}
          />
        </Link>
      </div>
      <main className={styles.bottomWrapper}>
        <div className={styles.blogPostsList}>
          {blogList.slice(-3).map((item) => (
            <BlogPreviewCard
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
    </div>
  );
};

export default PlogPreviewLayout;
