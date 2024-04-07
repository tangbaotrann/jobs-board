/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        pathname: "http://localhost",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
};

export default nextConfig;
