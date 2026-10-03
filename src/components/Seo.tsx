import { Helmet } from 'react-helmet-async';
import { siteInfo } from '@/data/siteInfo';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function Seo({ title, description, path, image }: SeoProps) {
  const url = `https://manhhattanstudio.in${path}`;
  const ogImage = image || 'https://bolt.new/static/og_default.png';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesigner',
    name: siteInfo.name,
    description:
      'Luxury residential interior design studio in Delhi NCR & Gurugram specialising in turnkey interiors and modern home styling.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      addressCountry: 'IN',
    },
    telephone: siteInfo.phone,
    email: siteInfo.email,
    url: 'https://manhattanstudio.in',
    sameAs: [siteInfo.instagram],
    areaServed: 'Delhi NCR, Gurugram',
    foundingDate: String(siteInfo.founded),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
