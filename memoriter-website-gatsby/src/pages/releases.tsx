import React, { FC, useState } from 'react';
import { HeadFC, graphql } from 'gatsby';
import '../styles/releases/releases-main.scss';
import '../styles/releases/old-release.scss';
import WebsiteHead from '../components/website-head';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import CurrentRelease from '../components/releases/current-release';
import OldRelease from '../components/releases/old-release';

interface Props {
  data: {allMarkdownRemark: {nodes: {frontmatter: {date: string}, html: string, id: string}[]}};
}

const Releases: FC<Props> = ({ data }: Props) => {

  const releases = data.allMarkdownRemark.nodes; // list of all releases

  const [loadedReleases, setLoadedReleases] = useState<number>(5); //number of releases shown before clicking on the load more button

  return (
    <WebsiteWrapper currentPage=''>

      {/*main body*/}
      <section className='releases-main'>

      <h1 className='releases-main-title'>Release Notes</h1>

      {/*current version with other style*/}
      {releases.slice(0, 1).map(
        (release: {id: string, frontmatter: {date: string}, html: string}) => (
          <CurrentRelease key={release.id} date={release.frontmatter.date} html={release.html}/>
        )
      )}

      {/*older versions, gets data from the releases array, where all components are stored, just gets a part of the array*/}
      {releases.slice(1, loadedReleases).map(
        (release: {id: string, frontmatter: {date: string}, html: string}) => (
          <OldRelease key={release.id} date={release.frontmatter.date} html={release.html}/>
        )
      )}

      {/*load more button, onClick just adds five to the number of the maximum of shown releases. The button is just shown if necessary.*/}
      {loadedReleases <= releases.length - 1 ? (
        <button className='releases-main-button' onClick={() => setLoadedReleases(loadedReleases + 5)}>Load More...</button>
        ) : (
        <div/>
      )}

      </section>
            
    </WebsiteWrapper>
  );
};
export default Releases;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Release Notes'
      description='A list of which features were added or changed in the past.'
      keywords='releases, patch notes, update'
      type='website'
    />
  );
};

export const query = graphql`
  query ReleasesQuery {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/(releases)/"}}
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
`