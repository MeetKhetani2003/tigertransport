import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Capacity Transport Fleet",
  description: "Explore our pan-India active fleet including open trucks, closed body trucks, trailers, containers, and ODC vehicles designed for secure enterprise logistics.",
  keywords: [
    "transport fleet india",
    "container trucks for rent",
    "odc trailer transport",
    "closed body truck booking",
    "open truck hire",
    "heavy load carriers",
    "logistics fleet services",
    "truck hire in junagadh",
    "container transport in rajkot",
    "trailer transport ahmedabad",
    "closed body truck kanpur",
    "open truck lucknow",
    "odc vehicle delhi"
  ],
  alternates: {
    canonical: "https://www.durgatransportservices.in/fleet",
  },
};

export default function FleetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
