import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { MOCK_TRANSACTIONS, MOCK_TRANSACTIONS_TOKEN } from '../../mock/mock';
import { walletsActions } from '../../store/ducks/wallet/wallet-slice';
import { useAppDispatch } from '../../store/use-app-dispatch';
import { Token, WalletType } from '../../types/types';
import { ButtonDefault } from '../../ui/buttons/button-default/button-default';
import { SendModal } from '../send-modal/send-modal';
import TokenList from '../token-list/token-list';
import Transactions from '../transactions/transactions';

const Wallet = ({ wallet, tokens }: WalletPropsType) => {
  const [isOpenSendModal, setIsOpenSendModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [priceInUSD, setPriceInUSD] = useState(0);

  const dispatch = useAppDispatch();

  const onRemoveWallet = () => {
    dispatch(walletsActions.removeWallet(wallet.id));
  };

  const onSendTransaction = () => {};

  const getPriceInUSD = async () => {
    try {
      setIsLoading(true);
      const response = await (
        await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
      ).json();
      setPriceInUSD(response.ethereum.usd as number);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPriceInUSD();
  }, []);

  return (
    <Root>
      <CardContent>
        <MainInfoWrapper>
          <div>
            <Typography variant="h6" gutterBottom>
              Wallet Information
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Balance: {wallet.balance}
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              <ButtonDefault title="Refetch" disabled={isLoading} onClick={getPriceInUSD} />
              Price in USD: ${wallet.balance * priceInUSD}
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Wallet Address: {wallet.address}
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Public Key: {wallet.publicKey}
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Private Key: {wallet.privateKey}
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Mnemonic Phrase: {wallet.mnemonic}
            </Typography>
          </div>

          <ActionsWrapper>
            <IconButton edge="end" aria-label="delete" size="small" onClick={onRemoveWallet}>
              <DeleteIcon />
            </IconButton>

            <IconButton
              edge="end"
              aria-label="Send"
              size="small"
              onClick={() => {
                setIsOpenSendModal(true);
              }}
            >
              <SendIcon />
            </IconButton>
          </ActionsWrapper>
        </MainInfoWrapper>

        <ListWrapper>
          <TokenList tokens={tokens} />

          <Transactions transactionsCoin={MOCK_TRANSACTIONS} transactionsToken={MOCK_TRANSACTIONS_TOKEN} />
        </ListWrapper>
      </CardContent>

      <SendModal
        isOpen={isOpenSendModal}
        onClose={() => setIsOpenSendModal(false)}
        onSend={onSendTransaction}
        title="Send token"
      />
    </Root>
  );
};

type WalletPropsType = {
  wallet: WalletType;
  tokens: Token[];
};

const Root = styled(Card)`
  width: 100%;

  margin: 10px;
  padding: 20px;

  border-radius: 10px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
`;

const ListWrapper = styled.div`
  display: flex;
`;

const MainInfoWrapper = styled.div`
  max-width: 78vw;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const ActionsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export default Wallet;
