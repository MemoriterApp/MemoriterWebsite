import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';
import DownloadBanner from '../components/download/download-banner';
import DownloadMain from '../components/download/download-main';
import DownloadMobile from '../components/download/download-mobile';

const Download: FC = () => {
  return (
    <WebsiteLayout currentPage='download'>
      {/* banner with download buttons */}
      <DownloadBanner />

      {/* main part */}
      <DownloadMain />

      {/* mobile app download */}
      <DownloadMobile />
    </WebsiteLayout>
  );
};

export default Download;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Download'
      description='Prefer a desktop or mobile application of Memoriter? Download the corresponding apps now!'
      keywords='download, app, desktop, mobile'
      type='website'
    />
  );
};
