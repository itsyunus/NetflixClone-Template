import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  index: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformOrigin: index < 3 ? 'left' : 'center'
      }}
    >
      {/* Base Card */}
      <div className="relative w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      {/* Expanded Info Card */}
      {isHovered && (
        <div className="absolute top-0 left-0 right-0 bg-gray-900 rounded-lg shadow-2xl transform translate-y-0 transition-all duration-300 z-20 min-w-[300px]">
          {/* Image */}
          <div className="relative w-full aspect-video">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                <Play size={24} className="text-white ml-1" fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Play size={16} className="text-black ml-0.5" fill="currentColor" />
              </button>
              <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Plus size={16} className="text-white" />
              </button>
              <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <ThumbsUp size={16} className="text-white" />
              </button>
              <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors ml-auto">
                <ChevronDown size={16} className="text-white" />
              </button>
            </div>

            {/* Metadata */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-green-500 font-semibold">98% Match</span>
              <span className="bg-gray-700 px-1 rounded text-xs">{movie.rating}</span>
              <span className="text-gray-300">{movie.year}</span>
              <span className="text-gray-300">{movie.duration}</span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-1">
              {movie.genre.map((genre, i) => (
                <span key={i} className="text-xs text-gray-300">
                  {genre}{i < movie.genre.length - 1 && ' •'}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-white font-semibold text-sm">{movie.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;