import React, { FC } from 'react';
import '../../styles/releases/current-release.scss';

interface Props {
    date: string;
    html: string;
}

const CurrentRelease: FC<Props> = ({ date, html }: Props) => {
    
    // date string converted into a readable thing
    const convertedDate: string = new Date(date).toLocaleString('en-us', {
        month: 'long',
        year: 'numeric',
        day: 'numeric'
    });
    
    return (
        <section className='current-release'>
       
            {/*release date*/}
            <p className='current-release-date'><span>{convertedDate}</span></p>

            {/*content*/}
            <article dangerouslySetInnerHTML={{ __html: html }}/>

            <p style={{fontFamily: 'var(--font-highlight)', textAlign: 'left', marginTop: '40px', marginBottom: '60px'}}>
                We hope you enjoy the new update!
                <br/>
                - Memoriter Development Team
            </p>

            <h1 style={{marginTop: '90px', marginBottom: '-20px'}}>Older Releases:</h1>

        </section>
    );
};

export default CurrentRelease;