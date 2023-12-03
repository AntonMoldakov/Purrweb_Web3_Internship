import hdkey from 'hdkey';

import { Hex } from '../hex';
import { getAccountAddressFromMnemonic } from './lib/bip84';

export class HDWallet {
  private privateKeyBuffer: Buffer;
  private publicKeyBuffer: Buffer;
  private accountAddress: string;

  constructor(seed: string, mnemonic: string) {
    const hexSeed = new Hex(seed).withPrefix;

    if (!hexSeed) {
      throw 'Invalid seed';
    }

    this.accountAddress = getAccountAddressFromMnemonic(mnemonic);

    const result = hdkey.fromMasterSeed(Buffer.from(hexSeed, 'hex'));

    this.privateKeyBuffer = result.privateKey;
    this.publicKeyBuffer = result.publicKey;
  }

  get privateKey(): string {
    return this.privateKeyBuffer.toString('hex');
  }

  get publicKey(): string {
    return this.publicKeyBuffer.toString('hex');
  }
  get address(): string {
    return this.accountAddress;
  }
}
