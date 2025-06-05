module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addGlobalData('timestamp', () => {
    return Date.now();
  });
};