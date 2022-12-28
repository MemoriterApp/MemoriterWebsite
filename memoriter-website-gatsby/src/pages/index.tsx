import React, { FC } from 'react';
import type { HeadFC } from 'gatsby';
import WebsiteHead from '../components/layout/website-head';
import WebsiteLayout from '../components/layout/website-layout';
import ProductBanner from '../components/product/product-banner';
import ProductMain from '../components/product/product-main';

const Product: FC = (): React.ReactElement => {
  return (
    <WebsiteLayout currentPage='product'>
        
      {/*banner with slogan and get started button*/}
      <ProductBanner/>
            
      {/*basic main layout and texts*/}
      <ProductMain/>

    </WebsiteLayout>
  );
};
export default Product;

export const Head: HeadFC = (): React.ReactElement => {
  return (
    <WebsiteHead
      title='The All-In-One Learning Environment'
      description='Discover Memoriter and find out how it will give you a better experience in learning something in school or just to take notes in a different creative way not seen anywhere else on the web.'
      keywords='product, index, app'
      type='website'
    />
  );
};