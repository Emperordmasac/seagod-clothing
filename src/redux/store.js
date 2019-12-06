import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';

import createSagaMiddleWare from 'redux-saga';
import rootSaga from './root-saga';

import rootReducer from './root-reducer';

const sagaMiddlewares = createSagaMiddleWare();

const middlewares = [sagaMiddlewares];

if (process.env.NODE_ENV === 'development' ) {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddlewares.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};