import { React, useState } from "react";
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

/**
 * GifSearch component for searching GIFs and Stickers
 * @returns {JSX.Element} A search input with a clear button and a search button
 */
```
/**
 * Asynchronously searches for GIFs based on the current query and navigates to the search results page.
 * @param {void} - This function doesn't take any parameters.
 * @returns {Promise<void>} A promise that resolves when the navigation is complete or when the function exits due to an empty query.
 */
```
export default function GifSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  async function searchGIFs() {
    if (query.trim() === "") {
      return;
    }
    navigate(`/search/${query}`);
  }
  return (
    <div className="flex relative">
      <input
        type="text"
        value={query}
        /**
         * Event handler for updating the query state when the input value changes
         * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object
         * @returns {void} This function does not return a value
         */
        onChange={(e) => setQuery(e.target.value)}
        /**
         * Renders a button component that clears the query when clicked
         * @param {function} onClick - Function to clear the query state
         * @param {string} className - CSS classes for styling the button
         * @returns {JSX.Element} A button element with an X icon
         */
        placeholder="Search all the GIFs and Stickers"
        className="w-full pl-4 pr-4 py-5 text-xl text-black rounded-tl border border-gray-300 outline-none"
      />

          {query && (
              <button onClick={() => setQuery("")} className="absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-6"><HiMiniXMark size={22}/></button>)}

          <button onClick={searchGIFs} className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-2 rounded-tr rounded-br"><HiOutlineMagnifyingGlass size={ 35 } className="-scale-x-100"/></button>
    </div>
  );
}
