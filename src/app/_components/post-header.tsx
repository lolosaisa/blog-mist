import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author & { bio?: string; twitter?: string; linkedin?: string };
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      {/* Post Title */}
      <div className="text-navy.deep text-4xl md:text-5xl font-extrabold mb-2">
        <PostTitle>{title}</PostTitle>
      </div>

      {/* Gold accent line */}
      <div className="w-20 h-1 bg-gold rounded-full mb-6" />

      {/* Desktop Avatar & Author Info */}
      <div className="hidden md:flex items-center mb-12 gap-4">
        <div className="border-2 border-gold rounded-full">
          <Avatar
            name={author.name}
            picture={author.picture}
          />
        </div>
        <div>
          <p className="font-semibold text-navy.deep">{author.name}</p>
          {author.bio && <p className="text-navy.medium text-sm">{author.bio}</p>}
        </div>
        {/* Optional social icons */}
        <div className="ml-auto flex gap-3">
          {author.twitter && (
            <a
              href={author.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-bright transition-colors"
            >
              Twitter
            </a>
          )}
          {author.linkedin && (
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-bright transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>

      {/* Cover Image */}
      <div className="mb-8 md:mb-16 sm:mx-0 shadow-lg rounded-lg overflow-hidden">
        <CoverImage title={title} src={coverImage} />
      </div>

        {/* Mobile Author Info & Date */}
          <div className="block md:hidden mb-4">
            <div className="border-2 border-gold rounded-full mx-auto">
              <Avatar
                name={author.name}
                picture={author.picture}
              />
            </div>
            <p className="text-navy.deep font-semibold">{author.name}</p>
            {author.bio && (
              <p className="text-navy.medium text-sm mb-2">{author.bio}</p>
            )}
            <div className="mb-6 text-lg text-navy.medium">
              <DateFormatter dateString={date} />
            </div>
  
                  {/* Optional social icons for mobile */}
                  <div className="flex justify-center gap-4">
                    {author.twitter && (
                      <a
                        href={author.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-gold-bright transition-colors"
                      >
                        Twitter
                      </a>
                    )}
                    {author.linkedin && (
                      <a
                        href={author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-gold-bright transition-colors"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
          </>
        );
      }
