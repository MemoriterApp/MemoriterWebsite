import React, { FC } from 'react';
import lightBulbIcon from '../../images/icons/light-bulb-icon.svg';

interface props { //type definitions of props
   children: React.ReactNode;
};

const BlogPostCallout: FC<props> = ({ children }: props) => {
    return (
        <p className='blog-post-main-callout'>
            <img src={lightBulbIcon} alt='light-bulb-icon'/>
            <span>{children}</span>
        </p>
    );
}

export default BlogPostCallout;