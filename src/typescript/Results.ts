
export interface IMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  name: string;
  video: boolean | string;
  vote_average: number;
  vote_count: number;
  media_type: string;
  tagline: string;
  genres: IMovies[];
  status: string;
  runtime: number;
  created_by: [
    {
      name: string;
    }
  ];
  profile_path:string;
  cast: any;
  results:any;
  crew:any;
}

export interface IMovieData {
  page: number;
  results: IMovies[];
  total_pages: number;
  total_results: number;
}

export interface IBackgroundImages {
  backdrop: string;
  poster: string;
  profile: string;
}
