// import { BlogPost01 } from "@interfaces/interfaces";
import styles from "./styles.module.scss";
import blogItem from "@app/api/blog-posts/blog-post-01.json";

const BlogPost01 = () => {
  return (
    <div className={styles.blogPostWrapper}>
      <div className={styles.mainWrapper}>
        <section className="">
          <p className={styles.paragraph}>
            <span>{blogItem["paragraph01"].split(".")[0] + "."}</span>
            {blogItem["paragraph01"].split(".").slice(1).join(".")}
          </p>
        </section>
        <section>
          <h2>{blogItem.paragraphTitle02}</h2>
          <p className={styles.paragraph}>{blogItem.paragraph021}</p>
          <p className={styles.paragraph}>{blogItem.paragraph022}</p>
        </section>
        <section>
          <h2>{blogItem.paragraphTitle03}</h2>
          <p className={styles.paragraph}>{blogItem.paragraph031}</p>
          <p className={styles.paragraph}>{blogItem.paragraph032}</p>
        </section>
        <section>
          <h2>{blogItem.paragraphTitle04}</h2>
          <p className={styles.paragraph}>{blogItem.paragraph04}</p>
          <ul>
            {blogItem.subparagraphs04.map((subparagraph04) => (
              <ol key={subparagraph04.id} className={styles.subparagraph}>
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
          <h2>{blogItem.paragraphTitle05}</h2>
          {blogItem.subparagraphs05.map((subparagraph) => (
            <p key={subparagraph.id} className={styles.subparagraph}>
              <span className={styles.boldParagraph}>
                {subparagraph.boldText}
              </span>
              {subparagraph.mainText}
            </p>
          ))}
        </section>
        <section>
          <h2>{blogItem.conclusionTitle}</h2>
          <p className={styles.paragraph}>{blogItem.conclusion}</p>
        </section>
      </div>
    </div>
  );
};

export default BlogPost01;
