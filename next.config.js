/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    site: {
      name: "ClaimingMadeEasy™ - Refund Tax Claim",
      url:
        process.env.NODE_ENV === "development"
          ? "https://claimingmadeeasy.vercel.app"
          : "https://claimingmadeeasy.vercel.app",
      title: "Claiming Made Easy",
      description:
        "ClaimingMadeEasy is a trading style of Approved Claims Group Ltd, a HMRC registered Tax Agent. We will handle and process your claim",
      socialPreview: "/images/logo.png",
    },
  },
  images: {
    domains: [
      "claimingmadeeasy.vercel.app",
      "work-from-home.vercel.app",
      "www.claimingmadeeasy.com",
      "countryflagsapi.com",
      "www.gravatar.com",
    ],
  },
};

module.exports = nextConfig;
