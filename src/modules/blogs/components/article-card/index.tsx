import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  categories: string[];
  href: string;
}

export function ArticleCard({
  title,
  author,
  date,
  readTime,
  image,
  categories,
  href,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg bg-white transition-all hover:shadow-lg"
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 h-[219px] group-hover:scale-105"
        />
      </div>
      <div className="p-4 md:p-[24px]">
        <div className="mb-3 flex gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="inline-block rounded-full bg-[#E3EAF3] px-[8px] py-[4px] text-[12px] font-[500] text-[#58728D]"
            >
              {category}
            </span>
          ))}
        </div>
        <h2 className="mb-3 text-xl font-bold text-[#243547] line-clamp-3">
          {title}
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}
