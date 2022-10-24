import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import WebsiteHead from '../components/website-head';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import AboutBanner from '../components/about/about-banner';
import AboutMain from '../components/about/about-main';

const About: FC = () => {
    return (
        <WebsiteWrapper currentPage='about'>
            
            {/*banner with introduction*/}
            <AboutBanner/>

            {/*basic main layout and texts*/}
            <AboutMain/>

        </WebsiteWrapper>
    );
}

export default About;

export const Head: HeadFC = (): React.ReactElement => {
    return (
        <WebsiteHead
            title='About'
            description='Find out who we are and about our vision.'
            keywords='about, company, vision'
            type='website'
        />
    );
};