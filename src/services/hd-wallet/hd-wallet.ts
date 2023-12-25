import hdkey from 'hdkey';

import { Hex } from '../hex';
import { getAccountAddressFromMnemonic } from './lib/bip84';

export class HDWallet {
  private _privateKeyBuffer: Buffer;
  private _publicKeyBuffer: Buffer;
  private _accountAddress: string;

  constructor(seed: string, mnemonic: string) {
    const hexSeed = new Hex(seed).withPrefix;

    if (!hexSeed) {
      throw 'Invalid seed';
    }

    this._accountAddress = getAccountAddressFromMnemonic(mnemonic);

    const result = hdkey.fromMasterSeed(Buffer.from(hexSeed, 'hex'));

    this._privateKeyBuffer = result.privateKey;
    this._publicKeyBuffer = result.publicKey;
  }

  get privateKey(): string {
    return this._privateKeyBuffer.toString('hex');
  }

  get publicKey(): string {
    return this._publicKeyBuffer.toString('hex');
  }
  get address(): string {
    return this._accountAddress;
  }
}
