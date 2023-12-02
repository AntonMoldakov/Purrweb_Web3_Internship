import { RootState } from '../../store';

export const walletsSelectors = {
  selectWallets: (state: RootState) => {
    return state.wallets.wallets;
  },
  selectWalletById: (walletId: string) => (state: RootState) => {
    return state.wallets.wallets.find((wallet) => wallet.id === walletId);
  },
};
