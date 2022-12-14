//This wrapper component is responsible for the visual mode theme (dark and light mode).

import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

interface props { //type definitions for props
    children: React.ReactNode;
};

const ThemeProvider: FC<props> = ({ children }: props) => {

    const currentTheme: string = useSelector((state: any) => state.theme.value); //stored state (react redux)

    const [theme, setTheme] = useState<string>('dark'); //visual mode (used as html id to connect to different css ids)
    const [backgroundColor, setBackgroundColor] = useState<string>('#202020'); //body background color

    useEffect(() => { //dynamically changes the page background color and visual mode based on global state
        if (currentTheme) { //checks if a value is stored as global state to change the visual mode
            setTheme(currentTheme);
        }
        
        if (theme === 'light') { //checks which mode is active to adjust page background
            setBackgroundColor('#e0e0e0');
        } else {
            setBackgroundColor('#202020');
        };
    }, [currentTheme, theme]);

    document.body.style.backgroundColor = backgroundColor; //page background color, cannot be accessed otherwise

    return (<div id={theme}>{children}</div>); //children refers to the content inside the wrapper (all pages)
};

export default ThemeProvider;