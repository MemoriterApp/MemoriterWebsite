import React, { FC } from 'react';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import AboutBanner from '../components/about/about-banner';
import AboutMain from '../components/about/about-main';

const About: FC = () => {
    return (
        <WebsiteWrapper
            title='About'
            description='Find out who we are and about our vision.'
            currentPage='about'
        >
            
            {/*banner with introduction*/}
            <AboutBanner/>

            {/*basic main layout and texts*/}
            <AboutMain/>

        </WebsiteWrapper>
    );
}

export default About;