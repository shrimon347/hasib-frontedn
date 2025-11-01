/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "hasib-backend.onrender.com",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
