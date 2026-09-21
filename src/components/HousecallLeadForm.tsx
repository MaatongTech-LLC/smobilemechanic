"use client";

import Script from "next/script";

const HCP_TOKEN = "da2beb4435af48a5bc1a9b21beb8ff80";
const HCP_ORG = "Silverius-Mobile-Mechanic-LLC";

export default function HousecallLeadForm() {
  return (
    <>
      <Script
        id="housecall-pro-online-booking"
        src={`https://online-booking.housecallpro.com/script.js?token=${HCP_TOKEN}&orgName=${HCP_ORG}`}
        strategy="afterInteractive"
      />
      <iframe
        id="hcp-lead-iframe"
        title="Request a quote from Silverius Mobile Mechanic"
        src={`https://book.housecallpro.com/lead-form/${HCP_ORG}/${HCP_TOKEN}`}
        className="w-full"
        style={{ border: "none", height: 700 }}
      />
    </>
  );
}
