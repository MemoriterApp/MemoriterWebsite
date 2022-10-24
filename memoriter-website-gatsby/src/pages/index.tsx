import React, { FC } from 'react';
import type { HeadFC } from 'gatsby';
import '../styles/index.css';
import WebsiteHead from '../components/website-head';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import ProductBanner from '../components/product/product-banner';
import ProductMain from '../components/product/product-main';
import ProductStories from '../components/product/product-stories';

const Product: FC = (): React.ReactElement => {
  return (
    <WebsiteWrapper currentPage='product'>
        
      {/*banner with slogan and get started button*/}
      <ProductBanner/>
            
      {/*basic main layout and texts*/}
      <ProductMain/>

      {/*slider with customer stories*/}
      <ProductStories/>

    </WebsiteWrapper>
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