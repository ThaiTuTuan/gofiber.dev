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
    allowFutureImage: true,
  },
  env: {
    api_wp: "https://gofiber.dev/wp-json/wp/v2",
  },
};

module.exports = nextConfig;
