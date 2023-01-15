import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/legal.module.scss';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';

const Impressum: FC = () => {
  return (
    <WebsiteLayout currentPage=''>
      {/* main body with text */}
      <article className={styles.legal_main}>
        <h1>Impressum</h1>

        <h2>Information in accordance with § 5 TMG</h2>
        <ul>
          <p>Memoriter LLC.</p>
          <p>Business ID: 1372720</p>
          <p>Rudolf-Breitscheid-Straße 160c, upstairs first room on the right, bed</p>
          <p>14482 Potsdam, Germany</p>
        </ul>


        <h2>Representative:</h2>
        <ul>
          <li>Johan Trieloff</li>
          <li>Rudolf-Breitscheid-Straße 160c</li>
          <li>14482 Potsdam, Germany</li>
          <li>Phone: +49 160 7000697</li>
          <li>Email: johan@memoriter.de</li>
        </ul>
      </article>
    </WebsiteLayout>
  );
};
export default Impressum;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Impressum'
      description='How to contact us.'
      keywords='impressum, legal'
      type='website'
    />
  );
};
