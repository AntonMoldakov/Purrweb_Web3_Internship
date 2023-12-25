import styled from 'styled-components';

import { GenerateWallet } from '../../components/generate-wallet/generate-wallet';
import { ImportWallet } from '../../components/import-wallet/import-wallet';
import { NetworkSelect } from '../../components/network-select/network-select';
import { WalletList } from '../../components/wallet-list/wallet-list';
import { walletsSelectors } from '../../store/ducks/wallet/wallet-selectors';
import { useAppSelector } from '../../store/use-app-selector';

export const Home = () => {
  const wallets = useAppSelector(walletsSelectors.selectWallets);

  return (
    <>
      <Root>
        <ImportWallet />
        <GenerateWallet />
        <NetworkSelect />
      </Root>
      <div>
        <WalletList wallets={wallets} />
      </div>
    </>
  );
};

const Root = styled.div`
  display: flex;
  place-items: center;
`;
