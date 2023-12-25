export enum NetworkType {
  Testnet = 'testnet',
  Mainnet = 'mainnet',
}

export enum BlockchainUnit {
  BTC = 'BTC',
  ETH = 'ETH',
}

export type Token = {
  name: string;
  id: string;
  balance: number;
  blockchainUnit: BlockchainUnit;
  walletAddress: string;
};

export type WalletType = {
  id: string;
  name: string;
  balance: number;
  blockchainUnit: BlockchainUnit;
  address: string;
  publicKey?: string;
  privateKey?: string;
  mnemonic?: string;
};

export type TransactionType = {
  transactionHash: string;
  recipient: string;
  sender: string;
  amount: string;
  status: string;
  id: string;
};

export type GenerateWalletType = {
  blockchainUnit?: BlockchainUnit;
  name: string;
};

export type ImportWalletType = {
  blockchainUnit?: BlockchainUnit;
  name: string;
  mnemonic: string;
};
