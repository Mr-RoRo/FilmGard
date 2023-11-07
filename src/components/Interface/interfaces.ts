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
