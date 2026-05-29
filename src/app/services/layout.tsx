import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Transport & Logistics Services",
  description: "Explore our pan-India logistics services including truck transportation, ODC, trailer movement, tempo delivery, and comprehensive supply chain solutions.",
  keywords: [
    "logistics services india",
    "truck transportation services",
    "odc transport solutions",
    "container hauling india",
    "tempo delivery services",
    "freight management",
    "commercial transport services",
    "transport services in junagadh",
    "logistics services rajkot",
    "truck transportation ahmedabad",
    "odc transport kanpur",
    "container hauling lucknow",
    "commercial transport delhi"
  ],
  alternates: {
    canonical: "https://www.durgatransport.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
