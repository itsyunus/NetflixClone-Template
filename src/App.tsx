import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import SearchResults from './components/SearchResults';
import { movies, contentRows } from './data/movies';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(query.length > 0);
  };

  const handleCloseSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const featuredMovie = movies.find(movie => movie.featured) || movies[0];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header onSearch={handleSearch} />
      
      {isSearching ? (
        <SearchResults 
          movies={filteredMovies} 
          query={searchQuery}
          onClose={handleCloseSearch}
        />
      ) : (
        <>
          <Hero movie={featuredMovie} />
          
          <div className="relative z-10 -mt-32 space-y-12 pb-12">
            {contentRows.map(row => (
              <ContentRow key={row.id} contentRow={row} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;