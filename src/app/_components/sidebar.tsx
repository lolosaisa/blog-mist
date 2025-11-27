import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Sidebar = () => {
  const categories = [
    { name: "Privacy Tech", count: 12 },
    { name: "Compliance", count: 8 },
    { name: "Web3 Finance", count: 15 },
    { name: "FOCBB Protocol", count: 6 },
    { name: "Security", count: 10 },
  ];

  const popularTags = [
    "Zero-Knowledge",
    "DeFi",
    "Blockchain",
    "Compliance",
    "Privacy",
    "Smart Contracts",
  ];

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="space-y-3">
        <h3 className="font-display font-bold text-lg">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-10 bg-secondary border-border focus:border-primary"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-lg">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.name}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-secondary hover:bg-secondary/70 text-left transition-colors group"
            >
              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                {category.name}
              </span>
              <Badge
                variant="secondary"
                className="bg-muted text-muted-foreground"
              >
                {category.count}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-lg">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="rounded-xl bg-gradient-to-br from-card to-secondary p-6 space-y-4 border border-primary/20">
        <div className="space-y-2">
          <h3 className="font-display font-bold text-xl">Stay Updated</h3>
          <p className="text-sm text-muted-foreground">
            Get the latest insights on private blockchain finance.
          </p>
        </div>
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-background/50 border-border"
          />
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Subscribe
          </Button>
        </div>
      </div>
    </aside>
  );
};
