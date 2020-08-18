const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const postTemplate = path.resolve(`src/components/Post/index.tsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: replacePath(node.fields.slug),
      component: postTemplate,
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`)
    actions.createNodeField({
      node,
      name: `slug`,
      value: replacePath(createFilePath({ node, getNode, basePath: `pages` })),
    })
}
