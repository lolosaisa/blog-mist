import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

// Existing HeroPost component
export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/posts/${slug}`} className="text-foreground hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}

// --- New Hero section for the landing page ---
export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Crypto pattern background */}
      <div className="absolute inset-0 crypto-pattern opacity-50" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
            Mist.cash <span className="text-primary">Blog</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Insights on private, compliant blockchain finance.
          </p>
          <p>Send anything to anyone privately with full compliance</p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="h-1 w-1 rounded-full bg-primary" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};



// import Avatar from "@/app/_components/avatar";
// import CoverImage from "@/app/_components/cover-image";
// import { type Author } from "@/interfaces/author";
// import Link from "next/link";
// import DateFormatter from "./date-formatter";

// type Props = {
//   title: string;
//   coverImage: string;
//   date: string;
//   excerpt: string;
//   author: Author;
//   slug: string;
// };

// export function HeroPost({
//   title,
//   coverImage,
//   date,
//   excerpt,
//   author,
//   slug,
// }: Props) {
//   return (
//     <section>
//       <div className="mb-8 md:mb-16">
//         <CoverImage title={title} src={coverImage} slug={slug} />
//       </div>
//       <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
//         <div>
//           <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
//             <Link href={`/posts/${slug}`} className="text-foreground hover:underline">
//               {title}
//             </Link>
//           </h3>
//           <div className="mb-4 md:mb-0 text-lg">
//             <DateFormatter dateString={date} />
//           </div>
//         </div>
//         <div>
//           <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
//           <Avatar name={author.name} picture={author.picture} />
//         </div>
//       </div>
//     </section>
//   );
// }
