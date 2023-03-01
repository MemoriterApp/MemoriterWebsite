import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import * as styles from '../styles/donate/donate-main.module.scss';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';
import DonateMain from '../components/donate/donate-main';
import DonateDonate from '../components/donate/donate-donate';
import DonateStatistics from '../components/donate/donate-statistics';

const Donate: FC = () => {
  return (
    <WebsiteLayout currentPage='donate'>
      <section className={styles.donate_main_container}>
        {/* main content and texts */}
        <DonateMain />

        {/* section for donating */}
        <DonateDonate />
      </section>

      {/* statistics where the money goes (for transparency reasons) */}
      <DonateStatistics />
    </WebsiteLayout>
  );
};
export default Donate;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='Donate'
      description='If you want to support further improvements to our project, please consider supporting us by a small donation.'
      keywords='donate, support'
      type='website'
    />
  );
};