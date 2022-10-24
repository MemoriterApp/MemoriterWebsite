import { createSlice, Slice } from '@reduxjs/toolkit';

//global state for the light and dark theme
export const themeSlice: Slice<{value: any}, { changeTheme: (state: {value: string}, action: {payload: string}) => void}, 'theme'> = createSlice({
    name: 'theme', //name (required for identification)
    initialState: { value: '' }, //default value from localStorage (if none it is treated as dark)
    reducers: {
        changeTheme: (state, action) => { //function for manipulating the state
            state.value = action.payload;
        }
    }
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;