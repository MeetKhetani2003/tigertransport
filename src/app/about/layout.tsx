import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Durga Transport Services India Pvt Ltd, a leading logistics company with over 25 years of experience in enterprise supply chain solutions.",
  keywords: [
    "top logistics company india",
    "durga transport history",
    "transport company profile",
    "enterprise logistics india",
    "trusted freight forwarder",
    "transport industry leaders",
    "supply chain management experts",
    "logistics company in junagadh",
    "transport company in rajkot",
    "freight forwarder in ahmedabad",
    "transport services kanpur",
    "trucking services lucknow",
    "transport operators in delhi"
  ],
  alternates: {
    canonical: "https://www.durgatransportservices.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
