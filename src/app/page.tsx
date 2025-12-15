import Container from "@/app/_components/container";
import { Hero } from "@/app/_components/hero-post";
import { getAllPosts } from "@/lib/api";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { ArticleCard } from "./_components/article-card";

export default async function Home() {
  const posts = getAllPosts();

  const heroPost = posts[0];                // featured
  const recentPosts = posts.slice(1, 7);    // next 6
  const morePosts = posts.slice(7);         // remaining

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      <main className="flex-1 container mx-auto px-6 py-12">
        
        {/* ================= FEATURED ================= */}
        {heroPost && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="font-display text-3xl font-bold">Featured</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <ArticleCard
              title={heroPost.title}
              excerpt={heroPost.excerpt}
              author={heroPost.author?.name || "Mist Team"}
              date={heroPost.date}
              tags={heroPost.tags || []}
              image={heroPost.coverImage}
              featured={true}
            />
          </section>
        )}

        {/* ================= GRID + SIDEBAR ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* -------- Recent Articles -------- */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-display text-3xl font-bold">Recent Articles</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <ArticleCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  author={post.author?.name || "Mist Team"}
                  date={post.date}
                  tags={post.tags || []}
                  image={post.coverImage}
                />
              ))}
            </div>
          </div>

          {/* -------- Sidebar (fixed) -------- */}
          <aside className="lg:col-span-1 sticky top-24 h-fit">
            <Sidebar />
          </aside>
        </div>

        {/* ================= MORE POSTS ================= */}
        {morePosts.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold mb-8">
              More Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {morePosts.map((post) => (
                <ArticleCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  author={post.author?.name || "Mist Team"}
                  date={post.date}
                  tags={post.tags || []}
                  image={post.coverImage}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

