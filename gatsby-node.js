const path = require('path');

exports.onCreateWebpackConfig = ({ actions, loaders, stage, getConfig }) => {
  const config = getConfig();

  if (config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
  } else {
    config.resolve = {
      alias: { '@': path.resolve(__dirname, 'src') },
    };
  }

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config);

  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
