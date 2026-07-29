import type { NextConfig } from "next";

const isHostingerBuild = process.env.HOSTINGER_BUILD === "1";
const deployBasePath = process.env.NEXT_PUBLIC_DEPLOY_BASE_PATH || "/loja";

const nextConfig: NextConfig = {
  ...(isHostingerBuild ? { output: "export" as const, basePath: deployBasePath, trailingSlash: true } : {}),
};

export default nextConfig;
