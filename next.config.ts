import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dqbpjov4y/**",
      },
      {
        protocol: "https",
        hostname: "www.mktflex.com.ar",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

export default nextConfig;
