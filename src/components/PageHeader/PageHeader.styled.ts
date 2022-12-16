import { styled, Box, Container, Typography } from '@mui/material';

export const HeaderBlock = styled(Box)(({ theme }) => ({
  position: 'fixed',
  width: '100%',
  backgroundColor: theme.palette.grey[300],
  overflow: 'hidden',
}));

export const HeaderContainer = styled(Container)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(6),
  maxWidth: theme.breakpoints.values.xl,
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(4),
}));
