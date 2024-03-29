import React, { FC, useState } from 'react';
import { Link, HeadFC } from 'gatsby';
import { useSelector } from 'react-redux';
import * as styles from '../styles/404.module.scss';
import memoriterLogoWhite from '../images/memoriter-logo-white.svg';
import memoriterLogoBlack from '../images/memoriter-logo-black.svg';
import WebsiteHead from '../components/layout/website-head';
import WindowSizeAlert from '../components/layout/window-size-alert';

// this page is shown when no other page can be rendered

const PageNotFound: FC = (): React.ReactElement => {
  const [onHover, setOnHover] = useState<string>('brightness(1)'); // variable for the hover effect for the get started button

  const theme: string = useSelector((state: any) => state.theme.value); // current light or dark mode icon based on theme

  return (
    <>
      {/* container with content */}
      <main className={styles.page_not_found}>
        {/* large question mark next to the text */}
        <section className={styles.page_not_found_question_mark}>?</section>

        {/* extra div is important for layout */}
        <section>
          {/* logo above the content */}
          <img
            className={styles.page_not_found_logo}
            src={theme === 'dark' ? memoriterLogoWhite : memoriterLogoBlack}
            alt='Memoriter'
          />
          {/* text */}
          <h1>Page Not Found!</h1>
          <p>
            This URL does not match any page. Please use another link or go back to an
            existing page.
          </p>

          {/* button redirects to product page */}
          <Link
            className={styles.page_not_found_button}
            to='/'
            onMouseEnter={() => setOnHover('brightness(0.75)')}
            onMouseLeave={() => setOnHover('brightness(1)')}
          >
            {/* the onMouseEnter and -Leave is for the fade effect on hover which was not possible in CSS */}
            Return to Website!
            <div className={styles.page_not_found_button_background} style={{ filter: onHover }} />
          </Link>
        </section>
      </main>

      {/* alert for too small screens */}
      <WindowSizeAlert />
    </>
  );
};
export default PageNotFound;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='404 Page not found'
      description='HTTP Error 404. This page does not exist and the URL does not match any page.'
      keywords='404, error, not found'
      type='website'
    />
  );
};
