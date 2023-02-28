import React, { FC, useState } from 'react';
import { Link } from 'gatsby';
import * as styles from '../../../styles/layout/cookie-banner/cookie-settings.module.scss';
import cookies from '../../../utils/cookies';

interface Props {
  onAnimation: React.CSSProperties;
  onCloseCookieSettings: () => void;
}

const CookieSettings: FC<Props> = ({ onAnimation, onCloseCookieSettings }: Props) => {
  const [onHover, setOnHover] = useState<string>('brightness(1)'); //variable for the hover effect for the accept all button

  const animationStyles = onAnimation; //gets styles for animation from the parent component

  //variable stored as a cookie for saving the accepted cookie types for later
  const [acceptedCookies, setAcceptedCookies] = useState<{
    necessary: boolean;
    functional: boolean;
    analytics: boolean;
    advertising: boolean;
  }>({
    necessary: true,
    functional: false,
    analytics: false,
    advertising: false,
  });

  const saveCurrentCookies = (): void => { //item is set in local storage for cookie banner not showng again if accepted
    const expires = new Date(); //cookie expiration date
    expires.setTime(+expires + 365 * 86400000); //sets expiration date (in one year)
    cookies.setCookie('accepted-cookies', JSON.stringify(acceptedCookies), expires); //sets cookie
    onCloseCookieSettings();
  };

  const acceptAllCookies = (): void => { //function to set all cookies to true
    //variable stored as a cookie for saving the accepted cookie types for later (sets value to all accepted)
    const acceptedAllCookies: {
      necessary: boolean;
      functional: boolean;
      analytics: boolean;
      advertising: boolean;
    } = {
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
    };

    const expires: Date = new Date(); //cookie expiration date
    expires.setTime(+expires + 365 * 86400000); //sets expiration date (in one year)
    cookies.setCookie('accepted-cookies', JSON.stringify(acceptedAllCookies), expires); //sets cookie
    onCloseCookieSettings();
  };

  return (
    <section className={styles.cookie_settings} style={animationStyles}>
      <section className={styles.cookie_settings_title}>
        <p className={styles.cookie_settings_title_text}>Cookie Settings</p>
        <div className={styles.cookie_settings_close} onClick={() => onCloseCookieSettings()} />
      </section>

      <section className={styles.cookie_settings_scroll}>
        <p className={styles.cookie_settings_description}>
          We use cookies and similar technologies on our website to process personal data. We might
          also share this data with third parties. Data processing may be done with your consent or
          on the basis of a legitimate interest. You have the right to consent to essential services
          only and to modify your consent at a later time in the cookie settings.
        </p>

        {/*container with toggle switches*/}
        <div className={styles.cookie_settings_container}>
          {/*strictly necessary cookies switch*/}
          <div>
            <div>
              <p className={styles.cookie_settings_label}>Strictly Necessary Cookies</p>
              {/*toggle slider*/}
              <label className={styles.cookie_settings_switch}>
                <input type='checkbox' />
                <div className={styles.cookie_settings_switch_slider_static} />
              </label>
            </div>
            <p className={styles.cookie_settings_label_description}>
              These Cookies are essential for the basic functionality of the site to work. They are
              technically necessary and cannot be disabled.
            </p>
          </div>

          {/*functional cookies switch*/}
          <div>
            <div>
              <p className={styles.cookie_settings_label}>Functional Cookies</p>
              {/*toggle slider*/}
              <label
                className={styles.cookie_settings_switch}
                onChange={() =>
                  setAcceptedCookies({
                    ...acceptedCookies,
                    functional: !acceptedCookies.functional,
                  })
                }
              >
                <input type='checkbox' />
                <div className={styles.cookie_settings_switch_slider} />
              </label>
            </div>
            <p className={styles.cookie_settings_label_description}>
              Functional cookies provide enhanced features and preferences to provide a better
              experience when using the site.
            </p>
          </div>

          {/*analytics cookies switch*/}
          <div>
            <div>
              <p className={styles.cookie_settings_label}>Analytics Cookies</p>
              {/*toggle slider*/}
              <label
                className={styles.cookie_settings_switch}
                onChange={() =>
                  setAcceptedCookies({ ...acceptedCookies, analytics: !acceptedCookies.analytics })
                }
              >
                <input type='checkbox' />
                <div className={styles.cookie_settings_switch_slider} />
              </label>
            </div>
            <p className={styles.cookie_settings_label_description}>
              These cookies collect data used to analyze the visitors behavior for optimizing and
              improving the website.
            </p>
          </div>

          {/*advertising cookies switch*/}
          <div>
            <div>
              <p className={styles.cookie_settings_label}>Advertising Cookies</p>
              {/*toggle slider*/}
              <label
                className={styles.cookie_settings_switch}
                onChange={() =>
                  setAcceptedCookies({
                    ...acceptedCookies,
                    advertising: !acceptedCookies.advertising,
                  })
                }
              >
                <input type='checkbox' />
                <div className={styles.cookie_settings_switch_slider} />
              </label>
            </div>
            <p className={styles.cookie_settings_label_description}>
              These cookies are used for marketing services (for instance targeted advertising).
            </p>
          </div>

          <nav className={styles.cookie_settings_links}>
            {/*divs are needed for layout to work correctly*/}
            <div>
              <Link className={styles.cookie_settings_link} to='/privacy' target='_blank'>
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link className={styles.cookie_settings_link} to='/cookies' target='_blank'>
                Cookie Policy
              </Link>
            </div>
            <div>
              <Link className={styles.cookie_settings_link} to='/impressum' target='_blank'>
                Impressum
              </Link>
            </div>
          </nav>
        </div>
      </section>

      <section className={styles.cookie_settings_buttons}>
        {/*button for saving changes*/}
        <div className={styles.cookie_settings_save} onClick={saveCurrentCookies}>
          <span className={styles.cookie_settings_save_text}>Save Current</span>
        </div>
        {/*button for accepting all cookies*/}
        <div
          className={styles.cookie_settings_accept}
          onClick={acceptAllCookies}
          onMouseEnter={() => setOnHover('brightness(0.75)')}
          onMouseLeave={() => setOnHover('brightness(1)')}
        >
          {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css and the background animation.*/}
          <div className={styles.cookie_settings_accept_background} style={{ filter: onHover }} />
          <span className={styles.cookie_settings_accept_text}>Accept All</span>
        </div>
      </section>
    </section>
  );
};
export default CookieSettings;
