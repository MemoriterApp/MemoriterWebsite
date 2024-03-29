import React, { FC, useState } from 'react';
import { HeadFC, graphql } from 'gatsby';
import * as styles from '../styles/releases/releases-main.module.scss';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';
import CurrentRelease from '../components/releases/current-release';
import OldRelease from '../components/releases/old-release';

interface Props {
  data: {
    allMarkdownRemark: { nodes: { frontmatter: { date: string }; html: string; id: string }[] };
  };
}

type Release = {
  id: string;
  frontmatter: { date: string };
  html: string;
};

const Releases: FC<Props> = ({ data }: Props) => {
  const releases = data.allMarkdownRemark.nodes; // list of all releases

  const [loadedReleases, setLoadedReleases] = useState<number>(5); // number of releases shown before clicking on the load more button

  return (
    <WebsiteLayout currentPage=''>
      {/* main body*/}
      <section className={styles.releases_main}>
        <h1 className={styles.releases_main_title}>Release Notes</h1>

        {/* current version with other style */}
        {releases.slice(0, 1).map((release: Release) => (
          <CurrentRelease key={release.id} date={release.frontmatter.date} html={release.html} />
        ))}

        {/* older versions, gets data from the releases array, where all components are stored, just gets a part of the array */}
        {releases.slice(1, loadedReleases).map((release: Release) => (
          <OldRelease key={release.id} date={release.frontmatter.date} html={release.html} />
        ))}

        {/* load more button, onClick just adds five to the number of the maximum of shown releases. The button is just shown if necessary. */}
        {loadedReleases <= releases.length - 1 ? (
          <button
            onClick={() => setLoadedReleases(loadedReleases + 5)}
          >
            Load More...
          </button>
        ) : (
          <div />
        )}
      </section>
    </WebsiteLayout>
  );
};
export default Releases;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Release Notes'
      description='The progress of Memoriter over time: a list of which features were added or changed in the past (and which bugs were fixed :D).'
      keywords='releases, patch notes, update'
      type='website'
    />
  );
};

export const query = graphql`
  query ReleasesQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/(releases)/" } }
    ) {
      nodes {
        frontmatter {
          date
        }
        html
        id
      }
    }
  }
`;
