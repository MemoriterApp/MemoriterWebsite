import { createSlice } from '@reduxjs/toolkit';

export const wordCountSlice = createSlice({ //global state to calculate the word count of the current blog post
    name: 'word-count', //name (required for identification)
    initialState: { value: 0 }, //default value (empty)
    reducers: {
        updateWordCount: (state, action) => { //function for manipulating the state
            state.value = action.payload;
        }
    }
});

export const { updateWordCount } = wordCountSlice.actions;

export default wordCountSlice.reducer;