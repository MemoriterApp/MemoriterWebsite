import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as styles from '../../styles/about/about-team.module.scss';

const AboutTeam: FC = () => {
  return (
    <section className={styles.about_team}>
      <h1 className={styles.about_team_title}>Our Team</h1>

      {/* team member cards */}
      <div className={styles.about_team_container}>
        <AnimationOnScroll
          className={styles.about_team_card}
          animateIn={styles.about_team_animation_fade_in_down}
          animateOut={styles.about_team_animation_fade_in_down}
        >
          <div>
            <h2>Johan T.</h2>
            <p>
              Hello, I am leading the development of Memoriter. I make sure that we stay on track
              and move toward our goals and creative vision. I also help with the development of the
              website and the app.
            </p>
          </div>
          <StaticImage
            className={styles.about_team_card_image}
            src='../../images/about/placeholder-square.jpg'
            alt='placeholder'
          />
        </AnimationOnScroll>

        <AnimationOnScroll
          className={styles.about_team_card}
          animateIn={styles.about_team_animation_fade_in_down}
          animateOut={styles.about_team_animation_fade_in_down}
        >
          <div>
            <h2>Simon H.</h2>
            <p>
              Hi! I am Simon, the main developer of our application. I am mostly responsible for
              writing the code for new and often more complex features while also trying to clean up
              our shitty legacy code.
            </p>
          </div>
          <StaticImage
            className={styles.about_team_card_image}
            src='../../images/about/placeholder-square.jpg'
            alt='placeholder'
          />
        </AnimationOnScroll>
      </div>

      <div className={styles.about_team_container}>
        <AnimationOnScroll
          className={styles.about_team_card}
          animateIn={styles.about_team_animation_fade_in_down}
          animateOut={styles.about_team_animation_fade_in_down}
        >
          <div>
            <h2>Alexander I.</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam
            </p>
          </div>
          <StaticImage
            className={styles.about_team_card_image}
            src='../../images/about/placeholder-square.jpg'
            alt='placeholder'
          />
        </AnimationOnScroll>

        <AnimationOnScroll
          className={styles.about_team_card}
          animateIn={styles.about_team_animation_fade_in_down}
          animateOut={styles.about_team_animation_fade_in_down}
        >
          <div>
            <h2>Ale F.</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam
            </p>
          </div>
          <StaticImage
            className={styles.about_team_card_image}
            src='../../images/about/placeholder-square.jpg'
            alt='placeholder'
          />
        </AnimationOnScroll>
      </div>

      <div className={styles.about_team_container}>
        <AnimationOnScroll
          className={styles.about_team_card}
          animateIn={styles.about_team_animation_fade_in_down}
          animateOut={styles.about_team_animation_fade_in_down}
        >
          <div>
            <h2>Saga B.</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam
            </p>
          </div>
          <StaticImage
            className={styles.about_team_card_image}
            src='../../images/about/placeholder-square.jpg'
            alt='placeholder'
          />
        </AnimationOnScroll>

        <AnimationOnScroll
          className={styles.about_team_card}
          animateIn={styles.about_team_animation_fade_in_down}
          animateOut={styles.about_team_animation_fade_in_down}
        >
          <div>
            <h2>Simon K.</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam
            </p>
          </div>
          <StaticImage
            className={styles.about_team_card_image}
            src='../../images/about/placeholder-square.jpg'
            alt='placeholder'
          />
        </AnimationOnScroll>
      </div>

      <AnimationOnScroll
        animateIn={styles.about_team_animation_fade_in_down}
        animateOut={styles.about_team_animation_fade_in_down}
      >
        <p className={styles.about_team_end}>
          For <em>Students</em> by <em>Students</em>.
        </p>
      </AnimationOnScroll>
    </section>
  );
};
export default AboutTeam;
