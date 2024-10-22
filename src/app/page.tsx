import { BlogSummaryCard } from "@/components/blog-summary";
import { getBlogPostList } from "@/utils/posts";
import styles from "./homepage.module.css";

export default async function HomePage() {
  const blogPostList = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {blogPostList.map((blogPost) => (
        <BlogSummaryCard key={blogPost.slug} {...blogPost} />
      ))}
    </div>
  );
}
