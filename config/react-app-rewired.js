module.exports = {
  webpack: webpackConfig => {
    const loader = webpackConfig.module.rules[2].oneOf[1];

    loader.rules = [
      {
        loader: loader.loader,
        options: {
          presets: [...loader.options.presets]
        }
      },
      {
        loader: 'linaria/loader',
        options: {
          cacheDirectory: 'src/.linaria_cache',
          sourceMap: process.env.NODE_ENV !== 'production',
          babelOptions: {
            presets: loader.options.presets
          }
        }
      }
    ];

    return webpackConfig;
  }
};
