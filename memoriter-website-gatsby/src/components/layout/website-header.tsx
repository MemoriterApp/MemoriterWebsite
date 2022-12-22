import React, { FC, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import * as styles from '../../styles/layout/website-header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { changeTheme } from '../../features/theme-slice';
import memoriterLogo from '../../images/memoriter-logo.svg';
import languageIcon from '../../images/icons/language-icon.svg';
import lightModeIcon from '../../images/icons/light-mode-icon.svg';
import darkModeIcon from '../../images/icons/dark-mode-icon.svg';
import cookies from '../../utils/cookies';

interface Props { // type definitions for props
  currentPage: string;
  onOpenLanguageSelect: () => void;
}

const WebsiteHeader: FC<Props> = ({ currentPage, onOpenLanguageSelect }: Props) => {
  const dispatch: Dispatch<AnyAction> = useDispatch(); // used to manipulate global state (react redux)

  const [onHover, setOnHover] = useState<string>('brightness(1)'); // variable for the hover effect for the register button
  const [onHoverAlt, setOnHoverAlt] = useState<string>('brightness(1)'); // hover effect for alternative mobile register button

  const [mobileSidebar, setMobileSidebar] = useState<string>('-280px'); // variable if the mobile nav sidebar is open or not
  function toggleMobileSidebar() { // function for opening and closing the mobile nav sidebar
    if (mobileSidebar === '-280px') { // if else condition is for opening and closing correctly
      setMobileSidebar('0');
    } else {
      setMobileSidebar('-280px');
    }
  }

  const [scrollProgress, setScrollProgress] = useState<number>(0); // value for the scroll progress
  const onScroll = (): void => { // getting the scroll data
    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled: number = (scroll / height) * 100;

    setScrollProgress(scrolled);
  };

  useEffect((): any => { // the useEffect is important for getting the value if it is scrolling
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const themeIcon: string = useSelector((state: any) => state.theme.value); // current light or dark mode icon based on theme

  const onChangeTheme = (theme: string): void => { // function to swap the current theme
    dispatch(changeTheme(theme)); // changes the theme

    if ( // checks if functional cookies are accepted
      cookies.getCookie('accepted-cookies') &&
      JSON.parse(cookies.getCookie('accepted-cookies')).functional
    ) {
      localStorage.setItem('theme', theme); // if functional cookies are accepted, then the theme can be saved to localStorage
    }
  };

  return (
    <header className={styles.website_header}>
      {/*If you click the logo, you will be redirected to the product page.*/}
      <Link to='/'>
        <img className={styles.website_header_logo} src={memoriterLogo} alt='Memoriter' />
      </Link>

      {/*button for expanding side bar for small screens*/}
      <button className={styles.website_header_mobile_sidebar_button} onClick={toggleMobileSidebar}>
        <div className={styles.website_header_mobile_sidebar_icon}>|||</div>
      </button>

      {/*quicklinks (navigation bar)*/}
      <nav className={styles.website_header_quicklinks} style={{ right: mobileSidebar }}>
        {/*expandable mobile nav sidebar, displays when button is clicked (changes className)*/}
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
        {/*the if else conditions changes the color of the links depending on the current open page*/}
        {/*light and dark mode buttons, icon depends on the current mode*/}
        {(themeIcon === 'dark' || !themeIcon) && (
          <button className={styles.website_header_theme_button} onClick={() => onChangeTheme('light')}>
            <img className={styles.website_header_icon} src={lightModeIcon} alt='Light mode' />
          </button>
        )}
        {themeIcon === 'light' && (
          <button className={styles.website_header_theme_button} onClick={() => onChangeTheme('dark')}>
            <img className={styles.website_header_icon} src={darkModeIcon} alt='Dark mode' />
          </button>
        )}
        {/*change language button*/}
        <button className={styles.website_header_language_button}>
          <img
            className={styles.website_header_icon}
            src={languageIcon}
            alt='Language'
            onClick={onOpenLanguageSelect}
          />
        </button>
        {/*sign in and register buttons*/}
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
        {/*space at the end for scrolling at the nav sidebar*/}
      </nav>

      {/*alternative sign in and register button for mobile nav sidebar, staying at the default position*/}
      <a className={styles.website_header_sign_in_alt} href='https://app.memoriter.de/login'>
        <span className={styles.website_header_text_gradient}>Sign in</span>
      </a>
      <a
        className={styles.website_header_register_alt}
        href='https://app.memoriter.de/signup'
        onMouseEnter={() => setOnHover('brightness(0.75)')}
        onMouseLeave={() => setOnHover('brightness(1)')}
      >
        Register
        <div className={styles.website_header_register_background} style={{ filter: onHover }} />
      </a>

      {/*scroll indicator*/}
      <div className={styles.website_header_scroll_indicator} style={{ width: `${scrollProgress}%` }} />
      {/*the width is calculated by the scrollProgress variable and defines the width of the bar*/}
    </header>
  );
};
export default WebsiteHeader;