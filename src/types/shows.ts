interface IImage {
  medium: string;
  original: string;
}

export interface IShow {
  id: number;
  name: string;
  summary: string;
  genres: string[];
  status: string;
  premiered: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  image: IImage;
  network: {
    id: number;
    name: string;
  };
  _embedded?: {
    cast: IActor[];
  };
}

export interface IActor {
  person: {
    id: number;
    url: string;
    name: string;
    image: IImage;
  };
  character: {
    id: number;
    name: string;
    image: IImage;
  };
}
