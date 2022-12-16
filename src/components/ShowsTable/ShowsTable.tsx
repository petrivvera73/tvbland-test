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
  TableContainer,
  TableBlock,
  TableGrid,
  ImageBox,
} from './ShowsTable.styled';

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
      navigate(`${ROUTES.shows}/:${showId}`);
    }
  };

  return (
    <TableBlock>
      <TableContainer>
        <TableGrid>
          {shows.length &&
            shows.map(({ id, name, rating, image }) => (
              <ItemCard
                key={id}
                id={id.toString()}
                onClick={handleClick}
                onKeyDown={handleClick}
                role="presentation"
              >
                <ImageBox>
                  <img src={image?.medium || '/'} alt={name} />
                </ImageBox>
                <ItemCaption>{`${rating.average} ${name}`}</ItemCaption>
              </ItemCard>
            ))}
        </TableGrid>
      </TableContainer>
    </TableBlock>
  );
}
