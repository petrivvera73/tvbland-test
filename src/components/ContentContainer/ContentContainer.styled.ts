import { styled, Container } from '@mui/material';

export const ContentContainer = styled(Container)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    maxWidth: `${theme.breakpoints.values.xl}px`,
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
}));
