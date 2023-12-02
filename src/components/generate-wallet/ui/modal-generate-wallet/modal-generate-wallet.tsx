import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';

import { BlockchainUnit, GenerateWalletType } from '../../../../types/types';
import { ButtonDefault } from '../../../../ui/buttons/button-default/button-default';
import { BlockchainSelect } from '../../../blockchain-select/blockchain-select';

type ModalGenerateWalletType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  generateWallet: (data: GenerateWalletType) => void;
};

export const ModalGenerateWallet = ({ isOpen, setIsOpen, generateWallet }: ModalGenerateWalletType) => {
  const { handleSubmit, setValue, watch, register } = useForm<GenerateWalletForm>();

  const handleChange = (network: BlockchainUnit) => {
    setValue('blockchain', network);
  };

  const onSubmit = (data: GenerateWalletForm) => {
    generateWallet(data);
    setIsOpen(false);
  };

  return (
    <div>
      <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography style={styleTitle} variant="subtitle1">
              Select a blockchain network
            </Typography>

            <BlockchainSelect handleChange={handleChange} chain={watch('blockchain')} />

            <Typography style={styleTitle} variant="subtitle1">
              Enter the wallet name
            </Typography>

            <TextField style={styleInput} label="name" size="small" {...register('name')} />

            <ButtonDefault title="Create" type="submit" variant="outlined" size="medium" style={styleButton} />
          </form>
        </Box>
      </Modal>
    </div>
  );
};

interface GenerateWalletForm {
  name: string;
  blockchain: BlockchainUnit;
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

const styleButton = {
  marginTop: 10,
};
