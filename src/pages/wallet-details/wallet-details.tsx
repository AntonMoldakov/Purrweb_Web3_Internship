import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Wallet from '../../components/wallet/wallet';
import { tokensSelectors } from '../../store/ducks/tokens/tokens-selectors';
import { walletsSelectors } from '../../store/ducks/wallet/wallet-selectors';
import { useAppSelector } from '../../store/use-app-selector';

export const WalletDetails = () => {
  const { id: paramsId } = useParams();
  const id = paramsId as string;

  const wallet = useAppSelector(walletsSelectors.selectWalletById(id));
  const tokens = useAppSelector(tokensSelectors.selectTokensByWallet(id));

  return (
    <Container>
      {wallet ? (
        <Wallet wallet={wallet} tokens={tokens} />
      ) : (
        <FullScreenWrapper>
          <CircularProgress />
        </FullScreenWrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  gap: 20px;
`;

const FullScreenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
