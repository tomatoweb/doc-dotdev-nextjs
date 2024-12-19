/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['doc.dotdev.be'],
    },
  },
};

export default nextConfig;
