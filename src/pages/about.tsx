import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';
import AboutBanner from '../components/about/about-banner';
import AboutMain from '../components/about/about-main';

const About: FC = () => {
  return (
    <WebsiteLayout currentPage='about'>
      {/*banner with introduction*/}
      <AboutBanner />

      {/*basic main layout and texts*/}
      <AboutMain />
    </WebsiteLayout>
  );
};
export default About;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='About'
      description='Find out how we contribute to better education for everyone by providing an efficient and accessible all-in-one learning environment.'
      keywords='about, company, project, team, vision'
      type='website'
    />
  );
};
