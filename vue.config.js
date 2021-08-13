
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_flex.scss";
          @import "@/styles/_variables.scss";
          @import "@/styles/_base.scss";
        `
      }
    }
  }
};