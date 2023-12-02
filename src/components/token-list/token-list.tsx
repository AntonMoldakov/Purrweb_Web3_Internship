import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Card, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import { FC, useState } from 'react';

import { Token } from '../../types/types';
import { SendForm, SendModal } from '../send-modal/send-modal';

const TokenList: FC<TokenListProps> = ({ tokens }) => {
  const [isOpenSendTokenModal, setIsOpenSendTokenModal] = useState(false);

  const onSendToken = (data: SendForm) => {
    console.log('data :>> ', data);
    setIsOpenSendTokenModal(false);
    // TODO: implement logic
  };

  const onRemoveToken = (id: string) => {
    console.log('id :>> ', id);
    // TODO: implement logic
  };

  return (
    <>
      <Card sx={styles.container}>
        <Typography variant="h5" gutterBottom>
          Token List
        </Typography>

        <List>
          {tokens &&
            tokens.map((token) => (
              <ListItem key={token.id} sx={styles.listItem}>
                <ListItemText primary={token.name} secondary={`Balance: ${token.balance}`} />

                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" size="small" onClick={() => onRemoveToken(token.id)}>
                    <DeleteIcon />
                  </IconButton>

                  <IconButton
                    edge="end"
                    aria-label="Send"
                    size="small"
                    onClick={() => {
                      setIsOpenSendTokenModal(true);
                    }}
                  >
                    <SendIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
        </List>
      </Card>

      <SendModal
        isOpen={isOpenSendTokenModal}
        onClose={() => setIsOpenSendTokenModal(false)}
        onSend={onSendToken}
        title="Send token"
      />
    </>
  );
};

type TokenListProps = {
  tokens?: Token[];
};

const styles = {
  container: {
    minWidth: 300,
    border: '1px solid #ccc',
    borderRadius: '10px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f9f9f9',
    padding: '20px',
  },
  listItem: {
    marginBottom: '8px',
  },
};

export default TokenList;
