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

        <h2>Information in accordance with §5 TMG (Telemediengesetz)</h2>
        <ul>
          <li>Memoriter LLC</li>
          <li>Business ID: 1372720</li>
          <li>Rudolf-Breitscheid-Straße 160c, upstairs first room on the right, bed</li>
          <li>14482 Potsdam, Germany</li>
          <li>Email: contact@memoriter.de</li>
        </ul>

        <h2>Representative</h2>
        <ul>
          <li>Johan Trieloff</li>
          <li>Rudolf-Breitscheid-Straße 160c</li>
          <li>14482 Potsdam, Germany</li>
          <li>Phone: +49 160 7000697</li>
          <li>Email: johan@memoriter.de</li>
        </ul>

        <h2>Copyright</h2>
        <p>
          As a student and community driven project, we decided to distribute Memoriter as an open
          source software. Therefore our own content on the website and of our services is licensed
          under the{' '}
          <a
            href='https://github.com/MemoriterApp/Memoriter/blob/main/LICENSE'
            target='_blank'
            rel='noreferrer'
          >
            GNU General Public License v3.0
          </a>
          . Nevertheless we try to respect the copyrights of third parties in our services. Should
          you become aware of a copyright infringement, please inform us accordingly, so we can
          remove such content.
        </p>
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
