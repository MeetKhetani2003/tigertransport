import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Transport Quote",
  description: "Request a custom freight and logistics pricing proposal from Durga Transport Services India Pvt Ltd for transparent and competitive transport rates.",
  keywords: [
    "transport quote india",
    "freight rates",
    "truck booking price",
    "logistics cost estimator",
    "transport price calculation",
    "shipping quote india",
    "cargo rates calculation",
    "transport quote junagadh",
    "freight rates rajkot",
    "truck booking price ahmedabad",
    "logistics cost kanpur",
    "transport price lucknow",
    "shipping quote delhi"
  ],
  alternates: {
    canonical: "https://www.durgatransport.com/quote",
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
