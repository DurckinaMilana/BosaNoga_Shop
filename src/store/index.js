/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import catalogSaga from '../sagas/catalogSaga';
import basketSaga from '../sagas/basketSaga.js';
import persistedReducer from './rootPersistConfig';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(basketSaga);
sagaMiddleware.run(catalogSaga);

export const persistor = persistStore(store);
export default store;