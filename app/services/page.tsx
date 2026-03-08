import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generateMeta } from "@/lib/seo/seo-builder"
import { generateServiceSchema } from "@/lib/seo/structured-data"
import { getAbsoluteUrl, SEO_CONFIG } from "@/lib/seo/seo-config"
import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "landing-pages",
    category: "Conversion",
    title: "Landing Pages",
    description: "High-converting, single-page experiences designed for specific campaigns and maximum ROI.",
    context: "Best for targeted ad campaigns, product launches, or lead generation initiatives requiring high conversion rates.",
    features: [
      "Strategic headline and copy structure",
      "Conversion-optimized UI/UX design",
      "Mobile-first responsive architecture",
      "Lead capture and CRM integration",
      "A/B testing and performance tracking",
      "15-day post-launch support for revisions (standard charges apply after)",
    ],
    image: "/modern-website-design-mockup-on-desktop-and-mobile.jpg",
  },
  {
    id: "ecommerce-pages",
    category: "E-Commerce",
    title: "E-Commerce Pages",
    description: "Scalable online storefronts built to showcase products and streamline the path to purchase.",
    context: "Designed for brands ready to sell directly to consumers with a seamless, high-performance shopping experience.",
    features: [
      "Custom product page layouts",
      "Secure checkout and payment gateway integration",
      "Inventory and order management setup",
      "Mobile-optimized shopping experience",
      "Customer account and loyalty features",
      "15-day post-launch support for revisions (standard charges apply after)",
    ],
    image: "/luxury-e-commerce-storefront.jpg",
  },
  {
    id: "instagram-marketing",
    category: "Social",
    title: "Instagram Growth Marketing",
    description: "Targeted growth strategies to scale your Instagram presence and convert followers into customers.",
    context: "Ideal for brands looking to dominate their niche, build authority, and drive sales through Instagram.",
    features: [
      "Profile optimization and branding",
      "Engagement-driven content strategy",
      "High-impact Reel and Story production",
      "Growth-focused community management",
      "Influencer and partnership coordination",
      "Advanced analytics and scaling insights",
    ],
    image: "/instagram-strategy-analytics-dashboard.jpg",
  },
  {
    id: "website-design",
    category: "Design",
    title: "Website Design",
    description: "Conversion-focused websites that combine premium visual design with measurable performance.",
    context: "Best for brands that need clearer positioning, stronger trust signals, and better lead capture from existing traffic.",
    features: [
      "Information architecture and UX mapping",
      "Responsive design system",
      "CMS implementation and governance",
      "Technical SEO foundations",
      "Speed and accessibility optimization",
      "Conversion tracking setup",
      "15-day post-launch support for revisions (standard charges apply after)",
    ],
    image: "/beautiful-responsive-website-design-on-desktop-and.jpg",
  },
  {
    id: "social-media",
    category: "Social",
    title: "Social Media Management",
    description: "Strategic social programs that strengthen brand presence and create qualified engagement.",
    context: "Ideal when your channels need consistent publishing, stronger storytelling, and clearer performance accountability.",
    features: [
      "Content pillars and monthly calendars",
      "Channel-specific creative production",
      "Community and inbox management",
      "Campaign support and coordination",
      "Audience growth strategy",
      "Performance analytics and insights",
    ],
    image: "/social-media-content-creation-team.jpg",
  },
  {
    id: "paid-ads",
    category: "Performance",
    title: "Paid Ads",
    description: "Full-funnel acquisition campaigns across Google, Meta, and short-form video channels.",
    context: "Built for teams that want predictable pipeline growth while improving CAC and channel efficiency.",
    features: [
      "Audience and intent segmentation",
      "Creative testing framework",
      "Budget allocation and pacing",
      "Landing page optimization",
      "Attribution and conversion tracking",
      "ROAS and CAC optimization",
    ],
    image: "/paid-ads-campaign-google-meta-optimization.jpg",
  },
  {
    id: "email-marketing",
    category: "Lifecycle",
    title: "Email Marketing",
    description: "Lifecycle automation and campaign systems that increase repeat revenue and retention.",
    context: "Useful for businesses with existing leads or customers that are under-monetized after first conversion.",
    features: [
      "Segmentation and lifecycle strategy",
      "Automated flow architecture",
      "Promotional and editorial campaigns",
      "Personalization frameworks",
      "Deliverability monitoring",
      "Revenue reporting dashboards",
    ],
    image: "/marketing-funnel-visualization-with-conversion-opt.jpg",
  },
  {
    id: "seo",
    category: "Organic",
    title: "SEO",
    description: "Long-term organic growth through technical foundations, content strategy, and authority building.",
    context: "Designed for brands that need compounding demand generation through search visibility and topical authority.",
    features: [
      "Keyword and topic mapping",
      "Technical and on-page optimization",
      "Content brief development",
      "Internal linking architecture",
      "Authority and backlink strategy",
      "Ranking and traffic reporting",
    ],
    image: "/growth-metrics-analytics.jpg",
  },
  {
    id: "branding",
    category: "Brand",
    title: "Branding",
    description: "Clear positioning and visual identity systems designed to differentiate your company.",
    context: "Recommended when messaging is inconsistent, category fit is unclear, or market perception needs an upgrade.",
    features: [
      "Market and competitor analysis",
      "Positioning and messaging framework",
      "Visual identity design",
      "Brand voice and narrative",
      "Guideline documentation",
      "Rollout support across channels",
    ],
    image: "/abstract-brand-concept.jpg",
  },
  {
    id: "video-production",
    category: "Creative",
    title: "Video Production",
    description: "Performance-oriented video production for paid media, social, and brand storytelling.",
    context: "Supports awareness and conversion goals with platform-specific creative made for modern attention spans.",
    features: [
      "Concepting and scripting",
      "Production planning",
      "On-site or remote shooting",
      "Edit and cutdown versions",
      "Platform-specific optimization",
      "Creative performance analysis",
    ],
    image: "/promotional-video-production-setup-studio.jpg",
  },
  {
    id: "content-marketing",
    category: "Content",
    title: "Content Marketing",
    description: "Editorial and campaign content programs designed to build authority and generate demand.",
    context: "Works best for brands that want a repeatable publishing engine tied to business goals and search strategy.",
    features: [
      "Content strategy and planning",
      "Long-form and short-form production",
      "SEO-aligned topic clusters",
      "Distribution and repurposing workflows",
      "Lead magnet development",
      "Performance reporting and optimization",
    ],
    image: "/team-collaboration-meeting-professional-environmen.jpg",
  },
  {
    id: "marketing-automation",
    category: "Automation",
    title: "Marketing Automation",
    description: "Scalable automation systems for lead nurturing, handoffs, and lifecycle marketing efficiency.",
    context: "Critical for sales cycles that need better follow-up timing, routing logic, and lifecycle progression.",
    features: [
      "Automation architecture design",
      "CRM and ESP integration",
      "Lead scoring and routing logic",
      "Behavioral trigger workflows",
      "Sales and marketing alignment",
      "Operational dashboard setup",
    ],
    image: "/marketing-funnel-visualization-with-conversion-opt.jpg",
  },
  {
    id: "ecommerce-growth",
    category: "E-Commerce",
    title: "E-Commerce Growth",
    description: "Retention and acquisition systems tailored for online stores and product-led businesses.",
    context: "Focused on increasing first-purchase conversion, repeat orders, and customer lifetime value.",
    features: [
      "Product page conversion optimization",
      "Cart abandonment recovery flows",
      "Catalog and merchandising strategy",
      "Offer and promotion planning",
      "Subscription and repeat purchase strategy",
      "AOV and LTV improvement plans",
    ],
    image: "/fashion-ecommerce-website.png",
  },
  {
    id: "local-seo",
    category: "Local",
    title: "Local SEO & Maps Growth",
    description: "Local search visibility programs for service businesses and multi-location brands.",
    context: "Perfect for location-driven services where map ranking and local trust influence booking volume.",
    features: [
      "Google Business Profile optimization",
      "Local landing page structure",
      "Citation and listing management",
      "Review generation strategy",
      "Geo-targeted keyword mapping",
      "Local ranking performance tracking",
    ],
    image: "/consultation-meeting-planning.jpg",
  },
  {
    id: "analytics-reporting",
    category: "Analytics",
    title: "Analytics & Reporting",
    description: "Measurement systems that connect channel performance to business outcomes and decisions.",
    context: "For teams that need cleaner visibility into what is driving qualified demand and where to reallocate spend.",
    features: [
      "GA4 and tracking implementation",
      "Attribution model setup",
      "Executive dashboard design",
      "KPI framework definition",
      "Weekly and monthly reporting cadence",
      "Insight-led optimization recommendations",
    ],
    image: "/growth-metrics-analytics.jpg",
  },
  {
    id: "reputation-management",
    category: "Trust",
    title: "Online Reputation Management",
    description: "Brand trust programs to monitor, improve, and protect public perception across channels.",
    context: "Useful when brand sentiment, review quality, or public confidence directly impacts conversion rates.",
    features: [
      "Review and sentiment monitoring",
      "Response framework and guidelines",
      "Crisis communication playbooks",
      "Trust asset development",
      "Brand mention tracking",
      "Reputation trend reporting",
    ],
    image: "/professional-team-working-on-laptop-in-modern-offi.jpg",
  },
]

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${SEO_CONFIG.brandName} Services`,
  url: getAbsoluteUrl("/services"),
  description:
    "Explore digital marketing services including website design, social media management, paid ads, SEO, branding, automation, and analytics.",
}

const serviceItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digital Marketing Agency Services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: getAbsoluteUrl(`/services#${service.id}`),
      provider: {
        "@type": "Organization",
        name: SEO_CONFIG.brandName,
        url: getAbsoluteUrl("/"),
      },
    },
  })),
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceItemListSchema),
        }}
      />
      {services.map(service => (
        <script
          key={service.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceSchema(service.title, service.description, `/services#${service.id}`)),
          }}
        />
      ))}
      <section className="border-b border-border/50 bg-background px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <FadeInSection>
            <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              Services Built for <span className="text-accent-beige">Structured Growth</span>
            </h1>
            <p className="mx-auto max-w-3xl text-base md:text-lg text-foreground/70">
              Every service is designed to plug into a centralized system so your brand, acquisition, and retention efforts stay aligned.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-sm md:text-base leading-relaxed text-foreground/65">
              Instead of disconnected tactics, we plan execution around your business model, sales cycle, capacity, and commercial targets so each channel contributes to one shared growth objective.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
            <div className="mb-10 text-center">
              <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">Service Categories</h2>
              <p className="mx-auto max-w-3xl text-base md:text-lg text-foreground/70">Consistent delivery models across strategy, design, content, and performance.</p>
              <p className="mx-auto mt-4 max-w-4xl text-sm md:text-base leading-relaxed text-foreground/65">
                Every engagement includes practical planning, transparent milestone tracking, and measurable reporting so you can see what was executed, why it was prioritized, and how it impacted outcomes.
              </p>
            </div>
          </FadeInSection>

          <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:auto-rows-[23rem]">
            {services.map((service, index) => {
              // Pinterest/Bento span pattern logic
              const patternIndex = index % 8;
              const isLarge = patternIndex === 5; // Extra Large (2x2)
              const isWide = patternIndex === 0 || patternIndex === 7; // Wide (2x1)
              const isTall = patternIndex === 3; // Tall (1x2)
              
              const spanClass = 
                isLarge ? "md:col-span-2 md:row-span-2" : 
                isWide ? "md:col-span-2 md:row-span-1" : 
                isTall ? "md:col-span-1 md:row-span-2" : 
                "md:col-span-1 md:row-span-1";

              return (
                <FadeInSection key={service.id} delay={index * 0.04} className={spanClass}>
                  <article 
                    id={service.id} 
                    className={`group relative flex h-full overflow-hidden rounded-2xl border border-border/50 bg-card/40 backdrop-blur-md transition-all duration-500 hover:border-accent-beige/50 hover:bg-card shadow-sm hover:shadow-lg ${isWide ? "md:flex-row flex-col" : "flex-col"}`}
                  >
                    {/* Image Section */}
                    <div className={`relative overflow-hidden shrink-0 ${
                      isWide ? "md:w-2/5 md:border-r border-b border-border/50 w-full h-48 md:h-full" : 
                      isLarge ? "h-48 md:h-1/2 border-b border-border/50" :
                      isTall ? "h-48 md:h-2/5 border-b border-border/50" :
                      "h-48 md:h-1/3 border-b border-border/50"
                    }`}>
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/20" />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-accent-beige/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-beige border border-accent-beige/20">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className={`flex flex-1 flex-col p-6 md:p-8 ${isWide ? "md:justify-center" : ""}`}>
                      <h3 className={`font-black tracking-tight text-accent-beige mb-3 ${isLarge ? "text-3xl md:text-4xl" : isWide || isTall ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>
                        {service.title}
                      </h3>
                      <p className={`mb-4 leading-relaxed text-foreground/70 ${isLarge || isWide ? "text-sm md:text-base" : "text-xs"}`}>
                        {service.description}
                      </p>
                      
                      {/* Context & Features */}
                      <div className="mb-6 space-y-4">
                        <p className={`text-xs italic text-foreground/50 border-l-2 border-accent-beige/30 pl-3 ${!(isLarge || isWide || isTall) ? "line-clamp-2" : ""}`}>
                          {service.context}
                        </p>
                        <ul className={`grid gap-2 ${isLarge ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                          {service.features.slice(0, isLarge ? 6 : isWide || isTall ? 4 : 3).map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-foreground/60">
                              <span className="h-1 w-1 shrink-0 rounded-full bg-accent-beige" />
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-background px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInSection>
            <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">Need a Tailored Service Mix?</h2>
            <p className="mb-10 text-base md:text-lg text-foreground/70">We’ll map the right service stack based on your goals, current capabilities, and growth stage.</p>
            <p className="mx-auto mb-10 max-w-3xl text-xs md:text-sm leading-relaxed text-foreground/65">
              Our recommendations focus on delivery practicality, investment efficiency, and the fastest path to measurable progress in lead quality, conversion consistency, and retention strength.
            </p>
            <Button asChild size="lg" className="h-auto w-full sm:w-auto rounded-lg bg-white px-10 py-5 text-lg font-bold text-black hover:bg-white/90">
              <Link href="/contact">Schedule Strategy Session</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}

export const metadata: Metadata = generateMeta({
  pageType: "service",
  title: "Services",
  description:
    "Explore Bergs & Mark digital marketing services: website design, social media management, paid ads, SEO, branding, automation, content, analytics, and reputation management.",
  path: "/services",
  keywords: [
    "digital marketing services",
    "website design services",
    "social media marketing services",
    "paid advertising services",
    "search engine optimization services",
    "email marketing services",
  ],
})
