import { Box, styled } from '@mui/material';

export const Footer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: theme.spacing(8),
  backgroundColor: theme.palette.grey[200],
}));
