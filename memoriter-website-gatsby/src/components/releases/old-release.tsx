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
        day: 'numeric'
    });

    return (
        <section className={styles.old_release}>

            {/*release date*/}
            <p className={styles.old_release_date}>{convertedDate}</p>
            
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