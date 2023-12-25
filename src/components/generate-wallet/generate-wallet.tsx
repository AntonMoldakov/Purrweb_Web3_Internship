import { AddCircle } from '@mui/icons-material';
import { FC, useState } from 'react';

import { Wallet } from '../../services/ethers';
import { HDWallet } from '../../services/hd-wallet/hd-wallet';
import { Mnemonic } from '../../services/mnemonic';
import { walletUtils } from '../../services/wallet-utils';
import { walletsActions } from '../../store/ducks/wallet/wallet-slice';
import { useAppDispatch } from '../../store/use-app-dispatch';
import { BlockchainUnit, GenerateWalletType, WalletType } from '../../types/types';
import { ButtonDefault } from '../../ui/buttons/button-default/button-default';
import { ModalGenerateWallet } from './ui/modal-generate-wallet/modal-generate-wallet';

export const GenerateWallet: FC = () => {
  const [isOpenModalGenerate, setIsOpenModalGenerate] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const generateWallet = (data: GenerateWalletType) => {
    const { name, blockchainUnit = BlockchainUnit.ETH } = data;
    const mnemonic = new Mnemonic();

    const confirmResult = confirm(`remember mnemonic phrase:\n${mnemonic.data}`);

    if (!confirmResult) {
      return;
    }

    const { publicKey, privateKey, address } = new HDWallet(mnemonic.seed, mnemonic.data);

    const wallet: WalletType = {
      id: walletUtils.getId(address, blockchainUnit),
      name,
      balance: 0,
      blockchainUnit,
      address,
      publicKey,
      privateKey,
      mnemonic: mnemonic.data,
    };

    dispatch(walletsActions.addWallet(wallet));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _generateWallet = async (data: GenerateWalletType) => {
    const { name, blockchainUnit = BlockchainUnit.ETH } = data;

    const hdWallet = await new Wallet().createRandom();

    const { address, publicKey, privateKey } = hdWallet;

    const confirmResult = confirm(`remember mnemonic phrase:\n${hdWallet.mnemonic?.phrase}`);

    if (!confirmResult) {
      return;
    }

    const wallet: WalletType = {
      id: walletUtils.getId(address, blockchainUnit),
      name,
      balance: 0,
      blockchainUnit,
      address,
      publicKey,
      privateKey,
      mnemonic: hdWallet.mnemonic?.phrase,
    };

    dispatch(walletsActions.addWallet(wallet));
  };

  return (
    <>
      <ButtonDefault
        variant="outlined"
        size="medium"
        endIcon={<AddCircle />}
        onClick={() => setIsOpenModalGenerate(true)}
        title="Generate Wallet"
      />

      <ModalGenerateWallet
        isOpen={isOpenModalGenerate}
        setIsOpen={setIsOpenModalGenerate}
        generateWallet={generateWallet}
      />
    </>
  );
};
