import { walletUtils } from '../services/wallet-utils';
import { BlockchainUnit, Token, TransactionType, WalletType } from '../types/types';

export const MOCK_WALLETS: WalletType[] = [
  {
    id: walletUtils.getId('0xb68518b140b9d43bf0c4babb61add62644641fe2', BlockchainUnit.ETH),
    name: 'First wallet',
    balance: 1323433,
    priceUsd: '100',
    blockchainUnit: BlockchainUnit.ETH,
    address: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
    publicKey: '026633a2591be7288fa855470eeb5160294f439eae9e1b01c40bb3c423cc50d20e',
    privateKey: 'f137acc934d1586494dd3146179f5c76b53bbbd9e4cedb2d1dcdfad46c986af8',
    mnemonic: 'science truth visual useful slush valve science wrist force vault wedding crop',
  },
  {
    id: walletUtils.getId('0xb68518b140b9d43bf0c4babb61add62644641fe2', BlockchainUnit.BTC),
    name: 'Second wallet',
    balance: 1323433,
    priceUsd: '100',
    blockchainUnit: BlockchainUnit.BTC,
    address: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
    publicKey: '026633a2591be7288fa855470eeb5160294f439eae9e1b01c40bb3c423cc50d20e',
    privateKey: 'f137acc934d1586494dd3146179f5c76b53bbbd9e4cedb2d1dcdfad46c986af8',
    mnemonic: 'science truth visual useful slush valve science wrist force vault wedding crop',
  },
  {
    id: '3',
    name: 'Third wallet',
    balance: 1323433,
    priceUsd: '100',
    blockchainUnit: BlockchainUnit.BTC,
    address: '0x730Ad76357865Ac63789fb8Cd02420999ae29f5C',
    publicKey: '02d9c03734bc62a0230b2a326b709ffcab44cfd6d5993fbc71718e751ce39bd943',
    privateKey: '2e73e3b57ff4f9e5083f356d944537744ab868a2c0fbac661c2e72f75be08311',
    mnemonic: 'elevator bottom office guide onion expire august column meadow gun edit trumpet',
  },
];

export const MOCK_TRANSACTIONS: TransactionType[] = [
  {
    id: '1',
    status: 'failed',
    amount: '0.0545600206',
    sender: '0xa7a7720499b7eB1F1408A8A319284bFD2Db4a427',
    recipient: '0x8dC847Af872947Ac18d5d63fA646EB65d4D99560',
    transactionHash: '0x6276728855e7dd0c7b326cb79de04c75631375e40a792f919e7c4801d722fe02',
  },
  {
    id: '2',
    status: 'success',
    amount: '0.239432',
    sender: '0xa7a7720499b7eB1F1408A8A319284bFD2Db4a427',
    recipient: '0x8dC847Af872947Ac18d5d63fA646EB65d4D99560',
    transactionHash: '0x6276728855e7dd0c7b326cb79de04c75631375e40a792f919e7c4801d722fe02',
  },
  {
    id: '3',
    status: 'success',
    amount: '0.04423423',
    sender: '0xa7a7b7eB1F1408A8A319284bFD2Db4a427',
    recipient: '0x8dC847Af872947Ac18d5d63fA646EB65d4D99560',
    transactionHash: '0x6276728855e7dd0c7b326cb79de04c75631375e40a792f919e7c4801d722fe02',
  },
  {
    id: '4',
    status: 'failed',
    amount: '0.016501224545600206',
    sender: '0xa7a7720499b7eB1F1408A8A319284bFD2Db4a427',
    recipient: '0x8dC847Af872947Ac18d5d63fA646EB65d4D99560',
    transactionHash: '0x6276728855e7dd0c7b326cb79de04c75631375e40a792f919e7c4801d722fe02',
  },
];

export const MOCK_TRANSACTIONS_TOKEN: TransactionType[] = [
  {
    id: '1',
    status: 'success',
    amount: '0.016501224545600206',
    sender: '0xa7a7720499b7eB1F1408A8A319284bFD2Db4a427',
    recipient: '0x8dC847Af872947Ac18d5d63fA646EB65d4D99560',
    transactionHash: '0x6276728855e7dd0c7b326cb79de04c75631375e40a792f919e7c4801d722fe02',
  },
  {
    id: '2',
    status: 'success',
    amount: '0.016501224545600206',
    sender: '0xa7a7720499b7eB1F1408A8A319284bFD2Db4a427',
    recipient: '0x8dC847Af872947Ac18d5d63fA646EB65d4D99560',
    transactionHash: '0x6276728855e7dd0c7b326cb79de04c75631375e40a792f919e7c4801d722fe02',
  },
  {
    id: '3',
    status: 'success',
    amount: '0.016501224545600206',
    sender: '0xa7a7720499b7eB1F1408A8A319284bFD2Db4a427',
    recipient: '0x8dC847Af872947Ac18d5d63fA646EB65d4D99560',
    transactionHash: '0x6276728855e7dd0c7b326cb79de04c75631375e40a792f919e7c4801d722fe02',
  },
];

export const MOCK_TOKENS: Token[] = [
  {
    name: 'Token1',
    balance: 500,
    id: '1',
    blockchainUnit: BlockchainUnit.ETH,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token2',
    balance: 534200,
    id: '2',
    blockchainUnit: BlockchainUnit.ETH,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token3',
    balance: 500,
    id: '3',
    blockchainUnit: BlockchainUnit.ETH,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token4',
    balance: 50430,
    id: '4',
    blockchainUnit: BlockchainUnit.ETH,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token5',
    balance: 533200,
    id: '5',
    blockchainUnit: BlockchainUnit.ETH,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token6',
    balance: 5443200,
    id: '6',
    blockchainUnit: BlockchainUnit.ETH,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token4',
    balance: 50430,
    id: '7',
    blockchainUnit: BlockchainUnit.ETH,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token5',
    balance: 533200,
    id: '8',
    blockchainUnit: BlockchainUnit.ETH,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token6',
    balance: 5443200,
    id: '9',
    blockchainUnit: BlockchainUnit.ETH,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token1',
    balance: 500,
    id: '1',
    blockchainUnit: BlockchainUnit.BTC,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token2',
    balance: 500,
    id: '2',
    blockchainUnit: BlockchainUnit.BTC,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token3',
    balance: 500,
    id: '3',
    blockchainUnit: BlockchainUnit.BTC,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token1',
    balance: 500,
    id: '1',
    blockchainUnit: BlockchainUnit.BTC,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token2',
    balance: 500,
    id: '2',
    blockchainUnit: BlockchainUnit.BTC,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
  {
    name: 'Token3',
    balance: 500,
    id: '3',
    blockchainUnit: BlockchainUnit.BTC,
    walletAddress: '0xb68518b140b9d43bf0c4babb61add62644641fe2',
  },
];
