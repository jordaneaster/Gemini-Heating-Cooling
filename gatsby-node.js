const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    {
        allContentfulService {
          nodes {
            slug
          }
        }
      }
      
    `)
    result.data.allContentfulService.nodes.forEach((node) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/Service.js`),
            context: {
                slug: node.slug,
            },
        })
    })
}