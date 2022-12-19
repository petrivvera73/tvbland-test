import React from 'react';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { showsSelectors } from '../../store/shows/showsSelectors';
import { getShows } from '../../store/shows/showsThunk';
import {
  ItemCaption,
  ItemCard,
  TableBlock,
  TableGrid,
  ImageBox,
  TableCaption,
} from './ShowsTable.styled';
import fallbackPoster from '../../images/fallbackPoster.png';
import { RatingStarsTiny } from '../RatingStars/RatingStars';
import { ContentContainer } from '../ContentContainer/ContentContainer.styled';

export function ShowsTable() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const shows = useAppSelector(showsSelectors.getShows);

  useEnhancedEffect(() => {
    if (!shows.length) {
      dispatch(getShows());
    }
  }, [dispatch, shows]);

  const handleClick = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ): void => {
    const showId = (event.currentTarget as HTMLElement).id;
    if (showId) {
      navigate(`${ROUTES.shows}/${showId}`);
    }
  };

  return (
    <TableBlock>
      <ContentContainer>
        <TableCaption>Last Added Shows</TableCaption>
        <TableGrid>
          {shows.length > 0 &&
            shows.map(({ id, name, rating, image }) => (
              <ItemCard
                key={id}
                id={id.toString()}
                onClick={handleClick}
                onKeyDown={handleClick}
                role="presentation"
              >
                <ImageBox>
                  <img src={image?.medium || fallbackPoster} alt={name} />
                </ImageBox>
                <RatingStarsTiny value={rating.average} />
                <ItemCaption>{name}</ItemCaption>
              </ItemCard>
            ))}
        </TableGrid>
      </ContentContainer>
    </TableBlock>
  );
}
