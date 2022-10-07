//css file imports go all here
import './index.css';

import './styles/wrapper/website-header.css';
import './styles/wrapper/website-footer.css';
import './styles/wrapper/website-language-select.css';
import './styles/product/product-banner.css';
import './styles/product/product-main.css';
import './styles/product/product-stories.css';
import './styles/about/about-banner.css';
import './styles/about/about-main.css';
import './styles/blog/blog-main.css';
import './styles/blog/blog-sidebar.css';
import './styles/blog/blog-post-header.css';
import './styles/blog/blog-post-main.css';
import './styles/blog/blog-post-footer.css';
import './styles/donate/donate-main.css';
import './styles/donate/donate-donate.css';
import './styles/donate/donate-statistics.css';
import './styles/download/download-banner.css';
import './styles/download/download-main.css';
import './styles/download/download-mobile.css';
import './styles/releases/releases-main.css';
import './styles/releases/current-release.css';
import './styles/releases/old-release.css';
import './styles/legal.css';
import './styles/faq.css';
import './styles/newsletter/newsletter.css';
import './styles/newsletter/newsletter-subscribe.css';
import './styles/newsletter/newsletter-unsubscribe.css';
import './styles/page-not-found.css';

import './styles/wrapper/cookie-banner/cookie-banner.css';
import './styles/wrapper/cookie-banner/cookie-settings.css';
import './styles/wrapper/window-size-alert.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './utils/store';

ReactDOM.render( //this renders the react app
  <BrowserRouter> {/*routing component*/}
    <Provider store={store}> {/*global state provider*/}
      <App/> {/*the react app*/}
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);