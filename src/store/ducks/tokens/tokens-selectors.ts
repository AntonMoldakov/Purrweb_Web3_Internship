import { walletUtils } from '../../../services/wallet-utils';
import { RootState } from '../../store';

export const tokensSelectors = {
  selectTokensByWallet: (walletId: string) => (state: RootState) => {
    return state.tokens.tokens.filter(
      (token) => walletUtils.getId(token.walletAddress, token.blockchainUnit) === walletId,
    );
  },
};
