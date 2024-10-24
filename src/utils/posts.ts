import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

export interface BlogPostMeta {
  title: string;
  abstract: string;
  publishedOn: string;
}

export interface BlogPost extends BlogPostMeta {
  slug: string;
}

export async function getBlogPostList(): Promise<BlogPost[]> {
  const fileNames = await readDirectory("/content");

  const blogPosts: BlogPost[] = [];

  for (const fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const frontmatter = matter(rawContent).data as BlogPostMeta;

    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      ...frontmatter,
    });
  }

  return blogPosts.sort((blogPostA, blogPostB) =>
    blogPostA.publishedOn < blogPostB.publishedOn ? 1 : -1,
  );
}

export const getBlogPost = cache(
  async (
    slug: string,
  ): Promise<{ frontmatter: BlogPostMeta; content: string } | null> => {
    let rawContent: string;

    try {
      rawContent = await readFile(`/content/${slug}.mdx`);
    } catch {
      return null;
    }

    const { data, content } = matter(rawContent);

    const frontmatter = data as BlogPostMeta;

    return { frontmatter, content };
  },
);

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
