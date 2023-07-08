import React, { FC, useEffect, useState } from 'react';
import * as styles from '../../styles/product/product-banner.module.scss';

const ProductBanner: FC = () => {
  const [onHover, setOnHover] = useState<string>('brightness(1)'); // variable for the hover effect for the get started button
  const [triangleEffect, setTriangleEffect] = useState<string>('0'); // variable for background animation when hovering on the gat started button
  const [triangleTransition, setTriangleTransition] = useState<string>('none'); // variable for background animation transition (this does not trigger when scrolling)

  const [scrollProgress, setScrollProgress] = useState<number>(0); // value for the scroll progress
  // getting the scroll data
  const onScroll = (): void => {
    if (typeof document !== 'undefined') {
      const scroll: number = document.documentElement.scrollTop;
      const height: number =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled: number = (scroll / height) * 100;
      setScrollProgress(scrolled);
    }
  };

  // the useEffect is important for getting the value if it is scrolling
  useEffect((): any => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <section className={styles.product_banner}>
      {/* background triangles, size changes when you scroll down or hover over the button */}
      <div
        className={styles.product_banner_triangle_top}
        style={{
          right: `calc(-1.5 * ${scrollProgress}vh - ${triangleEffect}vh`,
          transition: triangleTransition,
        }}
      />
      <div
        className={styles.product_banner_triangle_bottom}
        style={{
          left: `calc(-1.5 * ${scrollProgress}vh - ${triangleEffect}vh`,
          transition: triangleTransition,
        }}
      />

      {/* content */}
      <article className={styles.product_banner_content}>
        {/* slogan */}
        <p>Memoriter — the flashcard app that lets you remember more!</p>
        <p>
          Work with the effective memorizing tools of Memoriter to quickly achieve successful results.
        </p>

        {/* get started button for redirecting to register page */}
        <a
          className={styles.product_banner_get_started}
          href='https://app.memoriter.de/signup'
          onMouseEnter={() => {
            setOnHover('brightness(0.75)');
            setTriangleEffect('10');
            setTriangleTransition('400ms');
          }}
          onMouseLeave={() => {
            setOnHover('brightness(1)');
            setTriangleEffect('0');
            setTimeout(() => {
              setTriangleTransition('none');
            }, 400);
          }}
        >
          Get Started
          <div
            className={styles.product_banner_get_started_background}
            style={{ filter: onHover }}
          />
        </a>
      </article>

      {/* transition shape at the bottom */}
      <div className={styles.product_banner_transition} />
    </section>
  );
};
export default ProductBanner;
