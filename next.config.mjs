/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: new URL(process.env.NEXT_PUBLIC_API_BASE_URL).hostname,
          port: new URL(process.env.NEXT_PUBLIC_API_BASE_URL).port,
          pathname: '/uploads/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  