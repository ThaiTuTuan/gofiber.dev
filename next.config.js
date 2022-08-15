/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "khonggianmang.vn",
      "gofiber.b-cdn.net",
      "gofiber.dev",
    ],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },

  env: {
    api_wp: "https://admin.gofiber.dev/wp-json/wp/v2",
  },
};

module.exports = nextConfig;
