// app/components/Seo.tsx
"use client";

import Script from "next/script";

interface SeoProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
}

export default function Seo({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
}: SeoProps) {
  const siteName = "GoAutomateMD";
  const logoUrl = "https://jagbasrai.vercel.app/logo.png"; // replace with your actual logo URL
  const author = "GoAutomateMD";

  // JSON-LD for Organization
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: "https://jagbasrai.vercel.app/",
    logo: logoUrl,
    sameAs: [
      "https://www.linkedin.com/company/goautomate-ai/",
      "https://www.youtube.com/channel/UCitUEN9IyvUfndTOYjpV5Jw",
    ],
  };

  // JSON-LD for WebSite
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: "https://jagbasrai.vercel.app/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://jagbasrai.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // JSON-LD for Article
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: imageUrl,
  };

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* JSON-LD Structured Data */}
      <Script
        id="organization-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <Script
        id="website-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <Script
        id="article-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </>
  );
}
