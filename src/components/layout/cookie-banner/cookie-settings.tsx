import React, { FC, useState } from 'react';
import { Link } from 'gatsby';
import * as styles from '../../../styles/layout/cookie-banner/cookie-settings.module.scss';
import cookies from '../../../utils/cookies';

interface Props {
  onAnimation: React.CSSProperties;
  onCloseCookieSettings: () => void;
}

const CookieSettings: FC<Props> = ({ onAnimation, onCloseCookieSettings }: Props) => {
  const [onHover, setOnHover] = useState<string>('brightness(1)'); // variable for the hover effect for the accept all button

  const animationStyles = onAnimation; // gets styles for animation from the parent component

  // variable stored as a cookie for saving the accepted cookie types for later
  const [acceptedCookies, setAcceptedCookies] = useState<{
    necessary: boolean;
    functional: boolean;
  }>({
    necessary: true,
    functional: false,
  });

  // item is set in local storage for cookie banner not showng again if accepted
  const saveCurrentCookies = (allCookies: boolean): void => {
    const setCookies: {
      necessary: boolean;
      functional: boolean;
    } = allCookies
      ? {
          necessary: true,
          functional: true,
        }
      : acceptedCookies;
    const expires = new Date(); // cookie expiration date
    expires.setTime(+expires + 365 * 43200000); // sets expiration date (in six months)
    cookies.setCookie('accepted-cookies', JSON.stringify(setCookies), expires); // sets cookie
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
          We use cookies and similar technologies on our website to offer additional features. These
          cookies are either technically required or used to e.g. save preferences. We do not use
          tracking cookies for analytics and marketing purposes.
        </p>

        {/* container with toggle switches */}
        <div className={styles.cookie_settings_container}>
          {/* strictly necessary cookies switch */}
          <div>
            <div>
              <p className={styles.cookie_settings_label}>Strictly Necessary Cookies</p>
              {/* toggle slider */}
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

          {/* functional cookies switch */}
          <div>
            <div>
              <p className={styles.cookie_settings_label}>Functional Cookies</p>
              {/* toggle slider */}
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

          <nav className={styles.cookie_settings_links}>
            {/* divs are needed for layout to work correctly */}
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
        {/* button for saving changes */}
        <div className={styles.cookie_settings_save} onClick={() => saveCurrentCookies(false)}>
          <span className={styles.cookie_settings_save_text}>Save Current</span>
        </div>
        {/* button for accepting all cookies */}
        <div
          className={styles.cookie_settings_accept}
          onClick={() => saveCurrentCookies(true)}
          onMouseEnter={() => setOnHover('brightness(0.75)')}
          onMouseLeave={() => setOnHover('brightness(1)')}
        >
          {/* the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css and the background animation. */}
          <div className={styles.cookie_settings_accept_background} style={{ filter: onHover }} />
          <span className={styles.cookie_settings_accept_text}>Accept All</span>
        </div>
      </section>
    </section>
  );
};
export default CookieSettings;
