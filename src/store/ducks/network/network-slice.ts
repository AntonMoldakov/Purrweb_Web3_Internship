import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NetworkType } from '../../../types/types';

export type InStoreType = {
  network: NetworkType;
};

const initialState: InStoreType = {
  network: NetworkType.Testnet,
};

const networkSlice = createSlice({
  name: 'sliceNetwork',
  initialState,
  reducers: {
    toggleNetwork: (state, action: PayloadAction<NetworkType>) => {
      state.network = action.payload;
    },
  },
});

export const networkActions = {
  ...networkSlice.actions,
};

export const networkReducer = networkSlice.reducer;
