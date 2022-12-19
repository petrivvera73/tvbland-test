/* eslint-disable no-underscore-dangle */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { Loader } from '../components/Loader/Loader';
import { ShowInfo } from '../components/ShowInfo/ShowInfo';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { showsSelectors } from '../store/shows/showsSelectors';
import { getShowDetails } from '../store/shows/showsThunk';
import { IShow } from '../types/shows';
import { ShowCast } from '../components/ShowCast/ShowCast';
import { DetailsHeader } from '../components/DetailsHeader/DetailsHeader';
import { Footer } from '../components/Footer/Footer.styled';
import { DetailesBody } from '../components/DetailsBody/DetailsBody.styled';

export function Details() {
  const dispatch = useAppDispatch();
  const { showId } = useParams();
  const currentId = showId ? Number.parseInt(showId, 10) : null;
  const [info, setInfo] = useState<IShow | null>(null);

  const currentShow = useAppSelector(showsSelectors.getCurrent);
  const isFetching = useAppSelector(showsSelectors.getIsFetching);

  useEffect(() => {
    if (
      currentId &&
      (!currentShow || (currentShow && currentShow.id !== currentId)) &&
      !isFetching
    ) {
      dispatch(getShowDetails(currentId));
    }
    if (currentId && currentShow && currentShow.id === currentId) {
      setInfo(currentShow);
    }
  }, [currentShow, currentId, isFetching, dispatch]);

  return (
    <>
      {info && (
        <>
          <DetailsHeader
            name={info.name}
            poster={info.image.original}
            rating={info.rating.average}
            summary={info.summary ? parse(info.summary) : null}
          />
          <DetailesBody>
            <ShowInfo
              network={info.network?.name}
              schedule={info.schedule?.days}
              status={info.status || 'unknown'}
              genres={info.genres}
            />
            <ShowCast cast={info._embedded?.cast || []} />
          </DetailesBody>
        </>
      )}
      <Footer />
      <Loader />
    </>
  );
}
