import React, { FC } from 'react';
import { HeadFC } from 'gatsby';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';
import BotBanner from '../components/bot/bot-banner';
import BotMain from '../components/bot/bot-main';

const Bot: FC = () => {
  return (
    <WebsiteLayout currentPage='bot'>
      {/* banner with button to access the bot */}
      <BotBanner />

      {/* basic main layout and texts */}
      <BotMain />
    </WebsiteLayout>
  );
};
export default Bot;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='MemoriterBot'
      description='Your personal AI tutor at your fingertips.'
      keywords='bot, ai, cheatTP-3'
      type='website'
    />
  );
};
