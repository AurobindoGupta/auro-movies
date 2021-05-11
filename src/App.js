
import { useEffect, useState } from 'react';
import './App.css';

import Movie from './component/Movie';

const Featured_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1c40073fce452c87ff4ca4bee5877ecf&page=1";

const Search_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=1c40073fce452c87ff4ca4bee5877ecf&query=";


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(  () => {
    fetch(Featured_API).then(res => res.json()).then(data => {
      console.log(data);
      setMovies(data.results);
    });
    
    
  }, [])


  return (
    <div >
    { movies.length > 0 && movies.map((movie) =>(
      <Movie key={movie.id} { ...movie}/>
    ))}
      
    </div>
  );
}

export default App;
