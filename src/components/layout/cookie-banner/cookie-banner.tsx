import React, { FC, useState } from 'react';
import * as styles from '../../../styles/layout/cookie-banner/cookie-banner.module.scss';
import cookies from '../../../utils/cookies';

interface props {
  onOpenCookieSettings: () => void;
}

const CookieBanner: FC<props> = ({ onOpenCookieSettings }: props) => {
  const [onHover, setOnHover] = useState<string>('brightness(1)'); // variable for the hover effect for the accept button

  const accepted: string = cookies.getCookie('accepted-cookies'); // used for if the banner is first dieplayed or not

  const [display, setDisplay] = useState<string>('-180px'); // variable for showing the cookie banner and the move animation
  if (accepted) {
    // if else is for only displaying it before accepting cookies
    if (display === '0') {
      setDisplay('-180px'); // if accepted, the banner is hidden
    }
  } else {
    setTimeout(() => {
      setDisplay('0');
    }, 600); // executing move animation
  }

  // item is set in local (cookie) storage for cookie banner not showng again if accepted
  // variable stored as a cookie for saving the accepted cookie types for later
  const acceptCookies = (): void => {
    const acceptedAllCookies: {
      necessary: boolean;
      functional: boolean;
    } = {
      necessary: true,
      functional: true,
    };

    const expires: Date = new Date(); // cookie expiration date
    expires.setTime(+expires + 365 * 43200000); // sets expiration date (in six months)
    cookies.setCookie('accepted-cookies', JSON.stringify(acceptedAllCookies), expires); // sets cookie
  };

  return (
    <section
      className={styles.cookie_banner}
      style={{ bottom: display /* style property is for if the banner is shown or not */ }}
    >
      {/* cookie banner text */}
      <p className={styles.cookie_banner_text}>
        This website uses cookies for making the site work and to offer enhanced functionality.
      </p>

      {/* accept and more information buttons */}
      <div className={styles.cookie_banner_buttons}>
        <button
          className={styles.cookie_banner_buttons_more_information}
          onClick={() => onOpenCookieSettings()}
        >
          More Information
        </button>
        <button
          className={styles.cookie_banner_buttons_accept}
          onMouseEnter={() => setOnHover('brightness(0.75)')}
          onMouseLeave={() => setOnHover('brightness(1)')}
          onClick={() => acceptCookies()}
        >
          Accept
          <div className={styles.cookie_banner_buttons_accept_background} style={{ filter: onHover }} />
        </button>
      </div>
    </section>
  );
};
export default CookieBanner;
