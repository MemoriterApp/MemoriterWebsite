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
            Our vision at Memoriter is to revolutionize the way students learn by providing an
            efficient and accessible all-in-one learning environment. We saw a need to address the
            problem of students spending excessive amounts of time studying due to inefficient
            methods. By making Memoriter open-source and free, we aim to make it accessible to as
            many people as possible. Our goal is not to profit off of this project, but to create a
            tool that can truly benefit students in their academic journey.
          </p>
        </AnimationOnScroll>
        <StaticImage
          className={styles.default_main_container_image}
          src='../../images/about/stressed.png'
          alt='An overworked student'
        />
      </article>
      <article className={styles.default_main_container}>
        <StaticImage
          className={styles.default_main_container_image}
          src='../../images/about/school.png'
          alt='Our (former) school'
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
            team of seven students from Germany and Sweden. We are still in school and we are
            working on Memoriter in our free time. We encountered the problems of inefficient
            studying methods and we wanted to create a solution that is accessible to everyone.
            Wanted to offer a cheap, open-source and overal better alternative to the existing
            learning platforms.
          </p>
        </AnimationOnScroll>
      </article>

      {/* our team section */}
      <AboutTeam />
    </section>
  );
};
export default AboutMain;
