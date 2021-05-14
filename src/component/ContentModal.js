import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import "../App.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
  },
  paper: {

    width: "80%",
    height:"100%",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3)
    
  },
}));

export default function ContentModal ({ children, id }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
  
};

console.log(creditDetails);

  return (
    <div>
      <button style={{backgroundColor:"transparent"}} className="movie" type="button" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <div>
                <h2>CAST</h2>
                  <div className="container">
      
      
                     {creditDetails.map ((c) =>
                      <div className='cast'>
                        <img src= {(c.profile_path)? Img_API+(c.profile_path): "https://images.unsplash.com/photo-1620941535699-52b7eafbabd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80" }></img>
                          <div className='info'>
                            <h3>{c.name}</h3>
                          </div> 
                      </div>           
                      )}
                  </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}