/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true, // Inline critical CSS to reduce FOUC
  },
};

export default nextConfig;