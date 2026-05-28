import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // generates pure static HTML in /out
  trailingSlash: true,    // /slug/ → out/slug/index.html (matches our URL scheme)
  images: {
    unoptimized: true,    // required for static export (no Next.js image server)
  },
};

export default nextConfig;
