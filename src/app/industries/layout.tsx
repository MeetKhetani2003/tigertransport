import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Explore the diverse industries Durga Transport Services India Pvt Ltd serves, including manufacturing, automobile, construction, retail, and pharmaceuticals.",
  keywords: [
    "transport for manufacturing",
    "automobile logistics",
    "construction transport",
    "fmcg logistics india",
    "pharmaceutical transport",
    "heavy machinery logistics",
    "industry logistics india",
    "enterprise supply chain"
  ],
  alternates: {
    canonical: "https://www.durgatransport.com/industries",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
