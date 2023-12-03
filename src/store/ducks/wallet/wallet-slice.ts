import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    addWallet: (state, { payload }: PayloadAction<WalletType>) => {
      state.wallets.push(payload);
    },
    removeWallet: (state, { payload }: PayloadAction<string>) => {
      state.wallets = state.wallets.filter((wallet) => wallet.id !== payload);
    },
    clearState: (state) => {
      state.wallets = [];
    },
  },
});

export const walletsActions = {
  ...walletsSlice.actions,
};

export const walletsReducer = walletsSlice.reducer;
