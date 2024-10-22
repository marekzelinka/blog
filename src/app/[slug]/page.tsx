import { BlogHero } from "@/components/blog-hero";
import { getBlogPost } from "@/utils/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./page.module.css";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { slug } = await props.params;

  const blogPost = await getBlogPost(slug);

  return {
    title: blogPost.frontmatter.title,
    description: blogPost.frontmatter.abstract,
  };
}

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { slug } = await props.params;

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
