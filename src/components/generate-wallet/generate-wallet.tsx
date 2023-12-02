import { AddCircle } from '@mui/icons-material';
import { useState } from 'react';

import { GenerateWalletType } from '../../types/types';
import { ButtonDefault } from '../../ui/buttons/button-default/button-default';
import { ModalGenerateWallet } from './ui/modal-generate-wallet/modal-generate-wallet';

type GenerateWalletProps = {
  generateWallet: (data: GenerateWalletType) => void;
};

export const GenerateWallet = ({ generateWallet }: GenerateWalletProps) => {
  const [isOpenModalGenerate, setIsOpenModalGenerate] = useState<boolean>(false);

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
