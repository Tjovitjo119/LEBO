import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Camera,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  PenLine,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Users
} from "lucide-react";

export const brand = {
  name: "STAY.RADIANT",
  legalName: "Stay Radiant (Pty) Ltd",
  registration: "2023/883398/07",
  founder: "Lebohang Ramakau",
  email: "leboramakau7@gmail.com",
  phone: "+27826494134",
  location: "Johannesburg, South Africa",
  domain: "www.stayradiant.com",
  tagline: "Empowering women through self-expression",
  description:
    "A South African wellness, beauty, fashion, and lifestyle blog curating authentic content for a diverse Gen Z community.",
  // Placeholder handle until the client confirms the real Instagram URL.
  instagramUrl: "https://www.instagram.com/stayradiant"
};

export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "27826494134";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi Stay Radiant, I would like to make an enquiry."
)}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" }
];

export const missionPillars = [
  {
    title: "Mission",
    icon: Sparkles,
    body:
      "Provide an open and authentic platform where readers are inspired by beauty, self-care, fashion, and lifestyle knowledge."
  },
  {
    title: "Vision",
    icon: Users,
    body: "Create a diverse and beautiful community through a multifaceted lens, locally and globally."
  },
  {
    title: "Purpose",
    icon: HeartHandshake,
    body:
      "Embrace young diverse women fascinated by divine femininity through self-care, self-expression, and empowered community."
  }
];

export const brandValues = [
  { title: "Inclusivity", icon: Users },
  { title: "Authenticity", icon: Star },
  { title: "Empowerment", icon: HeartHandshake },
  { title: "Creativity", icon: Palette },
  { title: "Community", icon: Sparkles }
];

export const services = [
  {
    name: "Creative Content Strategy",
    icon: PenLine,
    description:
      "Editorial planning, SEO topic maps, and campaign ideas that help beauty, wellness, and lifestyle brands speak clearly."
  },
  {
    name: "Brand Collaboration",
    icon: BriefcaseBusiness,
    description:
      "Partnership concepts, sponsored content packages, and creator-led campaigns built for engaged Gen Z audiences."
  },
  {
    name: "Editorial Production",
    icon: Camera,
    description:
      "Flatlays, founder features, trend roundups, and journal-style content designed for web, Pinterest, and social channels."
  },
  {
    name: "SEO Blog Growth",
    icon: Search,
    description:
      "Keyword-led articles, internal linking, and content refreshes that turn the blog into an organic discovery engine."
  },
  {
    name: "Creator Courses",
    icon: GraduationCap,
    description:
      "Practical lessons for emerging bloggers who want to publish consistently, monetise, and build their own audience."
  },
  {
    name: "Merch and Community",
    icon: ShoppingBag,
    description:
      "Future-ready product drops, newsletter launches, and community-led offers that extend the Stay Radiant lifestyle."
  }
];

export const blogCategories = ["All", "Beauty", "Skincare", "Lifestyle", "Wellness", "Fashion"];

export type BlogPost = {
  slug: string;
  category: string;
  categoryPath: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  // Optional 5-7s clip or GIF; drop a file in /public/videos and reference it here to replace the still image with motion.
  video?: string;
  featured?: boolean;
  tags: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "soft-glow-routine",
    category: "Beauty",
    categoryPath: "beauty",
    title: "The Soft Glow Routine for Busy Mornings",
    excerpt:
      "A gentle beauty reset for days when you want skin-first radiance without turning your mirror into a full production set.",
    date: "June 2026",
    readTime: "4 min read",
    image: "/images/skincare.jpeg",
    featured: true,
    tags: ["beauty", "selfcare", "glow"],
    content: [
      "Radiance does not need to be complicated. A strong morning routine starts with hydration, a lightweight serum, and one complexion product that lets your skin stay visible.",
      "For a polished finish, choose one focal point: glossy lips, brushed brows, or a coral cheek. The goal is not to hide the morning. The goal is to move through it with intention.",
      "Keep your everyday products where you can see them. A small tray, a clean towel, and your favourite fragrance can turn a rushed start into a steady ritual."
    ]
  },
  {
    slug: "skincare-shelf-edit",
    category: "Skincare",
    categoryPath: "skincare",
    title: "How to Edit Your Skincare Shelf",
    excerpt:
      "A practical way to simplify products, protect your barrier, and keep only the formulas that earn their place.",
    date: "June 2026",
    readTime: "5 min read",
    image: "/images/skincare 01.jpeg",
    tags: ["skincare", "routine", "barrier"],
    content: [
      "A shelf edit starts with honesty. Pull every product into one place, check what has expired, and separate daily essentials from products you reach for only when your skin is stressed.",
      "Your core routine can be simple: cleanser, moisturiser, sunscreen, and one targeted active. When every product has a role, consistency becomes easier.",
      "Give your skin two quiet weeks before introducing something new. The slower pace helps you notice what actually works."
    ]
  },
  {
    slug: "creative-weekend-johannesburg",
    category: "Lifestyle",
    categoryPath: "lifestyle",
    title: "A Creative Weekend in Johannesburg",
    excerpt:
      "Gallery mornings, slow coffee, market finds, and the kind of reset that makes Monday feel less sharp around the edges.",
    date: "June 2026",
    readTime: "6 min read",
    image: "/images/fashion.jpeg",
    tags: ["lifestyle", "johannesburg", "community"],
    content: [
      "A restorative weekend does not need to leave the city. Start with a gallery or market, then give yourself enough time to wander without turning the day into another checklist.",
      "Bring a friend who notices texture: ceramics, linen, colour, music from a passing car. Creative rest works best when you give the small details permission to matter.",
      "End with a short planning session for the week ahead. Ten minutes is enough to choose your priorities and carry the weekend's softness into Monday."
    ]
  },
  {
    slug: "wellness-without-performance",
    category: "Wellness",
    categoryPath: "wellness",
    title: "Wellness Without the Performance",
    excerpt:
      "A softer look at rituals that support your actual life instead of becoming another standard to chase.",
    date: "June 2026",
    readTime: "4 min read",
    image: "/images/wellness.jpeg",
    tags: ["wellness", "mental-health", "rituals"],
    content: [
      "Wellness becomes powerful when it is honest. Some days the ritual is a workout, and some days it is drinking water, replying to one message, and closing the laptop on time.",
      "Let your routines serve your season. A five-minute stretch, a clean pillowcase, or a phone-free breakfast can be enough to help your body feel safe again.",
      "The point is not to perform balance. The point is to build small systems that bring you back to yourself."
    ]
  },
  {
    slug: "fashion-media-lessons",
    category: "Fashion",
    categoryPath: "fashion",
    title: "What Fashion Media Teaches About Personal Branding",
    excerpt:
      "Three editorial habits emerging creators can use to make their online presence feel sharper, clearer, and more memorable.",
    date: "June 2026",
    readTime: "5 min read",
    image: "/images/fashion 01.jpeg",
    tags: ["fashion", "branding", "creators"],
    content: [
      "Fashion media trains your eye to notice consistency. The strongest personal brands repeat colour, framing, tone, and point of view until people can recognise them before seeing a name.",
      "Start with an editorial promise. What does your audience come to you for, and how should they feel after reading or watching your work?",
      "Then build repeatable formats: a weekly reflection, a product edit, a photo diary, or a short guide. Consistency gives creativity somewhere to land."
    ]
  },
  {
    slug: "blogging-for-passive-income",
    category: "Lifestyle",
    categoryPath: "lifestyle",
    title: "Why Blogging Still Matters for Emerging Creators",
    excerpt:
      "Social platforms are useful, but a dedicated blog gives creators ownership, search visibility, and a stronger path to passive income.",
    date: "June 2026",
    readTime: "7 min read",
    image: "/images/fashion 02.jpeg",
    tags: ["blogging", "income", "creators"],
    content: [
      "A blog gives creators a home base. Social platforms can introduce your voice, but a website lets readers search, save, revisit, and move through your content on your terms.",
      "That ownership matters for monetisation. Affiliate links, ads, email lists, products, and courses all work better when your content has a stable destination.",
      "The most important habit is consistency. Publishing one useful post every week creates a body of work that can keep serving readers long after the upload day has passed."
    ]
  }
];

export const journalEntries = [
  {
    title: "Founder Note",
    body:
      "Stay Radiant began as a response to a real gap: South African creators need beautiful, searchable platforms that do not depend on follower thresholds."
  },
  {
    title: "Audience Lens",
    body:
      "The community is built for Gen Z readers who care about beauty, wellness, self-expression, creativity, social justice, and sustainable choices."
  },
  {
    title: "Growth Focus",
    body:
      "The content engine is designed around SEO, affiliate-ready posts, newsletter capture, and future products such as merch and blogging courses."
  }
];

export const footerGallery = [
  "/images/fashion.jpeg",
  "/images/skincare.jpeg",
  "/images/wellness.jpeg",
  "/images/fashion 01.jpeg",
  "/images/skincare 01.jpeg",
  "/images/wellness 01.jpeg",
  "/images/fashion 02.jpeg",
  "/images/stay-radiant-founder.png"
];

export const collaborations = [
  { name: "Digital Girl Africa", logo: "/images/collab-digital-girl-africa.png" },
  { name: "FOUURA", logo: "/images/collab-fouura.png" },
  { name: "Edladleni Art Gallery", logo: "/images/collab-edladleni.png" },
  { name: "Sisley Paris", logo: "/images/collab-sisley.png" }
];

export const contactDetails: Array<{ label: string; value: string; icon: LucideIcon }> = [
  { label: "Location", value: brand.location, icon: MapPin },
  { label: "Phone", value: brand.phone, icon: MessageCircle },
  { label: "Email", value: brand.email, icon: Mail }
];

export function getPostByRoute(categoryPath: string, slug: string) {
  return blogPosts.find((post) => post.categoryPath === categoryPath && post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, categoryPath?: string) {
  const sameCategory = blogPosts.filter((post) => post.slug !== currentSlug && post.categoryPath === categoryPath);
  const fallback = blogPosts.filter((post) => post.slug !== currentSlug && post.categoryPath !== categoryPath);
  return [...sameCategory, ...fallback].slice(0, 3);
}
