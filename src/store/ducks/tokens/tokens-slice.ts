import { createSlice } from '@reduxjs/toolkit';

import { MOCK_TOKENS } from '../../../mock/mock';
import { Token } from '../../../types/types';

export type InStoreType = {
  tokens: Token[];
};

const initialState: InStoreType = {
  tokens: MOCK_TOKENS,
};

const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    addWallet: () => {},
    removeWallet: () => {},
    clearState: (state) => {
      state.tokens = [];
    },
  },
});

export const tokensActions = {
  ...tokensSlice.actions,
};

export const tokensReducer = tokensSlice.reducer;
