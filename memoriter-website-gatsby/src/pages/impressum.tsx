import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/legal.module.scss';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';

const Impressum: FC = () => {
  return (
    <WebsiteLayout currentPage=''>
      {/*main body with text*/}
      <article className={styles.legal_main}>
        <h1>Impressum</h1>

        <p>
          Memoriter is a student company at the Bertha-von-Bertha-Suttner-Gymnasium Babelsberg in
          Potsdam, Germany, under the supervision of JUNIOR, a project by the Institut der Deutchen
          Wirtschaft (IW), supported by the Bundesministerium für Wirtschaft und Klimaschutz (BMWK).
          Further information about the JUNIOR project can be found{' '}
          <a href='https://www.junior-programme.de/startseite' target='_blank' rel='noreferrer'>
            here
          </a>
          .
        </p>

        <h2>Contact:</h2>
        <ul>
          <li>Johan Trieloff</li>
          <li>Kopernikusstraße 30</li>
          <li>14482 Potsdam, Germany</li>
          <li>Phone: +49 (0)221 | 4981-707</li>
          <li>Email: johan@trieloff.net</li>
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