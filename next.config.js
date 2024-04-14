/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "dl.fujifilm-x.com",
      },
    ],
  },
};

module.exports = nextConfig;