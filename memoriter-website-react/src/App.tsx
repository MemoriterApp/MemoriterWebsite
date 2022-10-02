import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Product from './pages/product';
import About from './pages/about';
import Blog from './pages/blog';
import BlogPost from './pages/blog-post';
import Download from './pages/download';
import Donate from './pages/donate';
import Releases from './pages/releases';
import Impressum from './pages/impressum';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Cookies from './pages/cookies';
import Support from './pages/support';
import Faq from './pages/faq';
import Bugs from './pages/bugs';
import Newsletter from './pages/newsletter';
import PageNotFound from './pages/page-not-found';

import ThemeProvider from './components/theme-provider';
import ScrollReset from './components/routing/scroll-reset';
import Redirect from './components/routing/redirect';

import blogs from './utils/blog-posts';

//routing (connections to different sub-pages)
const App: FC = () => {
  return (
    <ScrollReset> {/*ScrollReset forces scrolling to top on navigation (fixes issue where the page kept beeing scrolled down)*/} 
      <ThemeProvider> {/*ThemeProvider is responsible for the dark and light theme*/}
        <Routes>

          <Route path='/' element={<Redirect/>}/>

          <Route path='/product' element={<Product/>}/>

          <Route path='/about' element={<About/>}/>

          <Route path='/blog' element={<Blog topic='Latest'/>}/> {/*blog topics are different routes with the same page, but with filtered content*/}

          <Route path='/blog/topic/company' element={<Blog topic='Company'/>}/>

          <Route path='/blog/topic/productivity' element={<Blog topic='Productivity'/>}/>

          <Route path='/blog/topic/technology' element={<Blog topic='Technology'/>}/>

          <Route path='/blog/topic/miscellaneous' element={<Blog topic='Miscellaneous'/>}/>

          {/*blog posts (are mapped from the blog-posts.js file array)*/}
          {blogs.map((blog) => (
            <Route path={`/blog/${blog.link}`} element={<BlogPost blog={blog}/>} key={blog.title}/>
          ))}

          <Route path='/download' element={<Download/>}/>

          <Route path='/donate' element={<Donate/>}/>

          <Route path='/releases' element={<Releases/>}/>

          <Route path='/impressum' element={<Impressum/>}/>

          <Route path='/terms' element={<Terms/>}/>

          <Route path='/privacy' element={<Privacy/>}/>

          <Route path='/cookies' element={<Cookies/>}/>

          <Route path='/support' element={<Support/>}/>

          <Route path='/faq' element={<Faq/>}/>

          <Route path='/bugs' element={<Bugs/>}/>

          <Route path='/newsletter' element={<Newsletter/>}/>

          <Route path='*' element={<PageNotFound/>}/> {/*loads page not found page for all unset routes*/}

        </Routes>
      </ThemeProvider>
    </ScrollReset>
  );
};

export default App;