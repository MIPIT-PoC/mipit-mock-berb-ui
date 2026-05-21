/**
 * Next.js config — BRE_B mock UI.
 * basePath se setea via NEXT_PUBLIC_BASE_PATH (build arg).
 * - Local dev: vacío → root.
 * - VM1 detrás de nginx 443: basePath="/mock-breb".
 */
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
};

export default config;
