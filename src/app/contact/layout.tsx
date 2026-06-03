import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Durga Transport Services India Pvt Ltd for 24/7 logistics support, corporate bookings, and pan-India freight movement inquiries.",
  keywords: [
    "durga transport contact number",
    "logistics support india",
    "transport booking phone number",
    "freight dispatch contact",
    "transport company customer care",
    "hire transport company",
    "transport booking in junagadh",
    "contact logistics in rajkot",
    "transport support in ahmedabad",
    "freight booking kanpur",
    "transport contact number lucknow",
    "truck booking phone delhi"
  ],
  alternates: {
    canonical: "https://www.durgatransportservices.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
