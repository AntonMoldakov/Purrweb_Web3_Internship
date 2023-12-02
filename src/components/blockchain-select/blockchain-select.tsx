import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { BlockchainUnit } from '../../types/types';

export const BlockchainSelect = ({ handleChange, chain }: BlockchainSelectType) => {
  return (
    <Box sx={styleBox}>
      <FormControl fullWidth>
        <InputLabel>Chain</InputLabel>

        <Select
          size="small"
          value={chain}
          label="Chain"
          onChange={(event: SelectChangeEvent) => handleChange(event.target.value as BlockchainUnit)}
        >
          <MenuItem value={BlockchainUnit.ETH}>Ethereum</MenuItem>
          <MenuItem value={BlockchainUnit.BTC}>Bitcoin</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

type BlockchainSelectType = {
  handleChange: (network: BlockchainUnit) => void;
  chain: BlockchainUnit;
};

const styleBox = {
  minWidth: 120,
  marginTop: '20px',
};
