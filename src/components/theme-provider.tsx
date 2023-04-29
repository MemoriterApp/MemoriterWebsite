// This wrapper component is responsible for the visual mode theme (dark and light mode).

import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { changeTheme } from '../features/theme-slice';

interface props {
  children: React.ReactNode;
}

const ThemeProvider: FC<props> = ({ children }: props) => {
  const dispatch: Dispatch<AnyAction> = useDispatch(); // used to manipulate global state (react redux)

  const currentTheme: string = useSelector((state: any) => state.theme.value); // stored state (react redux)

  const [theme, setTheme] = useState<string>('light'); // visual mode (used as html id to connect to different css ids)
  const [backgroundColor, setBackgroundColor] = useState<string>('#e0e0e0'); // body background color

  // dynamically changes the page background color and visual mode based on global state
  useEffect(() => {
    // checks if a value is stored as global state to change the visual mode, otherwise it uses the browser theme
    if (currentTheme) {
      setTheme(currentTheme);
    } else if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark');
      dispatch(changeTheme('dark')); // changes the theme globally
    }

    // checks which mode is active to adjust page background
    if (theme === 'dark') {
      setBackgroundColor('#202020');
    } else {
      setBackgroundColor('#e0e0e0');
    }
  }, [currentTheme, theme]);

  // page background color, cannot be accessed otherwise
  if (typeof document !== 'undefined') {
    document.body.style.backgroundColor = backgroundColor;
  }

  return <div id={theme}>{children}</div>; // children refers to the content inside the wrapper (all pages)
};
export default ThemeProvider;
