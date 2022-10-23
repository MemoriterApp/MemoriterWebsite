import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/utils/store';
import ThemeProvider from './src/components/theme-provider';

interface Props { // type definitions for props
  element: React.ReactNode;
};

export const wrapRootElement: FC<Props> = ({ element }: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{element}</ThemeProvider>
    </Provider>
  );
};