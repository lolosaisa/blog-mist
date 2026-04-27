import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import Alert from "@/app/_components/alert";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { PostPreview } from "@/app/_components/post-preview";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import { markdownToHtml } from "@/lib/markdownToHtml";

type Params = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Params) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  const allPosts = getAllPosts();
  const recommendedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <main className="bg-background text-foreground">
      <Alert preview={post.preview} />

      <Container>
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">

          <article className="lg:col-span-2 mx-auto max-w-3xl">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={content} />
          </article>

          <aside className="hidden lg:block">
            <h3 className="font-display text-xl font-bold mb-4">
              Recommended
            </h3>
            {recommendedPosts.map((p) => (
              <PostPreview
                key={p.slug}
                slug={p.slug}
                title={p.title}
                coverImage={p.coverImage}
                date={p.date}
                excerpt={p.excerpt}
                author={p.author}
              />
            ))}
          </aside>

        </div>
      </Container>
    </main>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    return {};
  }

  return {
    title: `${post.title} | Mist.cash Blog`,
    openGraph: {
      images: post.ogImage ? [post.ogImage.url] : undefined,
    },
  };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}