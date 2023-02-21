import React, { FC } from 'react';
import type { HeadFC } from 'gatsby';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';
import ProductBanner from '../components/product/product-banner';
import ProductMain from '../components/product/product-main';

const Product: FC = (): React.ReactElement => {
  return (
    <WebsiteLayout currentPage='product'>
      {/* banner with slogan and get started button */}
      <ProductBanner />

      {/* basic main layout and texts */}
      <ProductMain />
    </WebsiteLayout>
  );
};
export default Product;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='The flashcard app that lets you remember more!'
      description='Work with the effective memorizing tools of Memoriter to quickly achieve successful results. Find out about one of the most innovative study application.'
      keywords='product, index, app'
      type='website'
    />
  );
};
