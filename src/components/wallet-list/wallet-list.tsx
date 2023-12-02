import { Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { buildUrl, ROUTES } from '../../config/routes';
import { walletUtils } from '../../services/wallet-utils';
import { WalletType } from '../../types/types';

type WalletListProps = {
  wallets: WalletType[];
};

export const WalletList: FC<WalletListProps> = ({ wallets }) => {
  return (
    <>
      <Title variant="h6">List of wallets:</Title>

      {wallets.map((item) => (
        <Link key={item.id} to={buildUrl(ROUTES['/wallet/:id'], { id: item.id })}>
          <WalletItem>
            <h3>{item.name}</h3>
            <p>{walletUtils.unitToPreviewName(item.blockchainUnit)}</p>
            <p>
              {item.balance} {item.blockchainUnit}
            </p>
          </WalletItem>
        </Link>
      ))}
    </>
  );
};

const Title = styled(Typography)`
  padding: 10px;
`;

const WalletItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  list-style-type: none;
  align-items: center;
  align-content: center;
  align-self: center;
  text-align: center;
`;
