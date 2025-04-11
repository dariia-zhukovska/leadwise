// import { BlogPost01 } from "@interfaces/interfaces";
import { helvetica } from "@app/layout";
import styles from "./styles.module.scss";
import blogItem from "@app/api/blog-posts/blog-post-03.json";

const BlogPost03 = () => {
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
          <p className={styles.paragraph}>{blogItem.paragraph021}</p>
          <p className={styles.paragraph}>{blogItem.paragraph022}</p>
        </section>
        <section>
          <h2 className={styles.subparagraph}>{blogItem.paragraphTitle03}</h2>
          <ul>
            {blogItem.subparagraphs03.map((subparagraph03) => (
              <ul key={subparagraph03.id} className={styles.subparagraph}>
                <li>
                  {subparagraph03.boldText}
                  {subparagraph03.mainText}
                </li>
              </ul>
            ))}
          </ul>
        </section>
        <section>
          <h2>{blogItem.paragraphTitle04}</h2>
          <p className={styles.paragraph}>{blogItem.paragraph04}</p>
          <p className={styles.paragraph}>{blogItem.paragraph041}</p>
          <p className={styles.paragraph}>{blogItem.paragraph042}</p>
          <ul>
            {blogItem.subparagraphs04.map((subparagraph04) => (
              <ul key={subparagraph04.id} className={styles.subparagraph}>
                <li className={styles.boldParagraph}>
                  {subparagraph04.boldText}
                  {subparagraph04.mainText}{" "}
                </li>
              </ul>
            ))}
          </ul>
        </section>
        <section>
          <h2>{blogItem.paragraphTitle05}</h2>
          <p className={styles.paragraph}>{blogItem.paragraph051}</p>
          <p className={styles.paragraph}>{blogItem.paragraph052}</p>
          <p className={styles.paragraph}>{blogItem.paragraph053}</p>
          <ul>
            {blogItem.subparagraphs05.map((subparagraph) => (
              <ul key={subparagraph.id} className={styles.subparagraph}>
                <li>
                  {subparagraph.boldText}
                  {subparagraph.mainText}
                </li>
              </ul>
            ))}
          </ul>
        </section>
        <section>
          <h2>{blogItem.paragraphTitle06}</h2>
          <p className={styles.paragraph}>{blogItem.paragraph061}</p>
          <p className={styles.paragraph}>{blogItem.paragraph062}</p>
          <p className={styles.paragraph}>{blogItem.paragraph063}</p>
          <ul>
            {" "}
            {blogItem.subparagraphs06.map((subparagraph) => (
              <ul key={subparagraph.id} className={styles.subparagraph}>
                <li>
                  {subparagraph.boldText}
                  {subparagraph.mainText}
                </li>
              </ul>
            ))}
          </ul>
        </section>
        <section>
          <h2>{blogItem.paragraphTitle07}</h2>
          <p className={styles.paragraph}>{blogItem.paragraph071}</p>
          <p className={styles.paragraph}>{blogItem.paragraph072}</p>
          <p className={styles.paragraph}>{blogItem.paragraph073}</p>
          <ul></ul>
          {blogItem.subparagraphs07.map((subparagraph) => (
            <ul key={subparagraph.id} className={styles.subparagraph}>
              <li>
                {" "}
                {subparagraph.boldText}
                {subparagraph.mainText}
              </li>
            </ul>
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

export default BlogPost03;
