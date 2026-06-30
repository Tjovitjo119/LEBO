import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/site-data";

type BlogCardProps = {
  post: BlogPost;
  large?: boolean;
};

export function BlogCard({ post, large = false }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-md border border-radiantInk/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
      <Link href={`/blog/${post.categoryPath}/${post.slug}`} className="block">
        <span className={`relative block overflow-hidden ${large ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
          {post.video ? (
            <video
              src={post.video}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            <Image src={post.image} alt="" fill className="kenburns object-cover" />
          )}
        </span>
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-radiantPink">
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-radiantCoral" />
          <span>{post.readTime}</span>
        </div>
        <h3 className={`${large ? "text-3xl" : "text-2xl"} mt-4 font-display leading-tight text-radiantInk`}>
          <Link href={`/blog/${post.categoryPath}/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-radiantMuted">{post.excerpt}</p>
        <Link
          href={`/blog/${post.categoryPath}/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-radiantInk transition hover:text-radiantPink"
        >
          Read more <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}
