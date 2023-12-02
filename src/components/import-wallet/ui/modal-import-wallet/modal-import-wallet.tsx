import { TextareaAutosize, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';

import { BlockchainUnit, ImportWalletType } from '../../../../types/types';
import { ButtonDefault } from '../../../../ui/buttons/button-default/button-default';
import { BlockchainSelect } from '../../../blockchain-select/blockchain-select';

type ModalImportWalletType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  importWallet: (data: ImportWalletType) => void;
};

export const ModalImportWallet = ({ isOpen, setIsOpen, importWallet }: ModalImportWalletType) => {
  const { handleSubmit, setValue, register, watch, reset } = useForm<ImportWalletForm>({
    defaultValues: {
      blockchainUnit: BlockchainUnit.ETH,
    },
  });

  const onSubmit = (data: ImportWalletForm) => {
    importWallet(data);

    setIsOpen(false);

    reset();
  };

  const handleChange = (unit: BlockchainUnit) => {
    setValue('blockchainUnit', unit);
  };

  return (
    <div>
      <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography style={styleTitle} variant="subtitle1">
              Select a blockchain network
            </Typography>

            <BlockchainSelect handleChange={handleChange} chain={watch('blockchainUnit')} />

            <Typography style={styleTitle} variant="subtitle1">
              Enter the wallet name
            </Typography>

            <TextField style={styleInput} label="name" size="small" {...register('name')} />

            <Typography style={styleTitle} variant="subtitle1">
              Enter a mnemonic phrase
            </Typography>

            <TextareaAutosize
              style={styleTextarea}
              minRows={3}
              title="mnemonic"
              placeholder="mnemonic"
              {...register('mnemonic')}
            />

            <ButtonDefault title="Import" type="submit" variant="outlined" size="medium" />
          </form>
        </Box>
      </Modal>
    </div>
  );
};

interface ImportWalletForm {
  blockchainUnit: BlockchainUnit;
  name: string;
  mnemonic: string;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styleTitle = {
  paddingTop: 10,
};

const styleInput = {
  width: '100%',
  marginTop: 10,
};

const styleTextarea = {
  width: '100%',
  marginTop: 10,
  borderRadius: 5,
  padding: 5,
};
