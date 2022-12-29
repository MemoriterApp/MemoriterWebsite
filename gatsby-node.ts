import path from 'path';

// This file is used to generate the blog post pages based on the corresponding template and markdown files.

exports.createPages = async ({ graphql, actions }: any) => {
  // This part queries for the blog post markdown files (using GraphQL)
  const { data }: any = await graphql(`
    query BlogPosts {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(blog-posts)/" } }) {
        nodes {
          frontmatter {
            link
          }
        }
      }
    }
  `);
  // the following part generates the pages out of them
  data.allMarkdownRemark.nodes.forEach((node: { frontmatter: { link: string } }) => {
    actions.createPage({
      path: '/blog/' + node.frontmatter.link,
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: { slug: node.frontmatter.link },
    });
  });
};
