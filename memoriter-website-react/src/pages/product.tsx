import React, { FC } from 'react';
import WebsiteWrapper from '../components/wrapper/website-wrapper';
import ProductBanner from '../components/product/product-banner';
import ProductMain from '../components/product/product-main';
import ProductStories from '../components/product/product-stories';

const Product: FC = () => {
    return (
        <WebsiteWrapper
            title='The all-in-one learning environment'
            description=''
            currentPage='product'
        >
        
            {/*banner with slogan and get started button*/}
            <ProductBanner/>
            
            {/*basic main layout and texts*/}
            <ProductMain/>

            {/*slider with customer stories*/}
            <ProductStories/>

        </WebsiteWrapper>
    );
}

export default Product;