import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector } from '../../hooks/reduxHooks';
import { showsSelectors } from '../../store/shows/showsSelectors';

export function Loader() {
  const isFetching = useAppSelector(showsSelectors.getIsFetching);

  return (
    <Backdrop
      sx={{
        bgcolor: '#0001',
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={isFetching}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
