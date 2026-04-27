import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import { markdownToHtml } from "@/lib/markdownToHtml";
import { Navbar } from "@/app/_components/navbar";
import { Footer } from "@/app/_components/footer";

type Params = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-6 py-24 max-w-3xl">
        <h1 className="font-display text-4xl font-bold mb-6">
          {post.title}
        </h1>

        <p className="text-muted-foreground mb-8">
          {post.excerpt}
        </p>

        <article
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>

      
    </>
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

// import { getPostBySlug, getAllPosts } from "@/lib/api";
// import { markdownToHtml } from "@/lib/markdownToHtml";
// import { notFound } from "next/navigation";
// import { Navbar } from "@/app/_components/navbar";
// import { Footer } from "@/app/_components/footer";

// type Params = {
//   slug: string;
// };

// export default async function ArticlePage({ params }: { params: Params }) {
  
//   let post;
//   try {
//     post = getPostBySlug(params.slug);
//   } catch {
//     return notFound();
//   }

//   const content = await markdownToHtml(post.content || "");

//   return (
//     <>
//       <Navbar />

//       <main className="container mx-auto px-6 py-24 max-w-3xl">
//         <h1 className="font-display text-4xl font-bold mb-6">
//           {post.title}
//         </h1>

//         <p className="text-muted-foreground mb-8">
//           {post.excerpt}
//         </p>

//         <article
//           className="prose prose-invert max-w-none"
//           dangerouslySetInnerHTML={{ __html: content }}
//         />
//       </main>

      
//     </>
//   );
// }

// export async function generateStaticParams() {
//   return getAllPosts().map((post) => ({ slug: post.slug }));
// }

