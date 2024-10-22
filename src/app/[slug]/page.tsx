import { BlogHero } from "@/components/blog-hero";
import { getBlogPost } from "@/utils/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./slug.module.css";

type BlogPostPageParams = Promise<{ slug: string }>;

export default async function BlogPostPage({
  params,
}: {
  params: BlogPostPageParams;
}) {
  const { slug } = await params;

  const blogPost = await getBlogPost(slug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={blogPost.frontmatter.title}
        publishedOn={blogPost.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={blogPost.content} />
      </div>
    </article>
  );
}
