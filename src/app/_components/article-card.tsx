import { Calendar, User } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  image?: string;
  featured?: boolean;
  slug?: string;
}

export const ArticleCard = ({
  title,
  excerpt,
  author,
  date,
  tags,
  image,
  featured = false,
  slug,
}: ArticleCardProps) => {
  const CardContent = (
    <article
      className={`group cursor-pointer rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-secondary">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center crypto-pattern">
            <div className="text-primary/30 text-6xl font-display font-bold">
              MIST
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3
          className={`font-display font-bold leading-tight group-hover:text-primary transition-colors ${
            featured ? "text-3xl" : "text-xl"
          }`}
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </article>
  );

  return slug ? (
    <Link href={`/articles/${slug}`} className="block">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
};



// import { Calendar, User } from "lucide-react";
// import { Badge } from "@/components/ui/badge";


// interface ArticleCardProps {
//   title: string;
//   excerpt: string;
//   author: string;
//   date: string;
//   tags: string[];
//   image?: string;
//   featured?: boolean;
//   slug?: string;
// }

// export const ArticleCard = ({
//   title,
//   excerpt,
//   author,
//   date,
//   tags,
//   image,
//   featured = false,
//   slug,
// }: ArticleCardProps) => {
//   return (
//     <article
//       className={`group cursor-pointer rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated ${
//         featured ? "md:col-span-2" : ""
//       }`}
//     >
//       {/* Image */}
//       <div className="relative overflow-hidden aspect-video bg-secondary">
//         {image ? (
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center crypto-pattern">
//             <div className="text-primary/30 text-6xl font-display font-bold">
//               MIST
//             </div>
//           </div>
//         )}
        
//         {/* Gradient overlay on hover */}
//         <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>

//       {/* Content */}
//       <div className="p-6 space-y-4">
//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <Badge
//               key={tag}
//               variant="secondary"
//               className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
//             >
//               {tag}
//             </Badge>
//           ))}
//         </div>

//         {/* Title */}
//         <h3
//           className={`font-display font-bold leading-tight group-hover:text-primary transition-colors ${
//             featured ? "text-3xl" : "text-xl"
//           }`}
//         >
//           {title}
//         </h3>

//         {/* Excerpt */}
//         <p className="text-muted-foreground line-clamp-3">{excerpt}</p>

//         {/* Meta */}
//         <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
//           <div className="flex items-center gap-1.5">
//             <User className="h-4 w-4" />
//             <span>{author}</span>
//           </div>
//           <div className="flex items-center gap-1.5">
//             <Calendar className="h-4 w-4" />
//             <span>{date}</span>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };
