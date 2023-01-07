import React, { FC } from 'react';
import { Link } from 'gatsby';
import * as styles from '../../styles/layout/website-footer.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { changeTheme } from '../../features/theme-slice';
import youtubeIcon from '../../images/icons/youtube-icon.svg';
import twitterIcon from '../../images/icons/twitter-icon.svg';
import instagramIcon from '../../images/icons/instagram-icon.svg';
import newsletterIcon from '../../images/icons/email-icon.svg';
import cookies from '../../utils/cookies';

interface Props { // type definition for props
  onOpenLanguageSelect: () => void;
  onOpenCookieSettings: () => void;
}

const WebsiteFooter: FC<Props> = ({ onOpenLanguageSelect, onOpenCookieSettings }: Props) => {
  const dispatch: Dispatch<AnyAction> = useDispatch(); // used to manipulate global state (react redux)

  const themeText: string = useSelector((state: any) => state.theme.value); // current light or dark mode text based on theme

  const onChangeTheme = (theme: string): void => { // function to swap the current theme
    dispatch(changeTheme(theme)); // changes the theme

    if (
      cookies.getCookie('accepted-cookies') &&
      JSON.parse(cookies.getCookie('accepted-cookies')).functional
    ) { // checks if functional cookies are accepted
      localStorage.setItem('theme', theme); // if functional cookies are accepted, then the theme can be saved to localStorage
    }
  };

  return (
    <footer className={styles.website_footer}>
      {/*transition shape at the top*/}
      <div className={styles.website_footer_transition_left} />
      <div className={styles.website_footer_transition_right} />

      {/*columns of content*/}
      <section className={styles.website_footer_content}>
        {/*lists of footer links*/}
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
          <p className={styles.website_footer_heading}>Company</p>
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
          </span> {/*opens cookie settings banner*/}
        </nav>

        <nav>
          {/*mostly external links*/}
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

      {/*box at the bottom with social media links and other buttons*/}
      <section className={styles.website_footer_bottom_box}>
        <p className={styles.website_footer_bottom_box_copyright}>©Copyright 2023 Memoriter</p>

        {/*right text uses two classes, one for the hover effect, the theme text depends on the current theme*/}
        <p
          className={styles.website_footer_bottom_box_language}
          onClick={onOpenLanguageSelect}
        >
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

        {/*social media icons*/}
        <div className={styles.website_footer_bottom_box_social_media}>
          <a
            className={styles.website_footer_bottom_box_social_media_circle}
            style={{ left: '0' }}
            href='https://www.twitter.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className={styles.website_footer_bottom_box_social_media_icon}
              src={twitterIcon}
              alt='Twitter'
            />
          </a>
          <a
            className={styles.website_footer_bottom_box_social_media_circle}
            style={{ left: '60px' }}
            href='https://www.youtube.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className={styles.website_footer_bottom_box_social_media_icon}
              src={youtubeIcon}
              alt='Youtube'
            />
          </a>
          <a
            className={styles.website_footer_bottom_box_social_media_circle}
            style={{ right: '60px' }}
            href='https://www.instagram.com/memorit.er/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className={styles.website_footer_bottom_box_social_media_icon}
              src={instagramIcon}
              alt='Instagram'
            />
          </a>
          <Link
            className={styles.website_footer_bottom_box_social_media_circle}
            style={{ right: '0' }}
            to='/newsletter'
          >
            <img
              className={styles.website_footer_bottom_box_social_media_icon}
              src={newsletterIcon}
              alt='Newsletter'
            />
          </Link>
        </div>
      </section>
    </footer>
  );
};
export default WebsiteFooter;