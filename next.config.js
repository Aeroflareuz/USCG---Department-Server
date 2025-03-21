/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'uscg-dashboard.same-app.com'],
  },
};

module.exports = nextConfig;
