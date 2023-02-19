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
              Hello, I am the CEO (Chief-Enterprise-Officer) and overal COA (Chief-Officer-of-Awesomeness) of Memoriter. I make sure that we stay on track
              and move toward our goals and creative vision. I also help with the development of the website and the app.
            </p>
            <p>contact: johan@memoriter.de</p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>

        <article className={styles.about_team_card}>
          <div>
            <h2>Simon H.</h2>
            <p>
              Hi! I am Simon, the DCE (Director-of-Conent-Execution) and CRC (Chief-representative of Cleanliness) of our application. I am mostly responsible for
              writing the code for new and often more complex features while also trying to clean up
              our shitty legacy code.
            </p>
            <p>contact: simon@memoriter.de</p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>
      </div>

      <div className={styles.about_team_container}>
        <article className={styles.about_team_card}>
          <div>
            <h2>Alexander I.</h2>
            <p>
              Good day, I the CSS (Chief-of-sassy-Style-Shests) on the Memoriter team. I create new ideas and turn them into reality, I mostly work on the frontend of the app.
            </p>
            <p>contact: alexander@memoriter.de</p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>

        <article className={styles.about_team_card}>
          <div>
            <h2>Ale F.</h2>
            <p>
              I am Ale, the Minister of Marketing Marvels and responsible for reaching as many people as possible with our app. I am also the one who makes sure that our finances are in order.
            </p>
            <p>contact: ale@memoriter.de</p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>
      </div>

      <div className={styles.about_team_container}>
        <article className={styles.about_team_card}>
          <div>
            <h2>Saga B.</h2>
            <p>
              Hej, people call me the Graphic Guru General and I am responsible for the design of the app. 
              I also run the social media accounts and make sure that we have a good presence on the internet.
            </p>
            <p>contact: saga@memoriter.de</p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>

        <article className={styles.about_team_card}>
          <div>
            <h2>Simon K.</h2>
            <p>
              Hi I am the Commander of Community Connections and I am responsible for the community of Memoriter.
              I make sure that we have a good relationship with our users and that they are happy with our app. When I am not doing that I am working on the development of the app.
            </p>
            <p>contact: simon.kalitta@memoriter.de</p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>
      </div>
      <div className={styles.about_team_container}>
        <article className={styles.about_team_card}>
          <div>
            <h2>Greg G.</h2>
            <p>
              Hello, I am the CTO of Memoriter people at Memoriter call me the guardian of the Backend since I develop the Backend of the app. 
            </p>
            <p>contact: greg@memoriter.de</p>
          </div>
          <img src={placeholderImage} alt='placeholder' />
        </article>
      </div>
    </section>
  );
};
export default AboutTeam;