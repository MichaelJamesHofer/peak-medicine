import fs from "node:fs";

const repoName = "peak-medicine";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const hasCustomDomain = fs.existsSync("./CNAME");
const shouldUseBasePath = isGithubPages && !hasCustomDomain;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: shouldUseBasePath ? `/${repoName}` : undefined,
  assetPrefix: shouldUseBasePath ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
