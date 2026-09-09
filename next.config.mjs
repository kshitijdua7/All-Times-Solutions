import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Keeps Next from walking up past this folder looking for a workspace root.
  outputFileTracingRoot: here,

  // Every page on this site is static, so the whole thing can be exported to
  // plain HTML/CSS/JS and dropped on any host — including cPanel or an S3
  // bucket. Uncomment the two lines below and run `npm run build` to get an
  // `out/` folder you can upload directly.
  //
  // output: 'export',
  // images: { unoptimized: true },
};

export default nextConfig;
