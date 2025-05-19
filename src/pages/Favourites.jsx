import "../css/Favourite.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../components/MovieCard"

function Favourites() {
   const { favourites } = useMovieContext(); // Corrected variable name to match context

   // Check if the favourites array exists and has items
   if (favourites && favourites.length > 0) {
      return <div>
         <h2 className="favorites">Your Favourites</h2>
          <div className="movies-grid">
      {favourites.map((movie) => (
         <MovieCard movie={movie} key={movie.id} />
      ))}
  </div>
      </div>
   }

 // Render the empty state message if favourites is empty or null/undefined
 return <div className="favorites-empty">
    <h2>No favourite movies added yet</h2>
    <p>start adding movies to your favourites and they will appear here</p>
 </div>
}

export default Favourites