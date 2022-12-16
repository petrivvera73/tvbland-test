import { styled, Box, Container, Typography } from '@mui/material';

export const TableBlock = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.common.white,
  overflow: 'scroll',
  paddingTop: theme.spacing(5),
}));

export const TableContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(11),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  maxWidth: theme.breakpoints.values.xl,
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
}));

export const TableGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyContent: 'center',
  alignItems: 'start',
  gap: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(2),
  },
}));

export const ItemCard = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  gap: theme.spacing(0),
  //   width: `calc(${theme.spacing(6)}*3)`,
  //   height: `calc(${theme.spacing(6)}*4)`,
  overflow: 'hidden',
  borderRadius: 0,
  [theme.breakpoints.up('md')]: {
    width: `calc(${theme.spacing(6)}*3)`,
    //   height: `calc(${theme.spacing(6)}*4)`,
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: 0,
  gap: theme.spacing(0),
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  '& > img': {
    position: 'relative',
    display: 'block',
    width: '100%',
    objectFit: 'cover',
  },
}));

export const ItemCaption = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
}));
