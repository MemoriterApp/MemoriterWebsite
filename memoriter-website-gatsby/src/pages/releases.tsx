import React, { FC, useState } from 'react';
import { HeadFC } from 'gatsby';
import '../styles/releases/releases-main.css';
import '../styles/releases/old-release.css';
import WebsiteWrapper from '../components/wrapper/website-wrapper';

import CurrentRelease from '../components/releases/current-release';
import ReleaseV10 from '../components/releases/release-v1.0';
import ReleaseV11 from '../components/releases/release-v1.1';

const Releases: FC = () => {

    const releases: React.ReactNode[] = [ //variable with all components with the notes of all older/outdated updates
        <ReleaseV11 key={1.1}/>,
        <ReleaseV10 key={1.0}/>
    ];

    const [loadedReleases, setLoadedReleases] = useState<number>(5); //number of releases shown before clicking on the load more button

    return (
        <WebsiteWrapper
            title='Release Notes'
            description='A list of which features were added or changed in the past.'
            currentPage=''
        >

            {/*main body*/}
            <section className='releases-main'>

                {/*current version with other style*/}
                <CurrentRelease/>

                {/*older versions, gets data from the releases array, where all components are stored, just gets a part of the array*/}
                {releases.slice(0, loadedReleases)}

                {/*load more button, onClick just adds five to the number of the maximum of shown releases. The button is just shown if necessary.*/}
                {loadedReleases <= releases.length - 1 ? (
                    <button className='releases-main-button' onClick={() => setLoadedReleases(loadedReleases + 5)}>Load More...</button>) : (<div/>)
                }

            </section>
            
        </WebsiteWrapper>
    );
}

export default Releases;

export const Head: HeadFC = () => <title>Memoriter | Release Notes</title>;