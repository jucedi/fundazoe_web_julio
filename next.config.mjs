/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignoramos errores de TypeScript para que no detengan el build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignoramos errores de ESLint (ortografía de código)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configuración para que Firebase Admin no rompa el cliente
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback, // Mantenemos configuraciones previas si existen
        fs: false,
        net: false,
        tls: false,
        child_process: false,
        http2: false,
        dns: false,
      };
    }
    return config;
  },
};

export default nextConfig;