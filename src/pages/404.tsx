import React, { FC, useState } from 'react'
import { Link, HeadFC } from 'gatsby';
import * as styles from '../styles/404.module.scss';
import memoriterLogo from '../images/memoriter-logo.svg';
import WebsiteHead from '../components/layout/website-head';
import WindowSizeAlert from '../components/layout/window-size-alert';

const PageNotFound: FC = (): React.ReactElement => {

  const PageNotFoundBottomSpace: React.CSSProperties = { //styles for extra space at the bottom on page scroll
    position: 'absolute',
    left: '0',
    top: '42px',
    width: '100%',
    height: '40px'
  };

  const [onHover, setOnHover] = useState<string>('brightness(1)'); //variable for the hover effect for the get started button

  return (
    <>
      
      {/*container with content*/}
      <main className={styles.page_not_found}>
        {/*large question mark next to the text*/}
        <section className={styles.page_not_found_question_mark}>?</section>

        {/*extra div is important for layout*/}
        <section>
          {/*logo above the content*/}
          <img className={styles.page_not_found_logo} src={memoriterLogo} alt='Memoriter'/>

          {/*text*/}
          <h1 className={styles.page_not_found_heading}>Page Not Found!</h1>
          <p className={styles.page_not_found_text}>This URL does not match any page. Please use another link or go back to an existing page.</p>

          {/*button redirects to product page*/}
          <Link
            className={styles.page_not_found_button} to='/'
            onMouseEnter={() => setOnHover('brightness(0.75)')}
            onMouseLeave={() => setOnHover('brightness(1)')}
          > {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css*/}
            <div className={styles.page_not_found_button_background} style={{filter: onHover}}/>
            <span className={styles.page_not_found_button_text}>Return to Website!</span>
            <div style={PageNotFoundBottomSpace}/> {/*space at the bottom on page scroll*/}
          </Link>
        </section>
      </main>
      {/*alert for too small screens*/}
      <WindowSizeAlert/>
      
    </>
  );
};
export default PageNotFound;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Page not found'
      description='This URL does not match any page.'
      keywords='404, error, not found'
      type='website'
    />
  );
};