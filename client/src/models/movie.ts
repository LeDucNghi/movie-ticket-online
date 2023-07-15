export interface Movie {
  id: number;
  movieImage: string;
  movieName: string;
  movieDuration?: string;
  movieGenre?: Genre[];
  movieReleaseDate?: Date;
  movieTrailer?: string;
  movieLanguages?: Languages[];
  movieRate?: {
    tomatoes: number;
    audience: number;
  };
}

export interface Genre {
  id: number;
  genreName: string;
}

export interface Languages {
  id: number;
  language: string;
}
