import React, { useState } from 'react'
import { getMovies } from '../services/fakeMovieService'

const Movies = () => {

  
    const [movies, setMovies] = useState(getMovies);

    const handleDelete = (m) => {
        const movie = movies.filter(movie => movie._id !== m._id);
        setMovies(movie)
        
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
                    <td><button onClick={ () => handleDelete(movie) }>Delete</button></td>
                </tr>
            ))}
            

            
               
        </tbody>
    </table> : null}
   
    </>
  )
}

export default Movies
        