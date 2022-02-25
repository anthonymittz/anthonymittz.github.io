const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProduction ? '/' : '',
  reactStrictMode: true,
  basePath: ''
}
