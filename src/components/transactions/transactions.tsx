import { Card, Tab, Tabs, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { TransactionType } from '../../types/types';
import TransactionList from './ui/transaction-list/transaction-list';

type TransactionListProps = {
  transactionsCoin: TransactionType[];
  transactionsToken: TransactionType[];
};

const Transactions: FC<TransactionListProps> = ({ transactionsCoin, transactionsToken }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (_: React.SyntheticEvent<Element, Event>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Root>
      <Typography variant="h5" gutterBottom>
        Transaction List
      </Typography>
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="Coin Transactions" />
        <Tab label="Token Transactions" />
      </Tabs>
      {selectedTab === 0 && <TransactionList transactions={transactionsCoin} />}
      {selectedTab === 1 && <TransactionList transactions={transactionsToken} />}
    </Root>
  );
};

const Root = styled(Card)`
  max-width: 700;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  padding: 20px;
`;

export default Transactions;
