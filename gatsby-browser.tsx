import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/utils/store';
import './src/styles/index.scss';
import './src/styles/syntax-highlighting.scss';
import ThemeProvider from './src/components/theme-provider';

// type definitions for props
interface Props {
  element: React.ReactNode;
}

// This element enables some shared state to all pages
export const wrapRootElement: FC<Props> = ({ element }: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{element}</ThemeProvider>
    </Provider>
  );
};
