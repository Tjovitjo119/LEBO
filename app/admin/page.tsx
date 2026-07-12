import { cookies } from "next/headers";
import { Mail, MessageSquare, Users } from "lucide-react";
import { ADMIN_COOKIE, isValidAdminToken } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { AdminLoginForm } from "./AdminLoginForm";
import { LogoutButton } from "./LogoutButton";

export const metadata = {
  title: "Owner Dashboard",
  robots: { index: false, follow: false }
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const token = cookies().get(ADMIN_COOKIE)?.value;
  const authed = isValidAdminToken(token);

  if (!authed) {
    return <AdminLoginForm />;
  }

  let contactMessages: Awaited<ReturnType<typeof prisma.contactMessage.findMany>> = [];
  let subscribers: Awaited<ReturnType<typeof prisma.newsletterSubscriber.findMany>> = [];
  let dbConnected = Boolean(process.env.DATABASE_URL);

  if (dbConnected) {
    try {
      [contactMessages, subscribers] = await Promise.all([
        prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" }, take: 100 }),
        prisma.newsletterSubscriber.findMany({ orderBy: { createdAt: "desc" }, take: 200 })
      ]);
    } catch (error) {
      console.error("Admin dashboard query failed", error);
      dbConnected = false;
    }
  }

  return (
    <>
      <section className="bg-radiantPink py-14 text-white">
        <div className="container-sr flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">Owner dashboard</p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Who&apos;s reaching out to Stay Radiant.</h1>
          </div>
          <LogoutButton />
        </div>
      </section>

      <section className="section-sr bg-radiantCream">
        <div className="container-sr grid gap-10">
          {!dbConnected ? (
            <div className="rounded-md border border-radiantGold bg-white p-6 text-sm font-bold text-radiantInk shadow-sm">
              No database is connected yet, so submissions cannot be listed here. Add a free Postgres database
              (Neon, Supabase, or Vercel Postgres all have free tiers) and set DATABASE_URL, then run{" "}
              <code className="rounded bg-radiantCream px-1.5 py-0.5">npx prisma migrate deploy</code>.
            </div>
          ) : null}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-radiantPink/10 text-radiantPink">
                <Users size={20} />
              </span>
              <h2 className="font-display text-3xl text-radiantInk">Newsletter subscribers ({subscribers.length})</h2>
            </div>
            {subscribers.length === 0 ? (
              <p className="rounded-md bg-white p-6 text-sm text-radiantMuted shadow-sm">No subscribers yet.</p>
            ) : (
              <div className="overflow-x-auto rounded-md bg-white shadow-sm">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead className="bg-radiantCream text-xs font-black uppercase tracking-[0.1em] text-radiantMuted">
                    <tr>
                      <th className="px-5 py-3">Email</th>
                      <th className="px-5 py-3">Source</th>
                      <th className="px-5 py-3">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((subscriber) => (
                      <tr key={subscriber.id} className="border-t border-radiantInk/5">
                        <td className="px-5 py-3 font-bold text-radiantInk">{subscriber.email}</td>
                        <td className="px-5 py-3 text-radiantMuted">{subscriber.source || "website"}</td>
                        <td className="px-5 py-3 text-radiantMuted">
                          {new Date(subscriber.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-radiantPink/10 text-radiantPink">
                <MessageSquare size={20} />
              </span>
              <h2 className="font-display text-3xl text-radiantInk">Contact messages ({contactMessages.length})</h2>
            </div>
            {contactMessages.length === 0 ? (
              <p className="rounded-md bg-white p-6 text-sm text-radiantMuted shadow-sm">No messages yet.</p>
            ) : (
              <div className="grid gap-4">
                {contactMessages.map((entry) => (
                  <article key={entry.id} className="rounded-md bg-white p-6 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-black text-radiantInk">{entry.name}</p>
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-radiantPink">{entry.subject}</p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-radiantMuted">
                      <a href={`mailto:${entry.email}`} className="inline-flex items-center gap-1 hover:text-radiantPink">
                        <Mail size={14} /> {entry.email}
                      </a>
                      {entry.phoneNumber ? <span>{entry.phoneNumber}</span> : null}
                      <span>{new Date(entry.createdAt).toLocaleString()}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-radiantInk">{entry.message}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
