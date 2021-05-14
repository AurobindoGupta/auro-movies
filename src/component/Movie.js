import React from 'react';

import ContentModal from './ContentModal';


const Img_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) =>{

    if (vote>= 8){
        return 'green';
    }
    else if(vote>=6 && vote < 8){
        return 'orange';
    }
    else{
        return 'red';
    }
}



const Movie = ({ title, poster_path, overview, vote_average, id }) => {

    return(
    <ContentModal id = {id} >
            <img src={(poster_path)? (Img_API + poster_path)
            :'https://images.unsplash.com/photo-1599460489872-f2c4dd391ac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}
             alt={ title } />
            <div className="movie-info">
                <h3> {title} </h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>
                 {vote_average} </span>

            </div>
            <div className="movie-overview">
                    <h4>OVERVIEW:</h4>
                    <p>{overview} </p>
            </div>
    </ContentModal>

)}

export default Movie;