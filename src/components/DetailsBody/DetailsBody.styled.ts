import { styled } from '@mui/material';
import { ContentContainer } from '../ContentContainer/ContentContainer.styled';

export const DetailesBody = styled(ContentContainer)(({ theme }) => ({
  paddingBottom: theme.spacing(7),
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(5),
  },
}));
