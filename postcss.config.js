
module.exports = (ctx) => ({
  parser: ctx.parser ? "sugarss" : false,
  map: ctx.env === "development" ? ctx.map : false,
  plugins:
    process.env.NODE_ENV === "production"
  ? {
      "postcss-flexbugs-fixes": {},
      "postcss-normalize": {
        allowDuplicates: false,
        forceImport: "normalize/opinionated"
      },
      "postcss-preset-env": {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
      cssnano: {
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: true,
                },
                reduceIdents: true,
                mergeIdents: true,
              },
            ]
      }
    }
    : {
      // No transformations in development
    },
})
