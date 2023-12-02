import { createSlice } from '@reduxjs/toolkit';

import { MOCK_WALLETS } from '../../../mock/mock';
import { WalletType } from '../../../types/types';

export type InStoreType = {
  wallets: WalletType[];
};

const initialState: InStoreType = {
  wallets: MOCK_WALLETS,
};

const walletsSlice = createSlice({
  name: 'sliceWallets',
  initialState,
  reducers: {
    addWallet: () => {},
    removeWallet: () => {},
    clearState: (state) => {
      state.wallets = [];
    },
  },
});

export const networkActions = {
  ...walletsSlice.actions,
};

export const walletsReducer = walletsSlice.reducer;
