import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Mobile Mechanic — Schedule Service Online",
  description:
    "Book your mobile auto repair appointment in Indianapolis online. Choose your service, pick a time, and we come to you. Fast, easy scheduling in under 2 minutes.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book Your Service | Silverius Mobile Mechanic",
    description:
      "Schedule mobile auto repair in Indianapolis in under 2 minutes. We come to your home or office.",
    url: "/book",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
