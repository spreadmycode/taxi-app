/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    site: {
      name: "Claiming Made Easy",
      url:
        process.env.NODE_ENV === "development"
          ? "https://taxiapplication.vercel.app"
          : "https://taxiapplication.vercel.app",
      title: "Claiming Made Easy",
      description:
        "ClaimingMadeEasy is a trading style of Approved Claims Group Ltd, a HMRC registered Tax Agent. We will handle and process your claim",
      socialPreview: "/images/logo.png",
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
