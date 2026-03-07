import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@repo/ui", "@repo/modules", "@repo/content-types"],
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
