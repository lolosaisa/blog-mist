import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { fetchMarkdown } from "@/lib/github";
import { parseMarkdown }from "@/lib/markdownToHtml";

export default async function Home(){
  //let me test with existing post from my github

  const markdown = await fetchMarkdown("https://api.github.com/repos/lolosaisa/Miniminds_xyz/contents/");
  const result = (await parseMarkdown(markdown)) as any;
  const { frontmatter, content } = result;

  return (
    <main className="prose mx-auto p-6">
      <h1>{frontmatter?.title}</h1>
      <p className="text-sm text-gray-500">{frontmatter?.date}</p>
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </main>
  );
}

// export default function Index() {
//   const allPosts = getAllPosts();

//   const heroPost = allPosts[0];

//   const morePosts = allPosts.slice(1);

//   return (
//     <main>
//       <Container>
//         <Intro />
//         <HeroPost
//           title={heroPost.title}
//           coverImage={heroPost.coverImage}
//           date={heroPost.date}
//           author={heroPost.author}
//           slug={heroPost.slug}
//           excerpt={heroPost.excerpt}
//         />
//         {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//       </Container>
//     </main>
//   );
// }
