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
          <article>
            <h2>Johan T.</h2>
            <p>
              Hello, I am the CEO (Chief Enterprise Officer) and overal COA (Chief Officer of
              Awesomeness) of Memoriter. I make sure that we stay on track and move toward our goals
              and creative vision. I also help with the development of the website and the app.
            </p>
          </article>
          <StaticImage
            className={styles.about_team_card_image}
            src='../../images/about/johan.jpg'
            alt='placeholder'
          />
        </AnimationOnScroll>

        <AnimationOnScroll
          className={styles.about_team_card}
          animateIn={styles.about_team_animation_fade_in_down}
          animateOut={styles.about_team_animation_fade_in_down}
        >
          <article>
            <h2>Simon H.</h2>
            <p>
              Hi! I am Simon, the DCE (Director of Content Execution) and CRC (Chief Representative
              of Cleanliness) of our application. I am mostly responsible for writing the code for
              new and often more complex features while also trying to clean up our shitty legacy
              code.
            </p>
          </article>
          <StaticImage
            className={styles.about_team_card_image}
            src='../../images/about/simon.jpg'
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
          <article>
            <h2>Alexander I.</h2>
            <p>
              Good day, I the CSS (Chief of Sassy Stylesheets) on the Memoriter team. I create new
              ideas and turn them into reality, I mostly work on the frontend of the app.
            </p>
          </article>
          <StaticImage
            className={styles.about_team_card_image}
            src='../../images/about/alexander.jpg'
            alt='placeholder'
          />
        </AnimationOnScroll>

        <AnimationOnScroll
          className={styles.about_team_card}
          animateIn={styles.about_team_animation_fade_in_down}
          animateOut={styles.about_team_animation_fade_in_down}
        >
          <article>
            <h2>Ale F.</h2>
            <p>
              I am Ale, the Minister of Marketing Marvels and responsible for reaching as many
              people as possible with our app. I am also the one who makes sure that our finances
              are in order.
            </p>
          </article>
          <StaticImage
            className={styles.about_team_card_image}
            src='../../images/about/ale.jpg'
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
          <article>
            <h2>Saga B.</h2>
            <p>
              Hej, people call me the Graphic Guru General and I am responsible for the design of
              the app. I also run the social media accounts and make sure that we have a good
              presence on the internet.
            </p>
          </article>
          <StaticImage
            className={styles.about_team_card_image}
            src='../../images/about/saga.jpg'
            alt='placeholder'
          />
        </AnimationOnScroll>

        <AnimationOnScroll
          className={styles.about_team_card}
          animateIn={styles.about_team_animation_fade_in_down}
          animateOut={styles.about_team_animation_fade_in_down}
        >
          <article>
            <h2>Simon K.</h2>
            <p>
              Hi I am the Commander of Community Connections and I am responsible for the community
              of Memoriter. I make sure that we have a good relationship with our users and that
              they are happy with our app. When I am not doing that I am working on the development
              of the app.
            </p>
          </article>
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
          <article>
            <h2>Greg G.</h2>
            <p>
              Hello, I am the CTO of Memoriter, people there call me the Guardian of the Backend
              since I develop the Backend of the app.
            </p>
          </article>
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
          <h2>... and the community and all former contributors to the project.</h2>
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
