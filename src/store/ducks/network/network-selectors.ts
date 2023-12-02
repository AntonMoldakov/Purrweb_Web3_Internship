import { RootState } from '../../store';

export const networkSelectors = {
  selectNetwork: (state: RootState) => {
    return state.network.network;
  },
};
