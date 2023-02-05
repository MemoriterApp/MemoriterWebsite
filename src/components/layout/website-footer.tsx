import React, { FC, useState } from 'react';
import { Link } from 'gatsby';
import * as styles from '../../styles/layout/website-footer.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { changeTheme } from '../../features/theme-slice';
import cookies from '../../utils/cookies';
import memoriterLogoWhite from '../../images/memoriter-logo-white.svg';
import memoriterLogoBlack from '../../images/memoriter-logo-black.svg';
import instagramIconLight from '../../images/icons/instagram-icon-light.svg';
import instagramIconDark from '../../images/icons/instagram-icon-dark.svg';
import discordIconLight from '../../images/icons/discord-icon-light.svg';
import discordIconDark from '../../images/icons/discord-icon-dark.svg';
import githubIconLight from '../../images/icons/github-icon-light.svg';
import githubIconDark from '../../images/icons/github-icon-dark.svg';
import sendIcon from '../../images/icons/send-icon.svg';
import emoji1f36a from '../../images/emoji/1f36a.svg'; // cookie emoji for cookie setting
import emoji1f1ec_1f1e7 from '../../images/emoji/1f1ec-1f1e7.svg'; // british flag for language select
import emoji1f312 from '../../images/emoji/1f312.svg'; // moon icon for dark mode
import emoji26c5 from '../../images/emoji/26c5.svg'; // sun icon for light mode

// type definition for props
interface Props {
  onOpenLanguageSelect: () => void;
  onOpenCookieSettings: () => void;
}

const WebsiteFooter: FC<Props> = ({ onOpenLanguageSelect, onOpenCookieSettings }: Props) => {
  const dispatch: Dispatch<AnyAction> = useDispatch(); // used to manipulate global state (react redux)

  const [onHover, setOnHover] = useState<string>('brightness(1)'); // variable for the hover effect for the newsletter send button

  const themeIcon: string = useSelector((state: any) => state.theme.value); // current light or dark mode text based on theme

  // function to swap the current theme
  const onChangeTheme = (theme: string): void => {
    dispatch(changeTheme(theme)); // changes the theme
    // checks if functional cookies are accepted
    if (
      cookies.getCookie('accepted-cookies') &&
      JSON.parse(cookies.getCookie('accepted-cookies')).functional
    ) {
      localStorage.setItem('theme', theme); // if functional cookies are accepted, then the theme can be saved to localStorage
    }
  };

  return (
    <footer className={styles.website_footer}>
      {/* transition shape at the top */}
      <div className={styles.website_footer_transition} />

      {/* bar with project logo on the left ans social media at the right */}
      <section className={styles.website_footer_top}>
        <div className={styles.website_footer_top_logo}>
          <img
            src={themeIcon === 'dark' ? memoriterLogoWhite : memoriterLogoBlack}
            alt='Memoriter'
          />
          <p>Study Better, Faster, Smarter - Study with Memoriter!</p>
        </div>

        <div className={styles.website_footer_flex_gap} />

        <div className={styles.website_footer_top_social}>
          <a href='https://instagram.com' target='_blank' rel='noreferrer'>
            <img src={themeIcon === 'dark' ? instagramIconLight : instagramIconDark} alt='Github' />
          </a>
          <a href='https://discord.com' target='_blank' rel='noreferrer'>
            <img src={themeIcon === 'dark' ? discordIconLight : discordIconDark} alt='Github' />
          </a>
          <a href='https://github.com/MemoriterApp' target='_blank' rel='noreferrer'>
            <img src={themeIcon === 'dark' ? githubIconLight : githubIconDark} alt='Github' />
          </a>
        </div>

        <div className={styles.website_footer_top_newsletter}>
          <form onSubmit={(event) => event.preventDefault()}>
            <p>Subscribe to our newsletter</p>
            <input type='email' placeholder='Email address' />
            <button
              type='submit'
              onMouseEnter={() => setOnHover('brightness(0.75)')}
              onMouseLeave={() => setOnHover('brightness(1)')}
            >
              <img src={sendIcon} />
              <div style={{ filter: onHover }} />
            </button>
          </form>
        </div>
      </section>

      {/* columns of content */}
      <section className={styles.website_footer_content}>
        {/* lists of footer links */}
        <nav>
          <h3>Application</h3>
          <ul>
            <li>
              <a href='https://app.memoriter.de/login'>Sign In</a>
            </li>
            <li>
              <a href='https://app.memoriter.de/signup'>Register</a>
            </li>
            <li>
              <Link to='/download'>Download</Link>
            </li>
            <li>
              <Link to='/bot'>Memoriter Bot</Link>
            </li>
          </ul>
        </nav>

        <nav>
          <h3>Project</h3>
          <ul>
            <li>
              <Link to='/'>Product</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/donate'>Donate</Link>
            </li>
          </ul>
        </nav>

        <nav>
          <h3>Legal</h3>
          <ul>
            <li>
              <Link to='/impressum'>Impressum</Link>
            </li>
            <li>
              <Link to='/terms'>Terms of Use</Link>
            </li>
            <li>
              <Link to='/privacy'>Privacy Policy</Link>
            </li>
            <li>
              <Link to='/cookies'>Cookie Policy</Link>
            </li>
          </ul>
        </nav>

        <nav>
          <h3>Help</h3>
          <ul>
            <li>
              <Link to='/support'>Support</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/bugs'>Bug Report</Link>
            </li>
            <li>
              <Link to='/releases'>Release Notes</Link>
            </li>
          </ul>
        </nav>
      </section>

      {/* box at the bottom with social media links and other buttons */}
      <section className={styles.website_footer_bottom}>
        <p className={styles.website_footer_bottom_content}>
          <span>© Copyright 2023 Memoriter</span>

          <span className={styles.website_footer_flex_gap} />

          <span
            className={styles.website_footer_bottom_link}
            onClick={() => onOpenCookieSettings()}
          >
            <img src={emoji1f36a} /> Cookies
          </span>

          <span
            className={styles.website_footer_bottom_link}
            onClick={() => onOpenLanguageSelect()}
          >
            <img src={emoji1f1ec_1f1e7} /> Language
          </span>

          {(themeIcon === 'dark' || !themeIcon) && (
            <span
              className={styles.website_footer_bottom_link}
              onClick={() => onChangeTheme('light')}
            >
              <img src={emoji26c5} /> Theme
            </span>
          )}
          {themeIcon === 'light' && (
            <span
              className={styles.website_footer_bottom_link}
              onClick={() => onChangeTheme('dark')}
            >
              <img src={emoji1f312} /> Theme
            </span>
          )}
        </p>
      </section>
    </footer>
  );
};
export default WebsiteFooter;
