import React, { FC } from 'react';
import { Link } from 'gatsby';
import '../../styles/blog/blog-sidebar.css';

interface props { //type definitions of props
    topic: string;
};

const BlogSidebar: FC<props>  = ({ topic }: props) => {

    return (
        <aside className='blog-sidebar'>

            <h1 className='blog-sidebar-header'>Blog</h1>
            <p className='blog-sidebar-description'>Thoughts, inspirations and stories by the people creating Memoriter.</p>
            <hr className='blog-sidebar-divider'/>

            {/*links to different sub topics*/}
            <ul className='blog-sidebar-topics'>
                {/*the link for the current topic is highlighted*/}
                {topic === 'Latest' ? (<li>
                    <Link className='blog-sidebar-topics-link' to='/blog'><strong style={{color: 'var(--color-font)'}}>Latest</strong></Link>
                </li>) : (<li>
                    <Link className='blog-sidebar-topics-link' to='/blog'>Latest</Link>
                </li>)}
                {topic === 'Company' ? (<li>
                    <Link className='blog-sidebar-topics-link' to='/blog/company'><strong style={{color: 'var(--color-font)'}}>Company</strong></Link>
                </li>) : (<li>
                    <Link className='blog-sidebar-topics-link' to='/blog/company'>Company</Link>
                </li>)}
                {topic === 'Productivity' ? (<li>
                    <Link className='blog-sidebar-topics-link' to='/blog/productivity'><strong style={{color: 'var(--color-font)'}}>Productivity</strong></Link>
                </li>) : (<li>
                    <Link className='blog-sidebar-topics-link' to='/blog/productivity'>Productivity</Link>
                </li>)}
                {topic === 'Technology' ? (<li>
                    <Link className='blog-sidebar-topics-link' to='/blog/technology'><strong style={{color: 'var(--color-font)'}}>Technology</strong></Link>
                </li>) : (<li>
                    <Link className='blog-sidebar-topics-link' to='/blog/technology'>Technology</Link>
                </li>)}
                {topic === 'Miscellaneous' ? (<li>
                    <Link className='blog-sidebar-topics-link' to='/blog/miscellaneous'><strong style={{color: 'var(--color-font)'}}>Miscellaneous</strong></Link>
                </li>) : (<li>
                    <Link className='blog-sidebar-topics-link' to='/blog/miscellaneous'>Miscellaneous</Link>
                </li>)}
            </ul>
            
        </aside>
    );
}

export default BlogSidebar;