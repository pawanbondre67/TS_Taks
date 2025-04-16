import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import formDataReducer from './slices/formDataSlice';

const store = configureStore({
    reducer: {
        login: loginReducer,
        formData: formDataReducer,
    },
});

export default store;
