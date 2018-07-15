exports.config = {
  namespace: "code-flask",
  globalStyle: "src/global/styles.css",
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: false
    }
  ],
  enableCache: false
};
