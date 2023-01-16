import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/legal.module.scss';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';

const Cookies: FC = () => {
  return (
    <WebsiteLayout currentPage=''>
      {/* main body with text */}
      <section className={styles.legal_main}>
        <h1>Memoriter Cookie Policy</h1>
        <p>
          <strong>Last Updated: 16.01.2023</strong>
        </p>
        <p>This is the Cookie Policy for Memoriter, accessible from www.memoriter.de</p>

        <h2>What Are Cookies</h2>
        <p>
        As is common practice with almost all professional websites this site uses cookies, 
        which are tiny files that are downloaded to your computer, to improve your experience. 
        This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
        We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.
        </p>

        <h2>How We Use Cookies</h2>
        <p>
        We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry 
        standard options for disabling cookies without completely disabling the functionality and features they add to this site. 
        It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
        </p>

        <h2>Disabling Cookies</h2>
        <p>
        You can prevent the setting of cookies by adjusting the settings on your browser 
        (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this
        and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality 
        and features of the this site. Therefore it is recommended that you do not disable cookies. This Cookies Policy was created 
        with the help of the Cookies Policy Generator.
        </p>

        <h2>The Cookies We Set</h2>
        <li>
          Account related cookies
        </li>
        <p>
          If you create an account with us then we will use cookies for the management of the signup process and general administration. 
          These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.
          </p>

        <li>
          Login related cookies
        </li>
        <p>
        We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time 
        you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
        </p>

        <li>
          Orders processing related cookies
        </li>
        <p>
          This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between 
          pages so that we can process it properly.
        </p>

        <h2>Third Party Cookies</h2>
        <p>
          In some special cases we also use cookies provided by trusted third parties. The following section details which third party 
          cookies you might encounter through this site.
          </p>
        <li>
          This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
        </li>
        <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>

        <h2>More Information</h2>
        <p>
          Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether 
          you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
        </p>
        <p>
          However if you are still looking for more information then you can contact us through one of our preferred contact methods:
        </p>
        <li>Email: contact@memoriter.de</li>
      </section>
    </WebsiteLayout>
  );
};
export default Cookies;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Cookie Policy'
      description='This page contains further information how Memoriter uses cookies.'
      keywords='cookies, policy, legal'
      type='website'
    />
  );
};
