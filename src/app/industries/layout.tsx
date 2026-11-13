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
<<<<<<< HEAD
    canonical: "https://www.durgatransport.com/industries",
=======
    canonical: "https://www.durgatransportservices.in/industries",
>>>>>>> 1ed6b99042eaf238a271fbddc642a84066cb9e78
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
