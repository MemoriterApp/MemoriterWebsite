import React, { FC } from 'react';
import { Link } from 'gatsby';
import * as styles from '../../styles/layout/website-footer.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { changeTheme } from '../../features/theme-slice';
import cookies from '../../utils/cookies';
import memoriterLogoWhite from '../../images/memoriter-logo-white.svg';
import memoriterLogoBlack from '../../images/memoriter-logo-black.svg';

// type definition for props
interface Props {
  onOpenLanguageSelect: () => void;
  onOpenCookieSettings: () => void;
}

const WebsiteFooter: FC<Props> = ({ onOpenLanguageSelect, onOpenCookieSettings }: Props) => {
  const dispatch: Dispatch<AnyAction> = useDispatch(); // used to manipulate global state (react redux)

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
        <div className={styles.website_footer_top_social}>
          
        </div>
      </section>

      {/* columns of content */}
      <section className={styles.website_footer_content}>
        {/* lists of footer links */}
        <nav>
          <p className={styles.website_footer_heading}>App</p>
          <a className={styles.website_footer_link} href='https://app.memoriter.de/login'>
            Sign In
          </a>
          <a className={styles.website_footer_link} href='https://app.memoriter.de/signup'>
            Register
          </a>
          <Link className={styles.website_footer_link} to='/download'>
            Download
          </Link>
          <Link className={styles.website_footer_link} to='/releases'>
            Release Notes
          </Link>
        </nav>

        <nav>
          <p className={styles.website_footer_heading}>Project</p>
          <Link className={styles.website_footer_link} to='/'>
            Product
          </Link>
          <Link className={styles.website_footer_link} to='/about'>
            About
          </Link>
          <Link className={styles.website_footer_link} to='/blog'>
            Blog
          </Link>
          <Link className={styles.website_footer_link} to='/donate'>
            Donate
          </Link>
        </nav>

        <nav>
          <p className={styles.website_footer_heading}>Legal</p>
          <Link className={styles.website_footer_link} to='/impressum'>
            Impressum
          </Link>
          <Link className={styles.website_footer_link} to='/terms'>
            Terms of Use
          </Link>
          <Link className={styles.website_footer_link} to='/privacy'>
            Privacy Policy
          </Link>
          <Link className={styles.website_footer_link} to='/cookies'>
            Cookie Policy
          </Link>
        </nav>

        <nav>
          <p className={styles.website_footer_heading}>Help</p>
          <Link className={styles.website_footer_link} to='/support'>
            Support
          </Link>
          <Link className={styles.website_footer_link} to='/faq'>
            FAQ
          </Link>
          <Link className={styles.website_footer_link} to='/bugs'>
            Bug Report
          </Link>
          <span className={styles.website_footer_link} onClick={() => onOpenCookieSettings()}>
            Cookie Settings
          </span>
          {/* opens cookie settings banner */}
        </nav>

        <nav>
          {/* mostly external links */}
          <p className={styles.website_footer_heading}>Follow Us</p>
          <a
            className={styles.website_footer_link}
            href='https://www.twitter.com/'
            target='_blank'
            rel='noreferrer'
          >
            Twitter
          </a>
          <a
            className={styles.website_footer_link}
            href='https://www.youtube.com/'
            target='_blank'
            rel='noreferrer'
          >
            YouTube
          </a>
          <a
            className={styles.website_footer_link}
            href='https://www.instagram.com/memorit.er/'
            target='_blank'
            rel='noreferrer'
          >
            Instagram
          </a>
          <Link className={styles.website_footer_link} to='/newsletter'>
            Newsletter
          </Link>
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
