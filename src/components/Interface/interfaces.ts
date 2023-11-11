export interface MovieRes {
  data: {
    country: string;
    genres: Array<string>;
    id: number;
    images: Array<string>;
    imdb_rating: string;
    poster: string;
    title: string;
    year: string;
  }[];
  metadata: {
    current_page: string;
    page_count: number;
    per_page: number;
    total_count: number;
  };
}

export interface GenresList {
  id: number;
  name: string;
}

export interface MovieDetailsInteface {
  id: number;
  title: string;
  poster: string;
  rated: string;
  released: string;
  runtime: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  country: string;
  awards: string;
  metascore: string;
  imdb_rating: string;
  imdb_votes: string;
  imdb_id: string;
  type: string;
  genres: Array<string>;
  images: Array<string>;
}