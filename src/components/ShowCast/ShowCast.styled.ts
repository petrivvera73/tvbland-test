import { Avatar, Box, styled, Typography } from '@mui/material';

export const CastTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  marginTop: theme.spacing(5),
}));

export const CastWrapper = styled(Box)(() => ({
  margin: 0,
  padding: 0,
}));

export const CastGrid = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  [theme.breakpoints.up('sm')]: { gap: 0, gridTemplateColumns: '1fr' },
}));

export const CastField = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateRows: '1fr 1fr',
  gridTemplateColumns: `${theme.spacing(7)} auto`,
  gap: theme.spacing(0),
  [theme.breakpoints.up('sm')]: {
    gridAutoFlow: 'row',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr 3fr 2fr',
    width: '100%',
    height: theme.spacing(6),
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.common.black}`,
  },
}));

export const ActorBadge = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  gridRow: 'span 2',
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

export const ActorName = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  alignSelf: 'end',
  [theme.breakpoints.up('sm')]: {
    alignSelf: 'auto',
  },
}));

export const CharacterName = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.grey[500],
}));
