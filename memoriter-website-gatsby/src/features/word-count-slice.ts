import { createSlice, Slice } from '@reduxjs/toolkit';

//global state to calculate the word count of the current blog post
export const wordCountSlice: Slice<{value: number}, { updateWordCount: (state: {value: number}, action: {payload: number}) => void}, 'word-count'> = createSlice({
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