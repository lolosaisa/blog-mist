import Container from "@/app/_components/container";
import { Hero, HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

export default async function Home() {
  const posts = getAllPosts();

  const heroPost = posts[0];
  const recentPosts = posts.slice(1, 7);   // first 6 after the hero post
  const morePosts = posts.slice(7);        // remaining posts

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      <main className="flex-1 container mx-auto px-6 py-12">
        {/* Featured Section */}
        {heroPost && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="font-display text-3xl font-bold">Featured</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          </section>
        )}

        {/* Main Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Articles */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-display text-3xl font-bold">Recent Articles</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <MoreStories
                  key={post.slug}
                  posts={[post]}
                />
              ))}
            </div>
          </div>

          {/* Sidebar Fixed Right */}
          <aside className="lg:col-span-1 sticky top-24 h-fit">
            <Sidebar />
          </aside>
        </div>

        {/* Remaining Posts */}
        {morePosts.length > 0 && (
          <section className="mt-16">
            <MoreStories posts={morePosts} />
          </section>
        )}
      </main>
    </div>
  );
}



// import Container from "@/app/_components/container";
// import { Hero, HeroPost } from "@/app/_components/hero-post";
// import { Intro } from "@/app/_components/intro";
// import { MoreStories } from "@/app/_components/more-stories";
// import { getAllPosts } from "@/lib/api";
// import Header from "./_components/header";
// import { Navbar } from "./_components/navbar";
// import { Sidebar } from "./_components/sidebar";

// export default async function Home() {
//   // Fetch all posts (from local or GitHub)
//   const posts = getAllPosts(); // if you want to keep GitHub integration, we can replace this with fetch from GitHub

//   const heroPost = posts[0];
//   const morePosts = posts.slice(1);

//   return (
//     <Container>
//       <Navbar />
//       <Hero />
      
//       <Intro />
//       {heroPost && (
//         <HeroPost
//           title={heroPost.title}
//           coverImage={heroPost.coverImage}
//           date={heroPost.date}
//           author={heroPost.author}
//           slug={heroPost.slug}
//           excerpt={heroPost.excerpt}
//         />
//       )}
//       <div className="lg:col-span-1">
//             <Sidebar />
//           </div>
//       {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      
//     </Container>
//   );
// }



















// import Container from "@/app/_components/container";
// import { HeroPost } from "@/app/_components/hero-post";
// import { Intro } from "@/app/_components/intro";
// import { MoreStories } from "@/app/_components/more-stories";
// import { getAllPosts } from "@/lib/api";
// import { fetchMarkdown } from "@/lib/github";
// import { parseMarkdown }from "@/lib/markdownToHtml";

// export default async function Home(){
//   //let me test with existing post from my github

//   const markdown = await fetchMarkdown("https://api.github.com/repos/lolosaisa/Miniminds_xyz/contents/");
//   const result = (await parseMarkdown(markdown)) as any;
//   const { frontmatter, content } = result;

//   return (
//     <main className="prose mx-auto p-6">
//       <h1>{frontmatter?.title}</h1>
//       <p className="text-sm text-gray-500">{frontmatter?.date}</p>
//       <div dangerouslySetInnerHTML={{ __html: markdown }} />
//     </main>
//   );
// }

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
