import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import Alert from "@/app/_components/alert";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { fetchMarkdown } from "@/lib/github";
import { parseMarkdown } from "@/lib/markdownToHtml";
import { PostPreview } from "@/app/_components/post-preview";

type Params = {
  params: { slug: string };
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

  // Example: Fetch other posts for sidebar
  const repoOwner = "lolosaisa";
  const repoName = "Miniminds_xyz";
  const folder = "_posts";
  const res = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folder}`);
  const files = await res.json();
  const mdFiles = files.filter((f: any) => f.name.endsWith(".md"));
  const allPostsPromises = mdFiles.map(async (file: any) => {
    const postSlug = file.name.replace(".md", "");
    const postMarkdown = await fetchMarkdown(postSlug);
    return await parseMarkdown(postMarkdown);
  });
  const allPosts = await Promise.all(allPostsPromises);
  const recommendedPosts = allPosts.filter((p: any) => p.frontmatter?.slug !== slug).slice(0, 3);

  return (
    <main className="bg-background text-foreground">
      <Alert preview={frontmatter?.preview} />
      <Container>
        <Header />

        {/* Grid layout: main content center + right sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">
          {/* Main blog content */}
          <article className="lg:col-span-2 mx-auto max-w-3xl">
            <PostHeader
              title={frontmatter.title}
              coverImage={frontmatter.coverImage}
              date={frontmatter.date}
              author={frontmatter.author}
            />
            <PostBody content={content} />
          </article>

          {/* Right sidebar */}
          <aside className="hidden lg:block">
            <div className="mb-8">
              <h3 className="text-navy.deep font-bold text-xl mb-4">Recommended</h3>
              {recommendedPosts.map((post: any) => (
                <PostPreview key={post.frontmatter.slug} {...post.frontmatter} small />
              ))}
            </div>
            <div>
              <h3 className="text-navy.deep font-bold text-xl mb-4">Most Popular</h3>
              {recommendedPosts.map((post: any) => (
                <PostPreview key={post.frontmatter.slug} {...post.frontmatter} small />
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}

// --- Metadata & static params remain the same ---
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
    openGraph: { title, images: frontmatter.ogImage ? [frontmatter.ogImage.url] : undefined },
  };
}

export async function generateStaticParams() {
  const repoOwner = "lolosaisa";
  const repoName = "Miniminds_xyz";
  const folder = "_posts";
  const res = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folder}`);
  const files = await res.json();
  return files.filter((f: any) => f.name.endsWith(".md")).map((file: any) => ({
    slug: file.name.replace(".md", ""),
  }));
}
