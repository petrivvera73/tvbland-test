import { styled, Box, Typography } from '@mui/material';
import { ContentContainer } from '../ContentContainer/ContentContainer.styled';

export const HeaderBlock = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.grey[200],
  overflow: 'hidden',
}));

export const MinHeaderBlock = styled(Box)(({ theme }) => ({
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  height: theme.spacing(7),
  backgroundColor: theme.palette.grey[200],
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(5),
    height: theme.spacing(9),
  },
}));

export const HeaderContainer = styled(ContentContainer)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(6),
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(6),
  maxWidth: `${theme.breakpoints.values.md}px`,
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(6),
    '& > span': {
      display: 'block',
    },
  },
}));
