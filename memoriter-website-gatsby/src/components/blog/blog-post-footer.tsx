import React, { FC } from 'react';
import { Link } from 'gatsby';
import '../../styles/blog/blog-post-footer.scss';
import twitterIcon from '../../images/icons/twitter-icon.svg';
import facebookIcon from '../../images/icons/facebook-icon.svg';
import whatsappIcon from '../../images/icons/whatsapp-icon.svg';
import emailIcon from '../../images/icons/email-icon.svg';

interface props { //type definitions of props
    title: string;
    linkedBlogs: string[];
    allBlogPosts: any;
};

const BlogPostFooter: FC<props> = ({ title, linkedBlogs, allBlogPosts }: props) => {
    return (
        <section className='blog-post-footer'>
            
            {/*share links, the links are using the title variable and the current url (window.location)*/}
            <div className='blog-post-footer-share'>
                <p>Share this post</p>
                <a className='blog-post-footer-share-circle' style={{left: '0'}}
                    href={`https://twitter.com/intent/tweet?url=${window.location}/&text=${title}`} target='_blank' rel='noreferrer'>
                    <img className='blog-post-footer-share-icon'
                        src={twitterIcon} alt='twitter-icon'/>
                </a>
                <a className='blog-post-footer-share-circle' style={{left: '45px'}}
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}/`} target='_blank' rel='noreferrer'>
                    <img className='blog-post-footer-share-icon' style={{marginTop: '-1px'}}
                        src={facebookIcon} alt='facebook-icon'/>
                </a>
                <a className='blog-post-footer-share-circle' style={{left: '90px'}}
                    href={`https://api.whatsapp.com/send?text=${title}%0a${window.location}`} target='_blank' rel='noreferrer'>
                    <img className='blog-post-footer-share-icon'
                        src={whatsappIcon} alt='twitter-icon'/>
                </a>
                <a className='blog-post-footer-share-circle' style={{left: '135px'}}
                    href={`mailto:?subject=${title}&body=${title}%0A${window.location}`} target='_blank' rel='noreferrer'>
                    <img className='blog-post-footer-share-icon'
                        src={emailIcon} alt='email-icon'/>
                </a>
            </div>

            <div className='blog-post-footer-divider'/> {/*small divider line*/}

            <h2 className='blog-post-footer-read-more'>Read More</h2>

            {/*link to all blog posts*/}
            <Link className='blog-post-footer-all-posts' to='/blog'>All posts &#129046;</Link> {/*&#129044; is a unicode arrow symbol*/}

            <div> {/*it is checked if one of all blog posts matches the title of one of the linked blogs*/}
                {allBlogPosts.filter((
                    blogPost: any
                ) => blogPost.frontmatter.link === linkedBlogs.find(item => item === blogPost.frontmatter.link)).map((
                    blogPost: any
                ) => (
                    <Link className='blog-post-footer-linked-blog' to={`/blog/${blogPost.frontmatter.link}`} key={blogPost.id}>
                        
                        <p className='blog-post-footer-linked-blog-outside'>{blogPost.frontmatter.topic}</p>
                        <p className='blog-post-footer-linked-blog-date blog-post-footer-linked-blog-outside' style={{lineHeight: '1rem'}}> {/*two classes*/}
                            {new Date(blogPost.frontmatter.date).toLocaleString('en-us', {
                                month: 'short',
                                year: 'numeric',
                                day: 'numeric'
                            })}</p>
                        
                        <div style={{display: 'flex', gap: '20px'}}>
                            
                            <div className='blog-post-footer-linked-blog-box'>
                                <h3>{blogPost.frontmatter.title}</h3>
                                <p>{blogPost.frontmatter.description}</p>
                            </div>

                            {blogPost.frontmatter.image}

                        </div>

                    </Link>
                ))}
            </div>

        </section>
    );
}

export default BlogPostFooter;