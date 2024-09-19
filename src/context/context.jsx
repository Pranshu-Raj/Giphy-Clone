import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useEffect, useState } from "react";

const GifContext = createContext();

/**
 * A provider component for managing GIF-related state and functionality
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider
 * @returns {React.ReactElement} A GifContext.Provider component wrapping the children
 */
const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favourites, setFavourites] = useState([]);

  /**
   * Adds or removes a GIF ID from the favorites list and updates local storage
   * @param {string} id - The ID of the GIF to add or remove from favorites
   * @returns {void} This function doesn't return a value
   */
  function addToFavourites(id) {
    if (favourites.includes(id)) {
      ```
      /**
       * Removes a specific item from the favourites array
       * @param {Array} favourites - The array of favourite item IDs
       * @param {string|number} id - The ID of the item to be removed from favourites
       * @returns {Array} A new array with the specified item removed
       */
      ```
      const updatedFavourites = favourites.filter((itemId) => itemId !== id);
      localStorage.setItem("favouriteGIFs", JSON.stringify(updatedFavourites));
      setFavourites(updatedFavourites);
    /**
     * Initializes the favorites state with data from local storage
     * @param {void} - This useEffect hook doesn't take any parameters
     * @returns {void} This hook doesn't return anything, it updates state
     */
    } else {
      const updatedFavourites = [...favourites];
      updatedFavourites.push(id);
      localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavourites));
      setFavourites(updatedFavourites)
    }
  };

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
    setFavourites(favourites);
  },[])

  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

  return (
    <GifContext.Provider
      value={{ gf, gifs, setGifs, filter, setFilter, favourites, addToFavourites }}
    >
      {children}
    </GifContext.Provider>
  );
};

/**
 * A custom hook that returns the current state of the GifContext.
 * @returns {object} The current state object from the GifContext.
 */
export const Gifstate = () => {
  return useContext(GifContext);
};

export default GifProvider;
