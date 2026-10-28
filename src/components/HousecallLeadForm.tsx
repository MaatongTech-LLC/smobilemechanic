"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const HCP_TOKEN = "da2beb4435af48a5bc1a9b21beb8ff80";
const HCP_ORG = "Silverius-Mobile-Mechanic-LLC";
const HCP_ORIGIN = "https://book.housecallpro.com";

export default function HousecallLeadForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // HCP's script.js only attaches its resize listener on window "load", which has
  // already fired by the time Next.js loads it, so the iframe never grows to fit
  // the form. Handle the iframe's messages ourselves instead.
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== HCP_ORIGIN || !iframeRef.current) return;
      const data = event.data;
      if (data?.type === "hcp:lead-capture-size") {
        iframeRef.current.style.height = data.value;
      } else if (data?.type === "hcp:redirect" && typeof data.url === "string") {
        window.location.href = data.url;
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <Script
        id="housecall-pro-online-booking"
        src={`https://online-booking.housecallpro.com/script.js?token=${HCP_TOKEN}&orgName=${HCP_ORG}`}
        strategy="afterInteractive"
      />
      <iframe
        ref={iframeRef}
        id="hcp-lead-iframe"
        title="Request a quote from Silverius Mobile Mechanic"
        src={`${HCP_ORIGIN}/lead-form/${HCP_ORG}/${HCP_TOKEN}`}
        className="w-full"
        style={{ border: "none", height: 700 }}
      />
    </>
  );
}
