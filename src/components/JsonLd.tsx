import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown>;
  id: string;
}

export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
