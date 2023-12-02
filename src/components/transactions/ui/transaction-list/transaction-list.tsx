import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

import { TransactionType } from '../../../../types/types';

type TransactionListType = {
  transactions: TransactionType[];
};

const TransactionList = ({ transactions }: TransactionListType) => {
  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h5">List transaction</Typography>
      <List>
        {transactions.map((transaction) => (
          <ListItem key={transaction.id}>
            <ListItemText
              primary={`Hash transaction: ${transaction.transactionHash}`}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    Sender: {transaction.sender}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2" color="textPrimary">
                    Recipient: {transaction.recipient}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2" color="textPrimary">
                    Amount: {transaction.amount}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2" color="textPrimary">
                    Status: {transaction.status}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TransactionList;
