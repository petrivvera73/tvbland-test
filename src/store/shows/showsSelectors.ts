import { IShow } from '../../types/shows';
import { RootState } from '../store';

export const showsSelectors = {
  getIsFetching: (state: RootState): boolean =>
    state.rootReducer.shows.isFetching,
  getShows: (state: RootState): IShow[] => state.rootReducer.shows.items,
  getCurrent: (state: RootState): IShow | null =>
    state.rootReducer.shows.current,
};
