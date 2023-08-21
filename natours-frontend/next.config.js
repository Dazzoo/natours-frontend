/** @type {import('next').NextConfig} */

const url = new URL(process.env.API_BASE_URL);
const host = url.hostname;

const nextConfig = {
  images: {
    // here you can add the url's that you are planning
    // to use inside your next/image.
    domains: [host],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

module.exports = nextConfig;
