/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    site: {
      name: "Claiming Made Easy",
      url:
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://work-from-home.vercel.app",
      title: "Claiming Made Easy",
      description: "Claiming Made Easy",
      socialPreview: "/logo.png",
    },
  },
  images: {
    domains: [
      "taxiapplication.vercel.app",
      "work-from-home.vercel.app",
      "www.claimingmadeeasy.com",
    ],
  },
};

module.exports = nextConfig;
