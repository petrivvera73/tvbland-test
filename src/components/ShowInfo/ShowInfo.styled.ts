import { Box, styled, Typography } from '@mui/material';

export const InfoTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  marginTop: theme.spacing(5),
}));

export const InfoWrapper = styled(Box)(() => ({
  margin: 0,
  padding: 0,
}));

export const InfoGrid = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(3),
  [theme.breakpoints.up('sm')]: { gap: 0, gridTemplateColumns: '1fr' },
}));

export const InfoField = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(0),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 2fr',
    width: '100%',
    height: theme.spacing(6),
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.common.black}`,
  },
}));

export const FieldTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
}));

export const FieldValue = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.grey[500],
}));
