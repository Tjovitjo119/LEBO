import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageHero } from "@/components/PageHero";
import { blogCategories, blogPosts, brand } from "@/lib/site-data";

export const metadata = {
  title: "Blog"
};

type BlogPageProps = {
  searchParams?: {
    category?: string;
  };
};

export default function BlogPage({ searchParams }: BlogPageProps) {
  const selected = searchParams?.category || "All";
  const posts =
    selected === "All" ? blogPosts : blogPosts.filter((post) => post.category.toLowerCase() === selected.toLowerCase());
  const featured = posts[0] || blogPosts[0];
  const gridPosts = posts.filter((post) => post.slug !== featured.slug);

  return (
    <>
      <PageHero eyebrow="The blog" title={brand.description} image="/images/stay-radiant-flatlay.png" />

      <section className="section-sr bg-radiantCream">
        <div className="container-sr">
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {blogCategories.map((category) => {
              const active = category.toLowerCase() === selected.toLowerCase();
              return (
                <Link
                  key={category}
                  href={category === "All" ? "/blog" : `/blog?category=${encodeURIComponent(category)}`}
                  className={`whitespace-nowrap rounded-md px-4 py-3 text-sm font-black uppercase tracking-[0.12em] transition ${
                    active ? "bg-radiantPink text-white" : "bg-white text-radiantInk hover:bg-radiantCream"
                  }`}
                >
                  {category}
                </Link>
              );
            })}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="grid gap-8">
              <BlogCard post={featured} large />
              <div className="grid gap-6 md:grid-cols-2">
                {gridPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>

            <aside className="grid content-start gap-5">
              <div className="rounded-md bg-white p-6 shadow-sm">
                <h2 className="font-display text-3xl text-radiantInk">Join the list</h2>
                <p className="mt-3 text-sm leading-6 text-radiantMuted">New posts and launch updates in your inbox.</p>
                <div className="mt-5">
                  <NewsletterForm source="blog-sidebar" compact />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
