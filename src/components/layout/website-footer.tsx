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

// type definition for props
interface Props {
  onOpenLanguageSelect: () => void;
  onOpenCookieSettings: () => void;
}

const WebsiteFooter: FC<Props> = ({ onOpenLanguageSelect, onOpenCookieSettings }: Props) => {
  const dispatch: Dispatch<AnyAction> = useDispatch(); // used to manipulate global state (react redux)

  const [onHover, setOnHover] = useState<string>('brightness(1)'); // variable for the hover effect for the newsletter send button

  const themeText: string = useSelector((state: any) => state.theme.value); // current light or dark mode text based on theme

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
            src={themeText === 'dark' ? memoriterLogoWhite : memoriterLogoBlack}
            alt='Memoriter'
          />
          <p>Study Better, Faster, Smarter - Study with Memoriter!</p>
        </div>
        <div className={styles.website_footer_top_gap} />
        <div className={styles.website_footer_top_social}>
          <a href='https://instagram.com' target='_blank' rel='noreferrer'>
            <img src={themeText === 'dark' ? instagramIconLight : instagramIconDark} alt='Github' />
          </a>
          <a href='https://discord.com' target='_blank' rel='noreferrer'>
            <img src={themeText === 'dark' ? discordIconLight : discordIconDark} alt='Github' />
          </a>
          <a href='https://github.com/MemoriterApp' target='_blank' rel='noreferrer'>
            <img src={themeText === 'dark' ? githubIconLight : githubIconDark} alt='Github' />
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
              <Link to='/releases'>Release Notes</Link>
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
            <li onClick={() => onOpenCookieSettings()}>Cookie Settings</li>
            {/* opens cookie settings banner */}
          </ul>
        </nav>
      </section>

      {/* box at the bottom with social media links and other buttons */}
      <section className={styles.website_footer_bottom_box}>
        <p className={styles.website_footer_bottom_box_copyright}>© Copyright 2023 Memoriter</p>

        {/* right text uses two classes, one for the hover effect, the theme text depends on the current theme */}
        <p className={styles.website_footer_bottom_box_language} onClick={onOpenLanguageSelect}>
          Language: English
        </p>
        {(themeText === 'dark' || !themeText) && (
          <p
            className={styles.website_footer_bottom_box_theme}
            onClick={() => onChangeTheme('light')}
          >
            Theme: Dark
          </p>
        )}
        {themeText === 'light' && (
          <p
            className={styles.website_footer_bottom_box_theme}
            onClick={() => onChangeTheme('dark')}
          >
            Theme: Light
          </p>
        )}
      </section>
    </footer>
  );
};
export default WebsiteFooter;
