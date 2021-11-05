const path = require("path");

console.log(path.join(__dirname, "pages"));
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "pages")],
  },
};
