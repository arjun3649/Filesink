/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "us.123rf.com" }],
  },
};

module.exports = nextConfig;
