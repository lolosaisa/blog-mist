import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className="bg-background text-foreground px-5 md:px-10 py-14 md:py-28">
      <h2 className="mb-10 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-navy.deep">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-32 gap-x-0 md:gap-x-16 lg:gap-x-32">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="border border-navy.pale rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
