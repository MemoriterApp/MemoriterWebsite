import React, { FC, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import * as styles from '../../styles/layout/website-header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { changeTheme } from '../../features/theme-slice';
import cookies from '../../utils/cookies';
import memoriterLogoWhite from '../../images/memoriter-logo-white.svg';
import memoriterLogoBlack from '../../images/memoriter-logo-black.svg';
import emoji1f30d from '../../images/emoji/1f30d.svg';
import emoji1f312 from '../../images/emoji/1f312.svg';
import emoji26c5 from '../../images/emoji/26c5.svg';

// type definitions for props
interface Props {
  currentPage: string;
  onOpenLanguageSelect: () => void;
}

const WebsiteHeader: FC<Props> = ({ currentPage, onOpenLanguageSelect }: Props) => {
  const dispatch: Dispatch<AnyAction> = useDispatch(); // used to manipulate global state (react redux)

  const [onHover, setOnHover] = useState<string>('brightness(1)'); // variable for the hover effect for the register button
  const [onHoverAlt, setOnHoverAlt] = useState<string>('brightness(1)'); // hover effect for alternative mobile register button

  const [mobileSidebar, setMobileSidebar] = useState<string>('-280px'); // variable if the mobile nav sidebar is open or not
  function toggleMobileSidebar() {
    // function for opening and closing the mobile nav sidebar
    if (mobileSidebar === '-280px') {
      // if else condition is for opening and closing correctly
      setMobileSidebar('0');
    } else {
      setMobileSidebar('-280px');
    }
  }

  const [scrollProgress, setScrollProgress] = useState<number>(0); // value for the scroll progress
  // getting the scroll progress data
  const onScroll = (): void => {
    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled: number = (scroll / height) * 100;
    setScrollProgress(scrolled);
  };

  // attaching an event listener to detect when the user is scrolling
  useEffect((): any => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const themeIcon: string = useSelector((state: any) => state.theme.value); // current light or dark mode icon based on theme

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
    <header className={styles.website_header}>
      {/* If you click the logo, you will be redirected to the product page. */}
      <Link to='/'>
        <img
          className={styles.website_header_logo}
          src={themeIcon === 'dark' ? memoriterLogoWhite : memoriterLogoBlack}
          alt='Memoriter'
        />
      </Link>

      {/* button for expanding side bar for small screens */}
      <button className={styles.website_header_mobile_sidebar_button} onClick={toggleMobileSidebar}>
        <div className={styles.website_header_mobile_sidebar_icon}>|||</div>
      </button>

      {/*quicklinks (navigation bar)*/}
      <nav className={styles.website_header_quicklinks} style={{ right: mobileSidebar }}>
        {/* expandable mobile nav sidebar, displays when button is clicked (changes className) */}
        <Link className={styles.website_header_quicklink} to='/'>
          {currentPage === 'product' ? (
            <span className={styles.website_header_text_gradient}>Product</span>
          ) : (
            <span>Product</span>
          )}
        </Link>
        <Link className={styles.website_header_quicklink} to='/about'>
          {currentPage === 'about' ? (
            <span className={styles.website_header_text_gradient}>About</span>
          ) : (
            <span>About</span>
          )}
        </Link>
        <Link className={styles.website_header_quicklink} to='/blog'>
          {currentPage === 'blog' ? (
            <span className={styles.website_header_text_gradient}>Blog</span>
          ) : (
            <span>Blog</span>
          )}
        </Link>
        <Link className={styles.website_header_quicklink} to='/download'>
          {currentPage === 'download' ? (
            <span className={styles.website_header_text_gradient}>Download</span>
          ) : (
            <span>Download</span>
          )}
        </Link>
        <Link className={styles.website_header_quicklink} to='/donate'>
          {currentPage === 'donate' ? (
            <span className={styles.website_header_text_gradient}>Donate</span>
          ) : (
            <span>Donate</span>
          )}
        </Link>
        {/* change language button */}
        <button className={styles.website_header_language_button}>
          <img
            className={styles.website_header_icon}
            src={emoji1f30d}
            alt='🌍'
            onClick={() => onOpenLanguageSelect()}
          />
        </button>
        {/* the if else conditions changes the color of the links depending on the current open page */}
        {/* light and dark mode buttons, icon depends on the current mode */}
        {(themeIcon === 'dark' || !themeIcon) && (
          <button
            className={styles.website_header_theme_button}
            onClick={() => onChangeTheme('light')}
          >
            <img className={styles.website_header_icon} src={emoji26c5} alt='⛅' />
          </button>
        )}
        {themeIcon === 'light' && (
          <button
            className={styles.website_header_theme_button}
            onClick={() => onChangeTheme('dark')}
          >
            <img className={styles.website_header_icon} src={emoji1f312} alt='🌒' />
          </button>
        )}
        {/* sign in and register buttons */}
        <a className={styles.website_header_sign_in} href='https://app.memoriter.de/login'>
          <span className={styles.website_header_text_gradient}>Sign in</span>
        </a>
        <a
          className={styles.website_header_register}
          href='https://app.memoriter.de/signup'
          onMouseEnter={() => setOnHover('brightness(0.75)')}
          onMouseLeave={() => setOnHover('brightness(1)')}
        >
          Register
          <div className={styles.website_header_register_background} style={{ filter: onHover }} />
        </a>
        <div className={styles.website_header_quicklinks_space} />
        {/* space at the end for scrolling at the nav sidebar */}
      </nav>

      {/* alternative sign in and register button for mobile nav sidebar, staying at the default position */}
      <a className={styles.website_header_sign_in_alt} href='https://app.memoriter.de/login'>
        <span className={styles.website_header_text_gradient}>Sign in</span>
      </a>
      <a
        className={styles.website_header_register_alt}
        href='https://app.memoriter.de/signup'
        onMouseEnter={() => setOnHoverAlt('brightness(0.75)')}
        onMouseLeave={() => setOnHoverAlt('brightness(1)')}
      >
        Register
        <div className={styles.website_header_register_background} style={{ filter: onHoverAlt }} />
      </a>

      {/* scroll indicator */}
      <div
        className={styles.website_header_scroll_indicator}
        style={{ width: `${scrollProgress}%` }}
      />
      {/* the width is calculated by the scrollProgress variable and defines the width of the bar */}
    </header>
  );
};
export default WebsiteHeader;
