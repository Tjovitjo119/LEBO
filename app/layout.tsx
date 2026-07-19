import type { Metadata } from "next";
import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stayradiant.com"),
  title: {
    default: "Home - Stay Radiant",
    template: "%s - Stay Radiant"
  },
  description:
    "Stay Radiant is a South African beauty, wellness, fashion, and lifestyle blog for a diverse Gen Z community.",
  openGraph: {
    title: "Stay Radiant",
    description:
      "Beauty, self-care, fashion, wellness, and creator-led lifestyle content from Johannesburg.",
    images: ["/images/homepage.jpeg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
