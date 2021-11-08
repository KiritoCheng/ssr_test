const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "pages")],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config;
  },
};
