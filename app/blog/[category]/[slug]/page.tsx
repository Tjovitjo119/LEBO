import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { blogPosts, brand, getPostByRoute, getRelatedPosts } from "@/lib/site-data";

type PostPageProps = {
  params: {
    category: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    category: post.categoryPath,
    slug: post.slug
  }));
}

export function generateMetadata({ params }: PostPageProps) {
  const post = getPostByRoute(params.category, params.slug);

  if (!post) {
    return {
      title: "Post"
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image]
    }
  };
}

export default function BlogPostPage({ params }: PostPageProps) {
  const post = getPostByRoute(params.category, params.slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, post.categoryPath);
  const shareText = encodeURIComponent(`${post.title} - ${brand.name}`);
  const shareUrl = encodeURIComponent(`https://www.stayradiant.com/blog/${post.categoryPath}/${post.slug}`);

  return (
    <>
      <section className="bg-radiantInk text-white">
        <div className="container-sr grid gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">{post.category}</p>
            <h1 className="mt-4 font-display text-5xl leading-tight md:text-7xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-white/70">
              <span>By {brand.founder}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-sm">
            <Image src={post.image} alt="" fill priority className="object-cover" />
          </div>
        </div>
      </section>

      <article className="section-sr bg-radiantCream">
        <div className="container-sr grid gap-10 lg:grid-cols-[minmax(0,720px)_300px] lg:justify-between">
          <div className="rounded-md bg-white p-7 shadow-sm md:p-10">
            <div className="grid gap-7 text-lg leading-8 text-radiantInk">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="my-10 border-l-4 border-radiantPink pl-5 font-display text-3xl leading-tight text-radiantInk">
              Small rituals become powerful when they help you return to yourself.
            </blockquote>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-radiantCream px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-radiantPink">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="grid content-start gap-5">
            <div className="rounded-md bg-white p-6 shadow-sm">
              <h2 className="font-display text-3xl text-radiantInk">Share</h2>
              <div className="mt-5 grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-radiantInk">
                <a href={`https://wa.me/?text=${shareText}%20${shareUrl}`} className="rounded-md bg-radiantCream px-4 py-3 hover:bg-radiantGold">
                  WhatsApp
                </a>
                <a href={`mailto:?subject=${shareText}&body=${shareUrl}`} className="rounded-md bg-radiantCream px-4 py-3 hover:bg-radiantGold">
                  Email
                </a>
                <Link href="/contact" className="rounded-md bg-radiantCream px-4 py-3 hover:bg-radiantGold">
                  Collaborate
                </Link>
              </div>
            </div>
            <div className="rounded-md bg-white p-6 shadow-sm">
              <h2 className="font-display text-3xl text-radiantInk">{brand.founder}</h2>
              <p className="mt-3 text-sm leading-6 text-radiantMuted">
                Fashion Media graduate, founder, and editor of Stay Radiant.
              </p>
            </div>
            <div className="rounded-md bg-white p-6 shadow-sm">
              <h2 className="font-display text-3xl text-radiantInk">Loved this post?</h2>
              <p className="mt-3 text-sm leading-6 text-radiantMuted">Join the list for new reads and creator resources.</p>
              <div className="mt-5">
                <NewsletterForm source="post-sidebar" compact />
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="section-sr bg-white">
        <div className="container-sr">
          <h2 className="mb-8 font-display text-5xl text-radiantInk">You might also like</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
