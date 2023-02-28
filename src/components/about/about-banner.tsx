import React, { FC, useEffect, useState } from 'react';
import * as styles from '../../styles/about/about-banner.module.scss';

const AboutBanner: FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0); // value for the scroll progress
  // getting the scroll data
  const onScroll = (): void => {
    const scroll: number = document.documentElement.scrollTop;
    const height: number =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled: number = (scroll / height) * 100;
    setScrollProgress(scrolled);
  };

  // the useEffect is important for getting the value if it is scrolling
  useEffect((): any => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.about_banner}>
      {/* background circles, size changes when you scroll down */}
      <div
        className={styles.about_banner_circle_top}
        style={{ left: `calc(-1 * ${scrollProgress}vh - 50vh` }}
      />
      <div
        className={styles.about_banner_circle_bottom}
        style={{ right: `calc(-1 * ${scrollProgress}vh - 50vh` }}
      />

      {/* content */}
      <p className={styles.about_banner_content}>
        <em>Our goal</em> — find out how we contribute to better <em>education</em> for everyone.
      </p>

      {/* transition shape at the bottom */}
      <div className={styles.about_banner_transition} />
    </section>
  );
};
export default AboutBanner;
