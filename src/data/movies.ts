import { Movie, ContentRow } from '../types';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Stranger Things',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backgroundImage: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '#',
    year: 2023,
    duration: '45m',
    rating: 'TV-14',
    genre: ['Sci-Fi', 'Horror', 'Drama'],
    featured: true
  },
  {
    id: '2',
    title: 'The Crown',
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
    image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=400',
    backgroundImage: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '#',
    year: 2023,
    duration: '58m',
    rating: 'TV-MA',
    genre: ['Drama', 'History', 'Biography']
  },
  {
    id: '3',
    title: 'Dark Crystal',
    description: 'In a mystical world divided by factions, a young hero must unite the warring tribes to restore balance to their realm.',
    image: 'https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=400',
    backgroundImage: 'https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '#',
    year: 2023,
    duration: '2h 5m',
    rating: 'PG',
    genre: ['Fantasy', 'Adventure', 'Family']
  },
  {
    id: '4',
    title: 'Cyberpunk: Edgerunners',
    description: 'In a dystopian future, a street kid trying to survive in Night City becomes an edgerunner - a mercenary outlaw.',
    image: 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=400',
    backgroundImage: 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '#',
    year: 2023,
    duration: '25m',
    rating: 'TV-MA',
    genre: ['Animation', 'Action', 'Sci-Fi']
  },
  {
    id: '5',
    title: 'Ocean Mysteries',
    description: 'Dive deep into the world\'s most mysterious waters and discover the secrets that lie beneath the surface.',
    image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400',
    backgroundImage: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '#',
    year: 2023,
    duration: '42m',
    rating: 'TV-G',
    genre: ['Documentary', 'Nature']
  },
  {
    id: '6',
    title: 'Space Odyssey',
    description: 'A team of astronauts embarks on a dangerous mission to save humanity from extinction in this thrilling space adventure.',
    image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=400',
    backgroundImage: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '#',
    year: 2023,
    duration: '2h 28m',
    rating: 'PG-13',
    genre: ['Sci-Fi', 'Action', 'Adventure']
  },
  {
    id: '7',
    title: 'Medieval Legends',
    description: 'Epic tales of knights, dragons, and magic in a realm where honor and betrayal shape the fate of kingdoms.',
    image: 'https://images.pexels.com/photos/161688/castle-hohenzollern-baden-württemberg-germany-161688.jpeg?auto=compress&cs=tinysrgb&w=400',
    backgroundImage: 'https://images.pexels.com/photos/161688/castle-hohenzollern-baden-württemberg-germany-161688.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '#',
    year: 2023,
    duration: '52m',
    rating: 'TV-14',
    genre: ['Fantasy', 'Drama', 'Action']
  },
  {
    id: '8',
    title: 'Urban Jungle',
    description: 'A gritty crime drama following detectives as they navigate the dangerous underworld of a sprawling metropolis.',
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400',
    backgroundImage: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: '#',
    year: 2023,
    duration: '48m',
    rating: 'TV-MA',
    genre: ['Crime', 'Drama', 'Thriller']
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: movies.slice(0, 6)
  },
  {
    id: 'popular',
    title: 'Popular on Netflix',
    movies: movies.slice(2, 8)
  },
  {
    id: 'mylist',
    title: 'My List',
    movies: movies.slice(1, 5)
  },
  {
    id: 'scifi',
    title: 'Sci-Fi & Fantasy',
    movies: movies.filter(movie => 
      movie.genre.includes('Sci-Fi') || movie.genre.includes('Fantasy')
    )
  },
  {
    id: 'drama',
    title: 'Drama Series',
    movies: movies.filter(movie => movie.genre.includes('Drama'))
  },
  {
    id: 'action',
    title: 'Action & Adventure',
    movies: movies.filter(movie => 
      movie.genre.includes('Action') || movie.genre.includes('Adventure')
    )
  }
];