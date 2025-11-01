import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "hasib-backend.onrender.com",
                port: "", // leave empty for default 443
                pathname: "/**", // allow all paths
            },
        ],
    },
    /* other config options here */
};

export default nextConfig;
