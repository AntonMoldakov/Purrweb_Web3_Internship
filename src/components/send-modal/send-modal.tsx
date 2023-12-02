import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

type SendModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSend: (data: SendForm) => void;
  title: string;
};

export const SendModal: FC<SendModalProps> = ({ isOpen, onClose, onSend, title }) => {
  const { handleSubmit, register } = useForm<SendForm>();

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyle}>
        <form onSubmit={handleSubmit(onSend)}>
          <Typography sx={titleStyle} variant="subtitle1">
            {title}
          </Typography>

          <TextField
            style={inputStyle}
            label="Amount"
            type="number"
            variant="outlined"
            fullWidth
            {...register('amount')}
          />
          <TextField
            style={inputStyle}
            label="Recipient's address"
            variant="outlined"
            fullWidth
            {...register('recipient')}
          />

          <Button variant="outlined" size="medium" type="submit">
            Send
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export interface SendForm {
  amount: string;
  recipient: string;
}

const modalStyle = {
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

const titleStyle = {
  paddingTop: 2,
  paddingBottom: 2,
};

const inputStyle = {
  width: '100%',
  marginBottom: 15,
};
