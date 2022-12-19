import { styled, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';

const StyledRating = styled(Rating)(({ theme }) => ({
  color: theme.palette.grey[600],
  '& .MuiRating-iconEmpty svg': {
    color: theme.palette.grey[600],
    opacity: 0.25,
  },
}));

const StyledRatingTiny = styled(StyledRating)(() => ({
  fontSize: '15px',
}));

const StyledRatingLarge = styled(StyledRating)(() => ({
  fontSize: '24px',
}));

const RatingCaption = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
  },
}));

const RatingContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export function RatingStarsTiny({ value }: { value: number | null }) {
  const convertedValue = value ? value / 2 : null;
  return (
    <StyledRatingTiny
      value={convertedValue}
      emptyIcon={<StarIcon fontSize="inherit" />}
      readOnly
    />
  );
}

export function RatingStarsLarge({ value }: { value: number | null }) {
  const convertedValue = value ? value / 2 : null;
  return (
    <RatingContainer>
      <StyledRatingLarge
        value={convertedValue}
        emptyIcon={<StarIcon fontSize="inherit" />}
        readOnly
      />
      <RatingCaption>
        {value ? `${convertedValue}/5` : 'no rating'}
      </RatingCaption>
    </RatingContainer>
  );
}
