import React, { FC } from 'react';

interface Props { //type definitions for props
  type: 'website' | 'article';
  title: string;
  description: string;
  keywords: string;
};

const WebsiteHead: FC<Props> = ({ title, description, keywords, type }: Props) => {
  return (
    <>
      {/*dynamic standard title and metadata*/}
      <title>{`Memoriter | ${title}`}</title>
      <meta name='author' content='Memoriter'/>
      <meta name='description' content={description}/>
      <meta name='keywords' content={`memoriter, learning, study, notes, school, spaced repetition, ${keywords}`}/>
      <meta name="theme-color" content="#202020"/>
      {/*facebook tags*/}
      <meta property="og:title" content={`Memoriter | ${title}`}/>
      <meta property="og:description" content={description}/>
      <meta property="og:type" content={type}/>
      {/*twitter tags*/}
      <meta name="twitter:title" content={`Memoriter | ${title}`}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:card" content='summary'/>
    </>
  );
};

export default WebsiteHead;