import React from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
  const [isMuted, setIsMuted] = React.useState(true);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${movie.backgroundImage})` }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-12">
        <div className="max-w-2xl space-y-6">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {movie.title}
          </h1>

          {/* Metadata */}
          <div className="flex items-center space-x-4 text-white">
            <span className="bg-red-600 px-2 py-1 rounded text-sm font-semibold">
              {movie.rating}
            </span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <div className="flex space-x-2">
              {movie.genre.slice(0, 3).map((g, i) => (
                <span key={i} className="text-gray-300">{g}</span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
            {movie.description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-white text-black px-6 md:px-8 py-3 rounded hover:bg-gray-200 transition-colors font-semibold">
              <Play size={20} fill="currentColor" />
              <span>Play</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-600/70 text-white px-6 md:px-8 py-3 rounded hover:bg-gray-600/90 transition-colors font-semibold">
              <Info size={20} />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>

      {/* Audio Control */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 right-8 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors border border-gray-600"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Age Rating Badge */}
      <div className="absolute bottom-8 left-4 md:left-12 bg-gray-800/80 px-3 py-1 rounded">
        <span className="text-white text-sm font-semibold">{movie.rating}</span>
      </div>
    </div>
  );
};

export default Hero;