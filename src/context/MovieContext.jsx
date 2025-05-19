import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const localData = localStorage.getItem("favourites");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavorites = (movie) => { // Renamed function
    setFavourites((prevFavourites) => [...prevFavourites, movie]);
  };

  const removeFromFavorites = (movieId) => { // Renamed function
    setFavourites((prevFavourites) =>
      prevFavourites.filter((movie) => movie.id !== movieId)
    );
  };

  const isFavorite = (movieId) => { // Renamed function
    return favourites.some((movie) => movie.id === movieId);
  };

  // Provide an object with properties matching what MovieCard expects
  return (
    <MovieContext.Provider
      value={{ favourites, isFavorite, addToFavorites, removeFromFavorites }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);