import userReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {user: userReducer},
    devTools: true
});

export default store;