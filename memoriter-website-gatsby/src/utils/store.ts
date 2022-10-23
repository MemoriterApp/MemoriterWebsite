//storage for globally saved state

import { EnhancedStore, configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme-slice';

//global store
export const store: EnhancedStore<{theme: {value: string | null}}> = configureStore({
    reducer: {
        theme: themeReducer, //current theme (light or dark mode)
    }
});