import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gzip/Brotli compression for static assets
  compress: true,

  // Strict mode for better React warnings
  reactStrictMode: true,

  // Trailing slash off for consistent URLs
  trailingSlash: false,

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Serve AVIF first, fall back to WebP — smaller bytes, faster LCP
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 1 year on the edge
    minimumCacheTTL: 31536000,
    // Common breakpoint widths for responsive images
    deviceSizes: [360, 420, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Tree-shake large icon libraries and lodash — cuts bundle size (faster FCP/LCP)
  experimental: {
    optimizePackageImports: ["lucide-react", "@base-ui/react"],
  },

  // Longer HTTP cache headers for static asset paths
  async headers() {
    return [
      {
        source: "/img/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
