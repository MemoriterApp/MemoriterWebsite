import React, { FC, useState } from 'react';
import { Link } from 'gatsby';
import '../../styles/blog/blog-main.scss';

interface Props { //type definitions of props
  data: {allMarkdownRemark: {nodes: {frontmatter: {
    link: string,
    topic: string,
    image: string,
    date: string,
    author: string,
    title: string,
    description: string,
    linkedBlogs: string[]
  }, id: string}[]}};
  topic: string;
};

const BlogMain: FC<Props> = ({ topic, data }: Props) => {

  const blogPosts = data.allMarkdownRemark.nodes; // list of all blog posts

  const [loadedBlogPosts, setLoadedBlogPosts] = useState(8); //number of blog posts shown before clicking on the load more button

  return (
    <section className='blog-main'>

      {/*four newest blog posts, divided in to two parts for the layout*/}
      <div className='blog-main-new-blog-container'>
        {blogPosts.filter((
          blogPost: {id: string, frontmatter: {link: string, topic: string, image: string, date: string, author: string, title: string, description: string, linkedBlogs: string[]}}
        ) => topic !== 'Latest' ? blogPost.frontmatter.topic === topic : blogPost.frontmatter.topic !== topic).slice(0, 2).map((
          blogPost: {id: string, frontmatter: {link: string, topic: string, image: string, date: string, author: string, title: string, description: string, linkedBlogs: string[]}}
        ) => (
          //gets the first two objects from the blogs array, is filtered when a topic (e.g. 'company') is set
          <Link className='blog-main-new-blog' key={blogPost.id} to={`/blog/${blogPost.frontmatter.link}`}>
                            
            <p style={{lineHeight: '1rem'}}>{blogPost.frontmatter.topic}</p>
            <p className='blog-main-blog-date' style={{lineHeight: '1rem'}}>
              {new Date(blogPost.frontmatter.date).toLocaleString('en-us', {
                month: 'short',
                year: 'numeric',
                day: 'numeric'
              })}
            </p>
                            
            <img src={blogPost.frontmatter.image} alt={blogPost.frontmatter.title}/>
                            
            <h2>{blogPost.frontmatter.title}</h2>
            <p>{blogPost.frontmatter.description}</p>
                        
          </Link>
        ))}
      </div>
      <div className='blog-main-new-blog-container'>
        {blogPosts.filter((
          blogPost: {id: string, frontmatter: {link: string, topic: string, image: string, date: string, author: string, title: string, description: string, linkedBlogs: string[]}}
        ) => topic !== 'Latest' ? blogPost.frontmatter.topic === topic : blogPost.frontmatter.topic !== topic).slice(2, 4).map((
          blogPost: {id: string, frontmatter: {link: string, topic: string, image: string, date: string, author: string, title: string, description: string, linkedBlogs: string[]}}
        ) => (
          //gets the first two objects from the blogs array, is filtered when a topic (e.g. 'company') is set
          <Link className='blog-main-new-blog' key={blogPost.id} to={`/blog/${blogPost.frontmatter.link}`}>
                            
            <p style={{lineHeight: '1rem'}}>{blogPost.frontmatter.topic}</p>
            <p className='blog-main-blog-date' style={{lineHeight: '1rem'}}>
              {new Date(blogPost.frontmatter.date).toLocaleString('en-us', {
                month: 'short',
                year: 'numeric',
                day: 'numeric'
              })}
            </p>
                            
            {blogPost.frontmatter.image}
                            
            <h2>{blogPost.frontmatter.title}</h2>
            <p>{blogPost.frontmatter.description}</p>
                        
          </Link>
        ))}
      </div>

      {/*older blog posts (different, more compact style)*/}
      <div>
        {blogPosts.filter((
          blogPost: {id: string, frontmatter: {link: string, topic: string, image: string, date: string, author: string, title: string, description: string, linkedBlogs: string[]}}
        ) => topic !== 'Latest' ? blogPost.frontmatter.topic === topic : blogPost.frontmatter.topic !== topic).slice(4, loadedBlogPosts).map((
          blogPost: {id: string, frontmatter: {link: string, topic: string, image: string, date: string, author: string, title: string, description: string, linkedBlogs: string[]}}
        ) => (
          //gets more objects from the blogs array, is filtered when a topic (e.g. 'company') is set
          <Link className='blog-main-old-blog' key={blogPost.id} to={`/blog/${blogPost.frontmatter.link}`}>
                            
            <p className='blog-main-old-blog-outside'>{blogPost.frontmatter.topic}</p>
            <p className='blog-main-blog-date blog-main-old-blog-outside' style={{lineHeight: '1rem'}}> {/*two classes*/}
              {new Date(blogPost.frontmatter.date).toLocaleString('en-us', {
                month: 'short',
                year: 'numeric',
                day: 'numeric'
              })}
            </p>
                            
            <div style={{display: 'flex', gap: '20px'}}>

              <div className='blog-main-old-blog-box'>
                <h2>{blogPost.frontmatter.title}</h2>
                <p>{blogPost.frontmatter.description}</p>
              </div>

              {blogPost.frontmatter.image}

            </div>

          </Link>
        ))}
      </div>
                
      {/*load more button, onClick just adds eight to the number of the maximum of shown blogs. The button is just shown if necessary.*/}
      {loadedBlogPosts <= blogPosts.filter((
        blogPost: any
      ) => topic !== 'Latest' ? blogPost.topic === topic : blogPost.topic !== topic).length - 1 ? (
        <button className='blog-main-button' onClick={() => setLoadedBlogPosts(loadedBlogPosts + 8)}>Load More...</button>) : (<div/>)
      }

    </section>
  );
};
export default BlogMain;