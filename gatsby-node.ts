// This file is used to generate the blog post pages based on the corresponding template and markdown files.

import path from 'path';

exports.createPages = async ({ graphql, actions }: any) => {
  const { data }: any = await graphql(`
    query BlogPosts {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(blog-posts)/"}}
      ) {
        nodes {
          frontmatter {
            link
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.nodes.forEach((node: {frontmatter: {link: string}}) => {
    actions.createPage({
      path: '/blog/' + node.frontmatter.link,
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: { slug: node.frontmatter.link }
    });
  });
};