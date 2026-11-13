import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pan India Transport Network & Branches",
  description: "View Durga Transport Services India Pvt Ltd's operational hubs across 500+ Indian cities, providing robust and seamless national cargo movement.",
  keywords: [
    "transport branches india",
    "durga transport locations",
    "pan india logistics network",
    "logistics hubs india",
    "transport offices india",
    "national freight network",
    "transport company branches",
    "transport office in junagadh",
    "logistics branch in rajkot",
    "freight network ahmedabad",
    "transport branches kanpur",
    "logistics hubs lucknow",
    "transport offices delhi"
  ],
  alternates: {
<<<<<<< HEAD
    canonical: "https://www.durgatransport.com/locations",
=======
    canonical: "https://www.durgatransportservices.in/locations",
>>>>>>> 1ed6b99042eaf238a271fbddc642a84066cb9e78
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
