module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/*.html')
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/fonts')

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  }
}
