import * as ethers from 'ethers';

import { BlockchainUnit } from '../types/types';
import { walletUtils } from './wallet-utils';

export class Wallet {
  private _provider: ethers.AbstractProvider | null = null;
  private _hdWallet: ethers.HDNodeWallet | null = null;

  async getWallet(phrase: string, blockchainUnit: BlockchainUnit, name: string) {
    this._getProvider();
    this._hdWallet = this._importWalletFromMnemonicPhrase(phrase);
    const balance = await this._getBalance(this._hdWallet.address);

    return {
      id: walletUtils.getId(this._hdWallet.address, blockchainUnit),
      address: this._hdWallet.address,
      publicKey: this._hdWallet.publicKey,
      privateKey: this._hdWallet.privateKey,
      mnemonic: this._hdWallet.mnemonic?.phrase,
      blockchainUnit: blockchainUnit,
      name,
      balance,
      priceUsd: 'No Data',
    };
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
