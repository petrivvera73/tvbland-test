import { ReactNode } from 'react';
import fallbackPoster from '../../images/fallbackPoster.png';
import { Logo } from '../Logo/Logo';
import { RatingStarsLarge } from '../RatingStars/RatingStars';
import {
  DetailsHeaderGrid,
  DetailsHeaderBlock,
  DetailsHeaderContainer,
  PosterContainer,
  DetailsCaption,
  DetailsSummary,
} from './DetailsHeader.styled';

export function DetailsHeader({
  name = '',
  poster = fallbackPoster,
  rating = null,
  summary = '',
}: {
  name: string | undefined;
  poster: string | undefined;
  rating: number | null | undefined;
  summary: string | ReactNode | undefined;
}) {
  return (
    <DetailsHeaderBlock>
      <DetailsHeaderContainer>
        <Logo />
        <DetailsHeaderGrid>
          <PosterContainer>
            <img src={poster} alt={`${name} show poster`} width={480} />
          </PosterContainer>
          <div>
            <RatingStarsLarge value={rating} />
            <DetailsCaption>{name}</DetailsCaption>
            <DetailsSummary>{summary}</DetailsSummary>
          </div>
        </DetailsHeaderGrid>
      </DetailsHeaderContainer>
    </DetailsHeaderBlock>
  );
}
