import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { networkSelectors } from '../../store/ducks/network/network-selectors';
import { networkActions } from '../../store/ducks/network/network-slice';
import { useAppDispatch } from '../../store/use-app-dispatch';
import { useAppSelector } from '../../store/use-app-selector';
import { NetworkType } from '../../types/types';

export const NetworkSelect = () => {
  const dispatch = useAppDispatch();
  const network = useAppSelector(networkSelectors.selectNetwork);

  return (
    <Box sx={styleBox}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Network</InputLabel>
        <Select
          size="small"
          value={network}
          defaultValue={network}
          defaultChecked={true}
          label="Network"
          onChange={(value: SelectChangeEvent) =>
            dispatch(networkActions.toggleNetwork(value.target.value as NetworkType))
          }
        >
          <MenuItem value={NetworkType.Mainnet}>Mainnet</MenuItem>
          <MenuItem value={NetworkType.Testnet}>Testnet</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

const styleBox = {
  minWidth: '120px',
  margin: '10px',
};
