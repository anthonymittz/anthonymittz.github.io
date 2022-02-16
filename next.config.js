const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProduction ? '/' : '',
  // basePath: '',
  reactStrictMode: true,
}
