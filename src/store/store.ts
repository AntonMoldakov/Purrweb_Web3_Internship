import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { networkReducer } from './ducks/network/network-slice';
import { tokensReducer } from './ducks/tokens/tokens-slice';
import { walletsReducer } from './ducks/wallet/wallet-slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const rootReducer = combineReducers({
  wallets: walletsReducer,
  network: networkReducer,
  tokens: tokensReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
