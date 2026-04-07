// Schema.org JSON-LD structured data for SEO

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muneeb Ur Rehman",
  url: "https://muneeb.design",
  image: "https://muneeb.design/assets/avatar.png",
  description: "UI/UX Designer and Product Design Expert",
  jobTitle: "Product Designer",
  sameAs: [
    "https://twitter.com/muneebdesigner",
    "https://instagram.com/muneebdesigner",
    "https://linkedin.com/in/muneebdesigner",
  ],
  knowsAbout: [
    "UI Design",
    "UX Design",
    "Product Design",
    "Web Design",
    "Design Systems",
    "Figma",
    "User Research",
    "Prototyping",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Muneeb Ur Rehman Design",
  url: "https://muneeb.design",
  logo: "https://muneeb.design/assets/logo.png",
  description: "Professional UI/UX Design Services",
  sameAs: [
    "https://twitter.com/muneebdesigner",
    "https://instagram.com/muneebdesigner",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Muneeb Ur Rehman - Design Studio",
  image: "https://muneeb.design/assets/avatar.png",
  description: "Professional UI/UX Design Services",
  url: "https://muneeb.design",
  telephone: "+92-300-0000000",
  areaServed: ["PK", "US", "GB", "CA"],
  priceRange: "$$",
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://muneeb.design",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Portfolio",
      item: "https://muneeb.design#portfolio",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "About",
      item: "https://muneeb.design#about",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: "https://muneeb.design#contact",
    },
  ],
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UI/UX Design Service",
  description:
    "Professional UI/UX design services including product design, design systems, and web design",
  provider: {
    "@type": "Person",
    name: "Muneeb Ur Rehman",
    url: "https://muneeb.design",
  },
  areaServed: ["PK", "US", "GB", "CA"],
};
