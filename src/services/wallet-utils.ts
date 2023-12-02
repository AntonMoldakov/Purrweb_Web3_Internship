import { BlockchainUnit } from '../types/types';

class WalletUtils {
  getId(address: string, unit: BlockchainUnit) {
    return `${address}-${unit}`;
  }

  unitToPreviewName(unit: BlockchainUnit) {
    const unitToName: Record<BlockchainUnit, string> = {
      [BlockchainUnit.ETH]: 'Ethereum',
      [BlockchainUnit.BTC]: 'Bitcoin',
    };

    return unitToName[unit];
  }
}

export const walletUtils = Object.freeze(new WalletUtils());
