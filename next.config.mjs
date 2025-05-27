/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração específica para Netlify
  output: process.env.NETLIFY === 'true' ? 'export' : undefined,
  trailingSlash: true,
  
  // Configurações de imagem para export estático
  images: {
    unoptimized: true,
    domains: ['localhost', 'rawlight.netlify.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Desabilitar otimizações que não funcionam com export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Configuração para export estático
  distDir: process.env.NETLIFY === 'true' ? 'out' : '.next',
  
  // Configurações de segurança
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
}

export default nextConfig;
