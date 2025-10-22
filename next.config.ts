import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  turbopack: {
    root: __dirname, // tells Next to use this folder as root
  },
};


export default nextConfig;
