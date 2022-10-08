import { configureStore } from '@reduxjs/toolkit';
import { progressBarReducer } from './reducer';

export const store = configureStore({
    reducer:progressBarReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'});