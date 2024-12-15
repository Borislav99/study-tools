import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
  TypedStartListening,
} from '@reduxjs/toolkit';
import exampleReducer from '../features/example/exampleSlice';

import env from '../config/env';

// Combine reducers into the root reducer
const rootReducer = combineReducers({
  counter: exampleReducer,
});

const listenerMiddleware = createListenerMiddleware();
const startAppListening =
  listenerMiddleware.startListening as TypedStartListening<
    RootState,
    AppDispatch
  >;

const storeSetup = (preloadedState?: RootState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: true }).prepend(
        listenerMiddleware.middleware
      ),
    // TODO: concat api middleware
    devTools: !env.isProduction,
  });
};

const store = storeSetup();

type AppDispatch = typeof store.dispatch;
type AppStore = ReturnType<typeof storeSetup>;
type RootState = ReturnType<typeof rootReducer>;

export {
  store,
  AppDispatch,
  storeSetup,
  startAppListening,
  listenerMiddleware,
  AppStore,
  RootState,
};
