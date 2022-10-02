import React, { FC } from 'react';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import DownloadBanner from '../components/download/download-banner';
import DownloadMain from '../components/download/download-main';
import DownloadMobile from '../components/download/download-mobile';

const Download: FC = () => {
    return (
        <WebsiteWrapper
            title='Download'
            description='Prefer a desktop or mobile application? Download the corresponding apps now!'
            currentPage='download'
        >
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