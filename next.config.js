/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const Dotenv = require("dotenv-webpack");

module.exports = {
  // Other configuration options
  webpack: (config) => {
    config.plugins.push(new Dotenv());
    return config;
  },
};


module.exports = nextConfig
