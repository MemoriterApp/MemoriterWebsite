import React, { FC } from 'react';
import * as styles from '../../styles/releases/old-release.module.scss';

interface Props {
  date: string;
  html: string;
}

const ReleaseV10: FC<Props> = ({ date, html }: Props) => {
  // date string converted into a readable thing
  const convertedDate: string = new Date(date).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });

  return (
    <section className={styles.old_release}>
      <p className={styles.old_release_date}>{convertedDate}</p>

      {/* content generated from markdown file */}
      <article dangerouslySetInnerHTML={{ __html: html }} />

      <p
        className={styles.old_release_end}
      >
        We hope you enjoyed this update!
        <br />- Memoriter Development Team
      </p>
    </section>
  );
};

export default ReleaseV10;
