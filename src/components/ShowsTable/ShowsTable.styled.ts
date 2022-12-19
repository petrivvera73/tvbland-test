import { styled, Box, Typography } from '@mui/material';

export const TableBlock = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(6),
    '&::before': {
      content: '" "',
      position: 'absolute',
      zIndex: -1,
      backgroundColor: theme.palette.grey[200],
      width: '100%',
      height: theme.spacing(12),
      top: theme.spacing(9),
      transform: `translateY(-100%)`,
    },
  },
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(6),
    '&::before': {
      top: theme.spacing(10),
    },
  },
}));

export const TableCaption = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
}));

export const TableGrid = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundColor: 'transparent',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyContent: 'center',
  alignItems: 'start',
  gap: `${theme.spacing(3)} ${theme.spacing(1)}`,
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(4),
    gridTemplateColumns: `repeat(4, 1fr)`,
  },
  [theme.breakpoints.up('lg')]: {
    gap: '3vw',
    gridTemplateColumns: `repeat(6, 1fr)`,
  },
}));

export const ItemCard = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  gap: theme.spacing(1),
  overflow: 'hidden',
  borderRadius: 0,
  cursor: 'pointer',
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

export const VanishingContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'auto',
  },
}));
