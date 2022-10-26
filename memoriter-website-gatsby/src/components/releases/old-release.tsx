import React, { FC } from 'react';

interface Props {
    date: string;
    html: string;
}

const ReleaseV10: FC<Props> = ({ date, html }: Props) => {

    // date string converted into a readable thing
    const convertedDate: string = new Date(date).toLocaleString('en-us', {
        month: 'long',
        year: 'numeric',
        day: 'numeric'
    });

    return (
        <section className='old-release'>

            {/*release date*/}
            <p className='old-release-date'><span>{convertedDate}</span></p>
            
            {/*content*/}
            <article dangerouslySetInnerHTML={{ __html: html }}/>

            <p style={{fontFamily: 'var(--font-highlight)', textAlign: 'left', marginTop: '42px', marginBottom: '-42px'}}>
                We hope you enjoyed this update!
                <br/>
                - Memoriter Development Team
            </p>

        </section>
    );
}

export default ReleaseV10;