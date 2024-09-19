import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Gifstate } from "../context/context";
import FilterGifs from "../components/filterGifs";
import { Gif } from "../components/Gif";

/**
 * Search component that fetches and displays GIF search results based on a query
 * @param {void} - This component doesn't accept any parameters directly
 * @returns {JSX.Element} A div containing the search query, filter options, and search results or a message if no results are found
 */
```
/**
 * Asynchronously fetches search results based on the current query and filter settings.
 * @param {void} - This function doesn't take any parameters.
 * @returns {Promise<void>} A promise that resolves when the search results have been fetched and set.
 */
```
function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const { gf, filter } = Gifstate();
  const { query } = useParams();

  async function fetchSearchResults() {
    const { data } = await gf.search(query, {
      sort: "relevant",
      lang: "en",
      type: filter,
      limit: 20,
    });
    setSearchResults(data);
  }
  /**
   * Fetches search results when the filter changes
   * @param {void} None - This useEffect hook doesn't take any parameters
   * @returns {void} This hook doesn't return anything, it triggers a side effect
   */
  useEffect(() => {
    fetchSearchResults();
  }, [filter]);

  return (
    <div className="my-4">
      <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>
/**
 * Renders a list of GIF components based on search results
 * @param {Array} searchResults - An array of GIF objects containing search results
 * @returns {JSX.Element[]} An array of Gif components, each representing a GIF from the search results
 */

      <FilterGifs alignLeft={true} />

      {searchResults.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {searchResults.map((gif) => (
            <Gif gif={gif} key={gif.id} />
          ))}
        </div>
      ) : (
        <span>
          {""}No GIFs found for {query}. Try searching for Stickers instead?
        </span>
      )}
    </div>
  );
}

export default Search;
