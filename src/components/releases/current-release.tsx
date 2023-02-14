import React, { FC } from 'react';
import * as styles from '../../styles/releases/current-release.module.scss';

interface Props {
  date: string;
  html: string;
}

const CurrentRelease: FC<Props> = ({ date, html }: Props) => {
  // date string converted into a readable thing
  const convertedDate: string = new Date(date).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });

  return (
    <section className={styles.current_release}>
      <p className={styles.current_release_date}>{convertedDate}</p>

      {/* content generated from markdown file */}
      <article dangerouslySetInnerHTML={{ __html: html }} />

      <p className={styles.current_release_end}>
        We hope you enjoy the new update!
        <br />- Memoriter Development Team
      </p>

      <h1 className={styles.current_release_older_releases}>Older Releases:</h1>
    </section>
  );
};
export default CurrentRelease;
