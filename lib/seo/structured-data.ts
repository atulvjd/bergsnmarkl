import { SEO_CONFIG, getAbsoluteUrl } from "./seo-config";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SEO_CONFIG.brandName,
    alternateName: SEO_CONFIG.alternateNames,
    url: SEO_CONFIG.siteUrl,
    logo: SEO_CONFIG.logoUrl,
    sameAs: SEO_CONFIG.socialLinks,
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": getAbsoluteUrl("/"),
    name: SEO_CONFIG.brandName,
    image: getAbsoluteUrl(SEO_CONFIG.defaultOgImage),
    telephone: SEO_CONFIG.contactPhone,
    email: SEO_CONFIG.contactEmail,
    url: SEO_CONFIG.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: SEO_CONFIG.location,
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716, // Bengaluru approx
      longitude: 77.5946,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: SEO_CONFIG.contactPhone,
      email: SEO_CONFIG.contactEmail,
    },
    sameAs: SEO_CONFIG.socialLinks,
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_CONFIG.brandName,
    url: SEO_CONFIG.siteUrl,
    inLanguage: "en-US",
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  url: string;
}

export function generateArticleSchema({
  headline,
  description,
  image = SEO_CONFIG.defaultOgImage,
  datePublished,
  dateModified,
  authorName = SEO_CONFIG.brandName,
  url,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getAbsoluteUrl(url),
    },
    headline,
    description,
    image: getAbsoluteUrl(image),
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: SEO_CONFIG.brandName,
      logo: {
        "@type": "ImageObject",
        url: SEO_CONFIG.logoUrl,
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
  };
}

export function generateServiceSchema(serviceName: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "LocalBusiness",
      name: SEO_CONFIG.brandName,
    },
    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },
    description,
    url: getAbsoluteUrl(url),
  };
}
