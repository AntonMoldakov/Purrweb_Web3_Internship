import * as bip39 from 'bip39';

export class Mnemonic {
  private mnemonic: string;

  constructor(mnemonic?: string) {
    if (mnemonic) {
      const isValid = bip39.validateMnemonic(mnemonic);

      if (!isValid) {
        throw new Error('Mnemonic is not valid');
      }

      this.mnemonic = mnemonic;
      return;
    }

    this.mnemonic = this.generateMnemonic();
  }

  get data(): string {
    return this.mnemonic;
  }

  get seed(): string {
    return bip39.mnemonicToSeedSync(this.mnemonic).toString('hex');
  }

  private generateMnemonic(): string {
    return bip39.generateMnemonic();
  }
}
