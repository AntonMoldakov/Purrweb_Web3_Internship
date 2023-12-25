import * as ethers from 'ethers';

import { BlockchainUnit } from '../types/types';
import { walletUtils } from './wallet-utils';

export class Wallet {
  private _provider: ethers.AbstractProvider | null = null;

  constructor() {
    this._getProvider();
  }

  async getWallet(phrase: string, blockchainUnit: BlockchainUnit, name: string) {
    try {
      const hdWallet = this._importWalletFromMnemonicPhrase(phrase);
      const balance = await this._getBalance(hdWallet.address);

      return {
        id: walletUtils.getId(hdWallet.address, blockchainUnit),
        address: hdWallet.address,
        publicKey: hdWallet.publicKey,
        privateKey: hdWallet.privateKey,
        mnemonic: hdWallet.mnemonic?.phrase,
        blockchainUnit: blockchainUnit,
        name,
        balance,
      };
    } catch (error) {
      const { shortMessage } = error as ethers.EthersError;

      throw shortMessage;
    }
  }

  async createRandom() {
    try {
      const hdWallet = ethers.Wallet.createRandom(this._provider || undefined);
      return hdWallet;
    } catch (error) {
      const { shortMessage } = error as ethers.EthersError;

      throw shortMessage;
    }
  }

  private _getProvider() {
    this._provider = ethers.getDefaultProvider('wss://ethereum-goerli.publicnode.com');
  }

  private _importWalletFromMnemonicPhrase(phrase: string) {
    return ethers.Wallet.fromPhrase(phrase, this._provider || undefined);
  }

  private async _getBalance(address: string) {
    const balance = await this._provider?.getBalance(address);

    return (balance || 0) as number;
  }
}
