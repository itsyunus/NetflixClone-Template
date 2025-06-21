import React from 'react';
import { Movie } from '../types';
import MovieCard from './MovieCard';

interface SearchResultsProps {
  movies: Movie[];
  query: string;
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ movies, query, onClose }) => {
  if (movies.length === 0) {
    return (
      <div className="min-h-screen bg-black pt-24 px-4 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-white text-2xl md:text-3xl font-semibold">
            No results found for "{query}"
          </h1>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">Try searching for something else</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 px-4 md:px-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-white text-2xl md:text-3xl font-semibold">
          Search results for "{query}"
        </h1>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-colors text-2xl"
        >
          ✕
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;