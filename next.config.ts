import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Next/Turbopack use this project as the root, not a higher-level folder with another lockfile
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
