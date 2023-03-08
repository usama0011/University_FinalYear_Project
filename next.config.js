/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-**",
      },
      {
        protocol: "https",
        hostname: "png.pngtree.com",
        port: "",
        pathname: "/png-vector/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/free-photo/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
        pathname: "/dms/image/**",
      },
      {
        protocol: "https",
        hostname: "assets.website-files.com",
        port: "",
        pathname: "/628803debd8bd083a9354388/**",
      },
    ],
  },
  env: {
    NEXTAUTH_SECRET: "codingwithusamaahmad",
    NEXTAUTH_URL: "http://localhost:3000/api/auth",
    JWT_SECRET: "kjadosifka9eur9ieawrwei9",
  },
};

module.exports = nextConfig;
