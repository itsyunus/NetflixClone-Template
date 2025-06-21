export interface Movie {
  id: string;
  title: string;
  description: string;
  image: string;
  backgroundImage: string;
  videoUrl: string;
  year: number;
  duration: string;
  rating: string;
  genre: string[];
  featured?: boolean;
}

export interface ContentRow {
  id: string;
  title: string;
  movies: Movie[];
}