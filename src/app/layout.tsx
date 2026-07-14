import type { Metadata } from "next";
import { Manrope, Tektur } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://smobilemechanic.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/logo-mark.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  title: {
    default: "Silverius Mobile Mechanic | Mobile Auto Repair Indianapolis, IN",
    template: "%s | Silverius Mobile Mechanic",
  },
  description:
    "Indianapolis #1 mobile mechanic. We come to your home or office for oil changes, brake repair, engine diagnostics, tune-ups & more. ASE-quality service. Call (317) 662-2514.",
  keywords: [
    "mobile mechanic Indianapolis",
    "mobile auto repair Indianapolis",
    "mechanic that comes to you Indianapolis",
    "on-site car repair Indianapolis IN",
    "mobile oil change Indianapolis",
    "mobile brake repair Indianapolis",
    "car diagnostics at home Indianapolis",
    "emergency mobile mechanic Indiana",
    "mobile mechanic near me",
    "Indianapolis mobile car service",
    "Carmel mobile mechanic",
    "Fishers mobile auto repair",
    "Greenwood mobile mechanic",
    "mobile tune up Indianapolis",
    "mobile transmission repair Indianapolis",
    "pre purchase inspection Indianapolis",
  ],
  authors: [{ name: "Silverius Mobile Mechanic LLC" }],
  creator: "Silverius Mobile Mechanic LLC",
  publisher: "Silverius Mobile Mechanic LLC",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Silverius Mobile Mechanic",
    title: "Silverius Mobile Mechanic | Mobile Auto Repair Indianapolis, IN",
    description:
      "Indianapolis trusted mobile mechanic. Professional auto repair at your location — oil changes, brakes, diagnostics, tune-ups & more. Call (317) 662-2514.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Silverius Mobile Mechanic — Professional Mobile Auto Repair in Indianapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silverius Mobile Mechanic | Mobile Auto Repair Indianapolis",
    description:
      "We come to you! Professional mobile auto repair in Indianapolis & surrounding areas. Call (317) 662-2514.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Automotive",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${SITE_URL}/#business`,
  name: "Silverius Mobile Mechanic",
  alternateName: "S Mobile Mechanic",
  description:
    "Professional mobile mechanic services in Indianapolis. We come to your home, office, or roadside for oil changes, brake repair, engine diagnostics, tune-ups, and more.",
  url: SITE_URL,
  telephone: "+13176622514",
  email: "contact@smobilemechanic.com",
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.svg`,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Debit Card, Zelle, Venmo, CashApp",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indianapolis",
    addressRegion: "IN",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.7684,
    longitude: -86.1581,
  },
  areaServed: [
    { "@type": "City", name: "Indianapolis", "@id": "https://www.wikidata.org/wiki/Q6346" },
    { "@type": "City", name: "Carmel" },
    { "@type": "City", name: "Fishers" },
    { "@type": "City", name: "Greenwood" },
    { "@type": "City", name: "Noblesville" },
    { "@type": "City", name: "Lawrence" },
    { "@type": "City", name: "Avon" },
    { "@type": "City", name: "Brownsburg" },
    { "@type": "City", name: "Plainfield" },
    { "@type": "City", name: "Zionsville" },
    { "@type": "City", name: "Westfield" },
    { "@type": "City", name: "Beech Grove" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Mechanic Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oil Change" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Tune-Up" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Radiator Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto AC Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Diagnostics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Purchase Inspection" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Clutch & Transmission" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fuel Pump Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Belt Replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "VW Repair" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Silverius Mobile Mechanic",
  description: "Professional mobile auto repair services in Indianapolis, IN",
  publisher: { "@id": `${SITE_URL}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/services`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${tektur.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <PageTransition>{children}</PageTransition>
        <Script
          id="housecall-pro-chat-bubble"
          src="https://chat.housecallpro.com/proChat.js"
          strategy="lazyOnload"
          data-color="#ff0000"
          data-organization="b029e138-644e-40c4-8988-f9cbb88dc0de"
        />
      </body>
    </html>
  );
}
