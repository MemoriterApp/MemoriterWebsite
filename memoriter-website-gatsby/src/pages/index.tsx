import React from 'react';
import type { HeadFC } from 'gatsby';
import '../styles/index.css';

const IndexPage = () => {
  return (
    <main>
      <h1>Hello World!</h1>
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Memoriter | The all-in-one learning environment</title>