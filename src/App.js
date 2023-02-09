import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import './App.css'


function App() {
  const [movies, setMovies] = useState([]);

  // The useEffect is used when we want retrieve movies
  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=e333c302e5c604cb32df168df9cc44f1&language=en-US&query=home%20alone&page=1&include_adult=false'

    const fetchHomeAloneMovies = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Data before the setMovies', data);
      setMovies(data.results);
    }

    fetchHomeAloneMovies();
  }, []);
  
  
  return (
    <div>
      {
        movies.length > 0 ? <MovieList movieItems={movies} /> : 'Loading Movies...'
      }
    </div>
  );
}

export default App;
