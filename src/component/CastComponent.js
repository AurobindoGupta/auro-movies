import {useState,useEffect} from 'react';


const CastComponent = (id) => {

    const credit_API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1c40073fce452c87ff4ca4bee5877ecf&language=en-US`;
    
    const Img_API = "https://image.tmdb.org/t/p/w1280";

    const [creditDetails, setCreditDetails] = useState([]);
   


    useEffect(() => {
       
        getMovies(credit_API);
        
    }, []);

    const getMovies = ( API) =>{
    
    
        fetch(API)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCreditDetails(data.cast);
      });
    
}

    
    
    return (
      <div>
      <h2>CAST</h2>
      <div className="container">
      
      
      {
         creditDetails.map ((c) =>
        <div className='cast'>
        <img src= {(c.profile_path)? Img_API+(c.profile_path): "https://images.unsplash.com/photo-1620941535699-52b7eafbabd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80" }></img>
        <div className='info'>
        <h3>
              {c.name} 
        </h3>
        </div> 
        </div>           
        )}
      </div>
      </div>
    );
}

export default CastComponent;