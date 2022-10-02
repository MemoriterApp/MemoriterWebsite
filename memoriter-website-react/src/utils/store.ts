//storage for globally saved state

import { EnhancedStore, configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme-slice';
import authenticationSuccessReducer from '../features/authentication-success-slice';
import wordCountReducer from '../features/word-count-slice';

//global store
export const store: EnhancedStore<{theme: {value: string | null}, authenticationSuccess: {value: string}, wordCount: {value: number}}> = configureStore({
    reducer: {
        theme: themeReducer, //current theme (light or dark mode)
        authenticationSuccess: authenticationSuccessReducer, //message if the user signed out or deletes their account
        wordCount: wordCountReducer //word count of the current blog post
    }
});