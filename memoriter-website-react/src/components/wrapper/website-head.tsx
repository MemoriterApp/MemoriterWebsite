import React, { FC } from 'react';
import { Helmet } from 'react-helmet'; //React-helmet is a package to create working head tags in React.

interface props { //type definitions for props
    title: string;
    description: string;
}

const Head: FC<props> = ({ title, description }: props) => { 
    return (
        <Helmet> {/*The helmet tag is like a head tag for meta data, the normal head tag does not work in React.*/}
            <title>Memoriter | {title}</title> {/*title changes with currently open page*/}
            {/*all the basic dynamic meta data:*/}
            <meta name='keywords' content='memoriter, learning, notes, school'/>
            <meta name='description' content={description}/>
        </Helmet>
    );
}

export default Head;