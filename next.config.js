/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TEST_TOKEN: process.env.TEST_TOKEN,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
