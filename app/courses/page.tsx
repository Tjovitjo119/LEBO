import { NewsletterForm } from "@/components/NewsletterForm";
import { courses } from "@/lib/site-data";

export const metadata = {
  title: "Courses"
};

export default function CoursesPage() {
  return (
    <>
      <section className="bg-radiantInk py-20 text-white">
        <div className="container-sr">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">Courses</p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl leading-tight md:text-7xl">Learn to blog like a pro.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Courses for emerging content creators who want to build a blog, publish consistently, and monetise with intention.
          </p>
        </div>
      </section>

      <section className="section-sr bg-radiantCream">
        <div className="container-sr">
          <div className="grid gap-6 md:grid-cols-3">
            {courses.map(({ title, price, description, icon: Icon }) => (
              <article key={title} className="rounded-md bg-white p-7 shadow-sm">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-radiantPink/10 text-radiantPink">
                  <Icon size={24} />
                </div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">{price}</p>
                <h2 className="mt-3 font-display text-3xl text-radiantInk">{title}</h2>
                <p className="mt-4 text-sm leading-6 text-radiantMuted">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-md bg-white p-7 shadow-sm">
            <div className="grid items-center gap-7 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">Free trial</p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-radiantInk">Try your first lesson free.</h2>
              </div>
              <NewsletterForm source="course-free-trial" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-sr grid gap-5 md:grid-cols-3">
          {["Publish with structure", "Grow through search", "Build owned income"].map((item) => (
            <div key={item} className="rounded-md border border-radiantInk/10 p-6 text-xl font-black text-radiantInk">
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
