import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { showsSelectors } from '../store/shows/showsSelectors';
import { getShows } from '../store/shows/showsThunk';

export function Shows() {
  const dispatch = useAppDispatch();
  const shows = useAppSelector(showsSelectors.getShows);

  useEnhancedEffect(() => {
    if (!shows.length) {
      dispatch(getShows());
    }
  }, [dispatch, shows]);

  return (
    <div>
      <h2>Page of shows</h2>
      <ul>
        {shows.length &&
          shows.map(({ id, name, genres, rating, image }) => (
            <li key={id}>
              <img src={image.medium} alt={name} />
              {` ${name} ${genres.join('|')}
              ${rating.average}`}
            </li>
          ))}
      </ul>
    </div>
  );
}
