const path = require(`path`);

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*";
    createPage(page)
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    // Exclude Sign-In Widget from compilation path
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /okta-sign-in/,
            use: loaders.null(),
          }
        ],
      },
    })
  }
};