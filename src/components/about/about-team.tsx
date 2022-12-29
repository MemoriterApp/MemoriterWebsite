import React, { FC } from 'react';
import * as styles from '../../styles/about/about-team.module.scss';
import placeholderImage from '../../images/about/placeholder.jpg';

const AboutTeam = () => {
  return (
    <section className={styles.about_team}>
      <h1 className={styles.about_team_title}>Our Team</h1>

      {/* member cards */}
      <div className={styles.about_team_container}>
        <article className={styles.about_team_card}>
          <div>
            <h2>Johan T.</h2>
            <p>
              Hello, I am leading the development of Memoriter. I make sure that we stay on track
              and move toward our goals and creative vision. I also help with the development of the
              website and the app.
            </p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>

        <article className={styles.about_team_card}>
          <div>
            <h2>Simon H.</h2>
            <p>
              Hi! I am Simon, the main developer of our application. I am mostly responsible for
              writing the code for new and often more complex features while also trying to clean up
              our shitty legacy code.
            </p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>
      </div>

      <div className={styles.about_team_container}>
        <article className={styles.about_team_card}>
          <div>
            <h2>Alexander I.</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam
            </p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>

        <article className={styles.about_team_card}>
          <div>
            <h2>Ale F.</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam
            </p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>
      </div>

      <div className={styles.about_team_container}>
        <article className={styles.about_team_card}>
          <div>
            <h2>Saga B.</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam
            </p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>

        <article className={styles.about_team_card}>
          <div>
            <h2>Simon K.</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam
            </p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>
      </div>
    </section>
  );
};
export default AboutTeam;