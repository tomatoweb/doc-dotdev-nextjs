/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3004', 'doc.dotdev.be'],
    },
  },
};

export default nextConfig;
