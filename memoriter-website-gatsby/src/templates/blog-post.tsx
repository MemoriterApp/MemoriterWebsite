import React, { FC } from 'react';
import { HeadFC, graphql } from 'gatsby';
import WebsiteHead from '../components/website-head';
import BlogPostWrapper from '../components/blog/blog-post-wrapper';

interface Props {
  data: {allMarkdownRemark: {nodes: {frontmatter: {
    link: string,
    topic: string,
    image: string,
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
    <BlogPostWrapper
      topic={topic}
      date={date}
      author={author}
      title={title}
      linkedBlogs={linkedBlogs}
      wordCount={words}
      allBlogPosts={data.allMarkdownRemark.nodes}
    >
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </BlogPostWrapper>
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
        image
        link
        title
        topic
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