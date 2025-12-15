import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Navbar } from "@/app/_components/navbar";
import { Footer } from "@/app/_components/footer";
import { useParams } from "next/navigation";

type ArticleData = {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  slug?: string;
};

/**
 * Minimal in-file posts dictionary to satisfy the reference to `_posts`.
 * Replace this with an import from your real data source, e.g.:
 * import { posts as _posts } from "@/data/posts";
 */
const _posts: Record<string, ArticleData> = {
  "example-article": {
    title: "Example Article",
    excerpt: "This is an example excerpt for the example article.",
    content: "This is the article body.\n\n## Section\n\nThis is a paragraph under a section.\n- Item one\n- Item two\n1. First\n2. Second",
    tags: ["example", "demo"],
    author: "Author Name",
    date: "2025-01-01",
    readTime: "3 min",
    slug: "example-article",
  },
};

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? _posts[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-6 py-24 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href={`/articles${slug ? `/${slug}` : ""}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Article Header */}
      <header className="pt-24 pb-12 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="max-w-3xl">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              {article.title}
            </h1>
            
            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8">
              {article.excerpt}
            </p>
            
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Action Buttons */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="mr-2 h-4 w-4" />
              Save
            </Button>
          </div>
          
          {/* Article Body */}
          <article className="prose prose-invert prose-primary max-w-none">
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-display text-2xl font-bold mt-12 mb-4 text-foreground">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="font-display text-xl font-bold mt-8 mb-3 text-foreground">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-muted-foreground ml-4 mb-2">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.match(/^\d+\. /)) {
                return (
                  <li key={index} className="text-muted-foreground ml-4 mb-2 list-decimal">
                    {paragraph.replace(/^\d+\. /, '')}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Article;
