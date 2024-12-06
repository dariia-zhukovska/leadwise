// import { BlogPost01 } from "@interfaces/interfaces";
import { helvetica } from "@app/layout";
import styles from "./styles.module.scss";
import blogItem from "@app/api/blog-posts/blog-post-04.json";

const BlogPost02 = () => {
  return (
    <div className={`${styles.blogPostWrapper} ${helvetica.className}`}>
      <div className={styles.mainWrapper}>
        <section className="">
          <p className={styles.paragraph}>
            <span>{blogItem["paragraph01"].split(".")[0] + "."}</span>
            {blogItem["paragraph01"].split(".").slice(1).join(".")}
          </p>
        </section>
        <section>
          <h2>{blogItem.paragraphTitle02}</h2>
          {blogItem.subparagraphs02.map((subparagraph) => (
            <div key={subparagraph.id} className={styles.subparagraphList}>
              <p className={styles.subparagraph}>
                {subparagraph.titleOfParagraph}
              </p>
              <p className={styles.subparagraph}>{subparagraph.paragraph}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>{blogItem.paragraphTitle03}</h2>
          {blogItem.subparagraphs03.map((subparagraph) => (
            <div key={subparagraph.id} className={styles.subparagraphList}>
              <p className={styles.subparagraph}>
                {subparagraph.titleOfParagraph}
              </p>
              <p className={styles.subparagraph}>{subparagraph.paragraph}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>{blogItem.paragraphTitle04}</h2>
          {blogItem.subparagraphs04.map((subparagraph) => (
            <div key={subparagraph.id} className={styles.subparagraphList}>
              <p className={styles.subparagraph}>
                {subparagraph.titleOfParagraph}
              </p>
              <p className={styles.subparagraph}>{subparagraph.paragraph}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>{blogItem.paragraphTitle05}</h2>
          {blogItem.subparagraphs05.map((subparagraph) => (
            <div key={subparagraph.id} className={styles.subparagraphList}>
              <p className={styles.subparagraph}>
                {subparagraph.titleOfParagraph}
              </p>
              <p className={styles.subparagraph}>{subparagraph.paragraph}</p>

              {subparagraph.subparagraphs051 && (
                <ul className={styles.subparagraph}>
                  {subparagraph.subparagraphs051.map((ulsubparagraph) => (
                    <li
                      key={ulsubparagraph.id}
                      className={styles.subparagraphUl}
                    >
                      {ulsubparagraph.mainText}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
        <section>
          <h2>{blogItem.conclusionTitle}</h2>
          <p className={styles.paragraph}>{blogItem.conclusion}</p>
          <p className={styles.paragraph}>{blogItem.conclusion02}</p>
        </section>
      </div>
    </div>
  );
};

export default BlogPost02;
