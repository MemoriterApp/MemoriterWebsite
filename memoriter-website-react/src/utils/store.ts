//storage for globally saved state

import { EnhancedStore, configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme-slice';
import wordCountReducer from '../features/word-count-slice';

//global store
export const store: EnhancedStore<{theme: {value: string | null}, wordCount: {value: number}}> = configureStore({
    reducer: {
        theme: themeReducer, //current theme (light or dark mode)
        wordCount: wordCountReducer //word count of the current blog post
    }
});