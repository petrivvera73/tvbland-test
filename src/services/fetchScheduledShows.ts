import axios from 'axios';
import { IShow } from '../types/shows';
import { timeToString } from '../utils/timeToString';

export async function fetchScheduledShows(date: Date = new Date()) {
  const todayString = timeToString(date);
  const { data } = await axios.get(`/schedule?date=${todayString}`);
  const remappedData = data.map((item: { show: IShow }) => item.show);
  const dataWithNoClones = remappedData.filter(
    (show: IShow, index: number, array: IShow[]) => {
      return array.findIndex((e) => e.id === show.id) === index;
    }
  );
  return dataWithNoClones || [];
}
