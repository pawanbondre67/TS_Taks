import { createSlice } from '@reduxjs/toolkit';

const formDataSlice = createSlice({
    name: 'formData',
    initialState: {
        isSubmitting: false,
        success: false,
        error: null,
    },
    reducers: {
        submitStart: (state) => {
            state.isSubmitting = true;
            state.success = false;
            state.error = null;
        },
        submitSuccess: (state) => {
            state.isSubmitting = false;
            state.success = true;
            state.error = null;
        },
        submitFailure: (state, action) => {
            state.isSubmitting = false;
            state.success = false;
            state.error = action.payload;
        },
    },
});

export const { submitStart, submitSuccess, submitFailure } = formDataSlice.actions;
export default formDataSlice.reducer;
