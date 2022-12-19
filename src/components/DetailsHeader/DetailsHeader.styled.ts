import { Box, styled, Typography } from '@mui/material';
import { ContentContainer } from '../ContentContainer/ContentContainer.styled';

export const DetailsHeaderBlock = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  backgroundColor: theme.palette.grey[200],
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(5),
    paddingBottom: 0,
    '&::before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: theme.spacing(5),
      position: 'absolute',
      bottom: '-2px',
      backgroundColor: theme.palette.common.white,
    },
  },
}));

export const DetailsHeaderContainer = styled(ContentContainer)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    paddingBottom: 0,
  },
}));

export const DetailsHeaderGrid = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    gap: theme.spacing(5),
  },
}));

export const PosterContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  padding: 0,
  overflow: 'hidden',
  flexShrink: 0,
  [theme.breakpoints.up('sm')]: {
    maxWidth: theme.spacing(12),
  },
  '& > img': {
    display: 'block',
    width: '100%',
    minWidth: theme.spacing(12),
    objectFit: 'cover',
  },
}));

export const DetailsCaption = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  marginTop: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(1),
  },
}));

export const DetailsSummary = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  lineHeight: '1.55',
  [theme.breakpoints.up('sm')]: {
    maxHeight: theme.spacing(11),
    overflow: 'scroll',
  },
}));
