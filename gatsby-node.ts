const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            type
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    if (node.frontmatter.type === "project") {
      actions.createPage({
        path: "/projects/" + node.frontmatter.slug,
        component: path.resolve("./src/templates/projectDetails.tsx"),
        context: { slug: node.frontmatter.slug },
      });
    }
  });
};
