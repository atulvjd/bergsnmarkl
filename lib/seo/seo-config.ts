export const SEO_CONFIG = {
  brandName: "Bergs & Mark",
  alternateNames: ["Bergs & Mark", "Bergs and Mark", "bergsandmark", "berg sand mark"],
  siteUrl: "https://www.bergsandmark.in",
  logoUrl: "https://www.bergsandmark.in/apple-icon.png",
  location: "Bengaluru",
  contactEmail: "bergsnmark@gmail.com",
  contactPhone: "+91 93017 03738",
  socialLinks: [
    "https://www.instagram.com/bergsnmark/",
    "https://www.linkedin.com/company/bergsnmark/",
    "https://facebook.com",
  ],
  defaultOgImage: "/hero-digital-marketing-agency.jpg",
  coreKeywords: [
    "marketing agency bengaluru",
    "marketing agency bangalore",
    "growth marketing agency india",
    "bergs and mark",
    "bergs & mark",
    "bergsandmark",
    "berg sand mark",
    "marketing architecture agency",
    "growth systems agency",
    "digital growth infrastructure",
    "SEO infrastructure",
  ],
};

export function getAbsoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SEO_CONFIG.siteUrl}${normalizedPath}`;
}
