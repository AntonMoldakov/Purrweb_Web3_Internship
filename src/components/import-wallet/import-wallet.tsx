import { Key } from '@mui/icons-material';
import { FC, useState } from 'react';
import styled from 'styled-components';

import { ImportWalletType } from '../../types/types';
import { ButtonDefault } from '../../ui/buttons/button-default/button-default';
import { ModalImportWallet } from './ui/modal-import-wallet/modal-import-wallet';

type ImportWalletProps = {
  importWallet: (data: ImportWalletType) => void;
};

export const ImportWallet: FC<ImportWalletProps> = ({ importWallet }) => {
  const [isOpenModalImport, setIsOpenModalImport] = useState<boolean>(false);

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
