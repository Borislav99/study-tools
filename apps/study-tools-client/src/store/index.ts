import {
  store,
  storeSetup,
  startAppListening,
  listenerMiddleware,
} from './config';

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof storeSetup>;

export default store;
export { storeSetup, startAppListening, listenerMiddleware };
