import React, { FC } from 'react';
import { HeadFC, graphql } from 'gatsby';
import WebsiteHead from '../components/layout/website-head';
import BlogPostLayout from '../components/blog/blog-post-layout';

interface Props {
  data: {allMarkdownRemark: {nodes: {frontmatter: {
    link: string,
    topic: string,
    thumb: object,
    date: string,
    author: string,
    title: string,
    description: string,
    linkedBlogs: string[]
    }, id: string}[]}, markdownRemark: {
    html: string, frontmatter: {
    topic: string,
    date: string,
    author: string,
    title: string,
    description: string,
    linkedBlogs: string[],
  }, wordCount: {
    words: number;
  }}};
}

const BlogPost: FC<Props> = ({ data }: Props) => {
  
  // destructuring the query items
  const { html } = data.markdownRemark;
  const { topic, date, author, title, linkedBlogs } = data.markdownRemark.frontmatter;
  const { words } = data.markdownRemark.wordCount;

  return (
    <BlogPostLayout
      topic={topic}
      date={date}
      author={author}
      title={title}
      linkedBlogs={linkedBlogs}
      wordCount={words}
      allBlogPosts={data.allMarkdownRemark.nodes}
    >
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </BlogPostLayout>
  );
};
export default BlogPost;

export const Head: HeadFC<object> = ({ data }: any): React.ReactElement => {

  // destructuring the query items
  const { title, description } = data.markdownRemark.frontmatter;

  return (
    <WebsiteHead
      title={title}
      description={description}
      keywords='blog'
      type='article'
    />
  );
};

export const query = graphql`
  query BlogPostContentQuery($slug: String) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/(blog-posts)/"}}
    ) {
      nodes {
        frontmatter {
          date
          description
          link
          title
          topic
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    markdownRemark(frontmatter: {link: {eq: $slug}}) {
      html
      frontmatter {
        date
        author
        description
        linkedBlogs
        title
        topic
      }
      wordCount {
        words
      }
    }
  }
`