import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from '../../styles/default-main.module.scss';
import AboutTeam from './about-team';

const AboutMain: FC = () => {
  return (
    <section className={styles.default_main}>
      {/*main parts with texts and images*/}
      <article className={styles.default_main_container}>
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_right}
          animateOut={styles.default_main_animation_fade_out_right}
        >
          {/*AnimationOnScroll starts an animation when it enters the viewport*/}
          <h1 className={styles.default_main_heading}>Our Vision</h1>
          <p className={styles.default_main_text}>
            We have experienced a lot of students spending more time studying then necessary because
            of ineffcient methods. We wanted to solve this problem with Memoriter as an
            all-in-one-learning-environment that is also free and accessible for everyone.
          </p>
        </AnimationOnScroll>
        <StaticImage
          className={styles.default_main_container_sub_image}
          src='../../images/about/placeholder.jpg'
          alt='placeholder'
        />
      </article>
      <article className={styles.default_main_container}>
        <StaticImage
          className={styles.default_main_container_sub_image}
          src='../../images/about/placeholder.jpg'
          alt='placeholder'
        />
        <AnimationOnScroll
          className={styles.default_main_container_sub}
          animateIn={styles.default_main_animation_fade_in_left}
          animateOut={styles.default_main_animation_fade_out_left}
        >
          {/*AnimationOnScroll starts an animation when it enters the viewport*/}
          <h1 className={styles.default_main_heading}>Our Story</h1>
          <p className={styles.default_main_text}>
            We started Memoriter as a hobby project in highschool. We kept going and now we are a
            team of 6 students from Germany and Sweden. We are still in school and we are working on
            Memoriter in our free time.
          </p>
        </AnimationOnScroll>
      </article>

      {/* our team section */}
      <AboutTeam />
    </section>
  );
};
export default AboutMain;
