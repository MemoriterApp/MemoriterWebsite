import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import WebsiteHead from '../components/website-head';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import DownloadBanner from '../components/download/download-banner';
import DownloadMain from '../components/download/download-main';
import DownloadMobile from '../components/download/download-mobile';

const Download: FC = () => {
    return (
        <WebsiteWrapper currentPage='download'>
            {/*banner with download buttons*/}
            <DownloadBanner/>

            {/*main part*/}
            <DownloadMain/>

            {/*mobile app download*/}
            <DownloadMobile/>

        </WebsiteWrapper>
    );
}

export default Download;

export const Head: HeadFC = (): React.ReactElement => {
    return (
        <WebsiteHead
            title='Download'
            description='Prefer a desktop or mobile application? Download the corresponding apps now!'
            keywords='download, app, desktop, mobile'
            type='website'
        />
    );
};