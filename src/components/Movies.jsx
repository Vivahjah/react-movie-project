import React, { useState } from 'react'
import { getMovies } from '../services/fakeMovieService'
import Liked from './common/Liked';
import Pagination from './common/Pagination';


const Movies = () => {

  
    const [movies, setMovies] = useState(getMovies);
    const [pageSize, setPageSize] = useState(4)
    

   

    const handleDelete = (m) => {
        // const movie = movies.filter(movie => movie._id !== m._id);
        // setMovies(movie)
        setMovies(movies.filter((movie) =>  movie._id !== m._id ));
        
    }
    // const handleLike = (movie) => {
    //     const movies = getMovies()
    //     const index = movies.indexOf(movie)
    //     const movieToToggleLike = {...movies[index]}
    //     movieToToggleLike.like = !movieToToggleLike.like
    //     setMovies({...movies, movieToToggleLike})
        
    // }

    // const handleLike = (m) => {
    
    // const movie = movies.map((movie) => movie.id === m.id ? {...movies, like: !m.like} : ""
           
        
    // const handleLike = (m) => {
    //     const movie = movies.map((movie) => movie._id === m._id ? {...movies, like: !movie.like} : "")
    //     console.log(movie)
    // }
    // const handleLike = (m) => {
    //  const movie = movies.map ((movie) => {
    //      if (movie._id === m._id) {
    //          return {
    //              ...movie, like : !movie.like
    //          }
    //     }
    //     return movie
    //  })  
    //  setMovies(movie)
     
     

    // }
    const handleLike = (m) => {
        setMovies(movies.map((movie) => movie._id === m._id ? {...movie, like : !movie.like} : {...movie}))
 

    }
    const handlePageChange = () => {
        console.log("page change clicked")
    }


  return (
      <>

     
      <h2>{movies.length === 0 ? `No Movies to Show`: `There are ${movies.length} in the Database`}</h2>
      {movies.length > 0 ?  <table className="content-table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Liked</th>
                <th></th>
            </tr>
        </thead>
        <tbody>

            {movies.map((movie) => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Liked like={movie.like} onClick={ () => handleLike(movie)}/></td>
                    <td><button onClick={ () => handleDelete(movie) }>Delete</button></td>
                </tr>
            ))}
            

            
               
        </tbody>
    </table> : null}
    <Pagination itemsCount={movies.length} pageSize = {4} onPageChange={handlePageChange}/>
   
    </>
  )
}

export default Movies
        