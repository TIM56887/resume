/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 配置 Next.js 輸出靜態網站
    trailingSlash: true, // 確保所有路徑都以 `/` 結尾
    reactStrictMode: true,
    basePath: '/resume',
  };
  
  export default nextConfig;
  