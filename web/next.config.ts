/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: "https", hostname: "image.thum.io" },
      { protocol: "https", hostname: "www.google.com" },
      { protocol: "https", hostname: "play-lh.googleusercontent.com" },
    ],
  },
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      { source: "/blog", destination: "/knowledge/guides", permanent: true },
      { source: "/blog/:slug", destination: "/knowledge/guides/:slug", permanent: true },
      { source: "/resources", destination: "/knowledge/downloads", permanent: true },
      { source: "/locations", destination: "/service-areas", permanent: true },
      { source: "/locations/:slug", destination: "/service-areas/:slug", permanent: true },
      { source: "/portfolio/layanproducts", destination: "/portfolio/layan-products", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
