const TOP_CITIES = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", 
  "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow",
  "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", 
  "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana"
];

const CORE_SERVICES = [
  "Transport Services", "Logistics Company", "Freight Forwarder", 
  "Truck Booking", "Heavy Machinery Transport", "Container Transport"
];

/**
 * Automatically generates a massive, highly-targeted list of local SEO keywords
 * based on current services, cities, and time contexts to ensure the site
 * always has relevant search phrases.
 */
export function generateDynamicKeywords(baseKeywords: string[] = []): string[] {
  const currentYear = new Date().getFullYear();
  
  const cityKeywords = TOP_CITIES.flatMap(city => [
    `best transport company in ${city}`,
    `logistics services ${city}`,
    `truck booking ${city}`,
    `freight forwarder ${city}`,
    `${city} to all india transport`
  ]);

  const timeKeywords = [
    `best logistics company ${currentYear}`,
    `top transport services ${currentYear}`
  ];

  // Randomize or select a subset if we don't want 150+ keywords, 
  // but for meta tags, a broad array is perfectly fine. 
  // Search engines look at meta keywords less nowadays, but they DO look at content.
  // We provide a rich array for Next.js metadata.
  
  return Array.from(new Set([
    ...baseKeywords,
    ...CORE_SERVICES,
    ...timeKeywords,
    ...cityKeywords,
    "pan india transport",
    "enterprise logistics india",
    "b2b transport solutions",
    "supply chain management"
  ]));
}

/**
 * Generates specific SEO keywords for a specific dynamic service slug.
 */
export function generateServiceSpecificKeywords(serviceTitle: string): string[] {
  const currentYear = new Date().getFullYear();
  const lowerTitle = serviceTitle.toLowerCase();
  
  const cityKeywords = TOP_CITIES.map(city => `${lowerTitle} in ${city}`);
  
  return Array.from(new Set([
    `${lowerTitle} in india`,
    `best ${lowerTitle} company`,
    `${lowerTitle} transport services`,
    `hire ${lowerTitle}`,
    `pan india ${lowerTitle}`,
    `top ${lowerTitle} ${currentYear}`,
    ...cityKeywords,
    "logistics",
    "transport"
  ]));
}
