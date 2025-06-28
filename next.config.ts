import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
