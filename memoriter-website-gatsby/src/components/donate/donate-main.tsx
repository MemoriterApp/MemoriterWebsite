import React, { FC } from 'react';
import * as styles from '../../styles/donate/donate-main.module.scss';

const DonateMain: FC = () => {
  return (
    <section className={styles.donate_main}>
      <h1>Help Us Continuing and Improving Memoriter</h1>
      <p>
        If you want to support the project you can help us by donating a small sum of money. That way we can keep the servers running and improve the project. 
      </p>
    </section>
  );
};
export default DonateMain;