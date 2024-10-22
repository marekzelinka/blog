import { BlogHero } from "@/components/blog-hero";
import styles from "./slug.module.css";

export default function BlogPost() {
  return (
    <article className={styles.wrapper}>
      <BlogHero title="Example post!" publishedOn={new Date().toISOString()} />
      <div className={styles.page}>
        <p>This is where the blog post will go!</p>
        <p>
          You will need to use <em>MDX</em> to render all of the elements
          created from the blog post in this spot.
        </p>
      </div>
    </article>
  );
}
