// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import BIP84 from 'bip84';

export const getAccountAddressFromMnemonic = (mnemonic: string): string => {
  const root = new BIP84.fromMnemonic(mnemonic);
  const child0 = root.deriveAccount(0);
  const account0 = new BIP84.fromZPrv(child0);
  const accountAddress = account0.getAddress(0);

  return accountAddress as string;
};
