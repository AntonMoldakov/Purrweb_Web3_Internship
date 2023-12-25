import { Key } from '@mui/icons-material';
import { FC, useState } from 'react';
import styled from 'styled-components';

import { Wallet } from '../../services/ethers';
import { walletsActions } from '../../store/ducks/wallet/wallet-slice';
import { useAppDispatch } from '../../store/use-app-dispatch';
import { BlockchainUnit, ImportWalletType } from '../../types/types';
import { ButtonDefault } from '../../ui/buttons/button-default/button-default';
import { ModalImportWallet } from './ui/modal-import-wallet/modal-import-wallet';

export const ImportWallet: FC = () => {
  const dispatch = useAppDispatch();
  const [isOpenModalImport, setIsOpenModalImport] = useState<boolean>(false);

  const importWallet = async (data: ImportWalletType) => {
    try {
      const wallet = await new Wallet().getWallet(data.mnemonic, data.blockchainUnit || BlockchainUnit.ETH, data.name);

      dispatch(walletsActions.addWallet(wallet));
    } catch (error) {
      alert(error as string);
    }
  };

  return (
    <Root>
      <ButtonDefault
        onClick={() => setIsOpenModalImport(true)}
        endIcon={<Key />}
        title="Import Wallet"
        variant="outlined"
        size="medium"
      />

      <ModalImportWallet isOpen={isOpenModalImport} setIsOpen={setIsOpenModalImport} importWallet={importWallet} />
    </Root>
  );
};

const Root = styled.div`
  margin: 10;
`;
