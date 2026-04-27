import { Badge } from "@/app/_components/badge";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export const Sidebar = () => {
  const posts = getAllPosts();

  // Derive categories and counts from real post tags
  const tagCounts = posts
    .flatMap((post) => post.tags || [])
    .reduce<Record<string, number>>((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});

  const categories = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])        // sort by count descending
    .slice(0, 5);                         // top 5

  const popularTags = Object.keys(tagCounts)
    .sort((a, b) => tagCounts[b] - tagCounts[a])
    .slice(0, 10);                        // top 10 tags

  return (
    <aside className="space-y-8">

      {/* Categories — derived from post tags */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-lg">Categories</h3>
        <div className="space-y-2">
          {categories.map(([name, count]) => (
            <Link
              key={name}
              href={`/?tag=${encodeURIComponent(name)}`}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-secondary hover:bg-secondary/70 text-left transition-colors group"
            >
              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                {name}
              </span>
              <Badge
                variant="secondary"
                className="bg-muted text-muted-foreground"
              >
                {count}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags — derived from post tags */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-lg">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              href={`/?tag=${encodeURIComponent(tag)}`}
            >
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Stay Updated — link instead of form */}
      <div className="rounded-xl bg-gradient-to-br from-card to-secondary p-6 space-y-4 border border-primary/20">
        <div className="space-y-2">
          <h3 className="font-display font-bold text-xl">Stay Updated</h3>
          <p className="text-sm text-muted-foreground">
            Get the latest insights on private blockchain finance.
          </p>
        </div>
        <Link
          href="https://twitter.com/mistcash"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm"
        >
          Follow us on X
        </Link>
      </div>

    </aside>
  );
};