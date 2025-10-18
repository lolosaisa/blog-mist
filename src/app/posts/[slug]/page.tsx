import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import Alert from "@/app/_components/alert";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { fetchMarkdown } from "@/lib/github";
import { parseMarkdown } from "@/lib/markdownToHtml";


//stopped fetching from local files, now fetching from github

type Params = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Params) {
  const slug = params.slug;

  let markdown: string;
  try {
    markdown = await fetchMarkdown(slug);
  } catch (error) {
    return notFound();
  }

  const { frontmatter, content } = await parseMarkdown(markdown);

  return (
    <main>
      <Alert preview={frontmatter?.preview} />
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={frontmatter.title}
            coverImage={frontmatter.coverImage}
            date={frontmatter.date}
            author={frontmatter.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = params.slug;

  let markdown: string;
  try {
    markdown = await fetchMarkdown(slug);
  } catch (error) {
    return notFound();
  }

  const { frontmatter } = await parseMarkdown(markdown);

  const title = `${frontmatter.title} | Next.js Blog Example`;

  return {
    title,
    openGraph: {
      title,
      images: frontmatter.ogImage ? [frontmatter.ogImage.url] : undefined,
    },
  };
}

export async function generateStaticParams() {
  // Optional: fetch all post slugs from GitHub
  // This pre-builds pages for all posts
  const repoOwner = "lolosaisa";
  const repoName = "Miniminds_xyz";
  const folder = "_posts";

  const res = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folder}`
  );
  const files = await res.json();

  return files
    .filter((f: any) => f.name.endsWith(".md"))
    .map((file: any) => ({
      slug: file.name.replace(".md", ""),
    }));
}
