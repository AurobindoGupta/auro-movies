
import { useEffect, useState } from 'react';
import './App.css';

import Movie from './component/Movie';

const Featured_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1c40073fce452c87ff4ca4bee5877ecf&page=1";

const Search_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=1c40073fce452c87ff4ca4bee5877ecf&query=";


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
 

  
  useEffect(  () => {
    
    
    getMovies(Featured_API);
    
  }, []);

  const getMovies = ( API) =>{
    
    
            fetch(API)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setMovies(data.results);
          });
        
  }

  const handleSubmit = (e) =>{

    e.preventDefault();

    if(searchTerm) {

      getMovies(Search_API + searchTerm);

      setSearchTerm('');
  }
  else{
    alert("ENTER THE NAME...");
  }

  }

  
  const handleChange = (e) =>{

    setSearchTerm(e.target.value);
  }

  

  return (
        <>
         <header>
         <img  src='./monkey.png' onClick={getMovies(Featured_API)}></img>
         <form onSubmit={handleSubmit}>
         <input className="search" 
                type="text" 
                placeholder="SEARCH" 
                value={searchTerm}
                onChange={handleChange}
          
          >
          </input>
         </form>
          
        </header>

            <div className="movie-container">
         
                  { movies.length > 0 && movies.map((movie) =>(
                      <Movie key={movie.id} { ...movie}/>
                    ))
                  }
      
            </div>
            
            </>
          );
}

export default App;
