import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Gifstate } from "../context/context";
import FollowOn from "../components/FollowOn";
import { Gif } from "../components/Gif";

/**
 * Renders a category page displaying GIFs based on the specified category.
 * @returns {JSX.Element} A component that shows a featured GIF, category title, and a grid of related GIFs.
 */
function category() {
  const [searchResults, setSearchResults] = useState([]);

  const { gf } = Gifstate();

  const { category } = useParams();

  /**
   * Fetches GIF search results asynchronously based on the current category
   * @param {void} - This function doesn't take any parameters
   * @returns {Promise<void>} A promise that resolves when the search results are fetched and set
   */
  async function fetchSearchResults() {
    const { data } = await gf.gifs(category, category);
    setSearchResults(data);
  }
  /**
   * Fetches search results when the category changes
   * @param {undefined} No explicit parameters
   * @returns {void} This effect does not return a value
   */
  useEffect(() => {
    fetchSearchResults();
  }, [category]);

  return (
      <div className="flex flex-col sm:flex-row gap-5 my-4">
      <div className="w-full sm:w-72">
        {searchResults.length > 0 && <Gif gif={searchResults[0]} />}
        <span className="text-gray-400 text-sm pt-2">
          Don&apos;t tell it to me, GIF it to me!
        </span>
        <FollowOn />
        <div className="w-full h-0.5 mt-6 bg-gray-800" />
      </div>
      <div>
        <h2 className="text-4xl pb-1 font-extrabold capitalize">
          {category.split("-").join(" & ")} GIFs
        </h2>
        <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
          /**
           * Renders a list of GIF components based on search results
           * @param {Array} searchResults - An array of GIF objects from search results
           * @returns {Array} An array of Gif components, excluding the first search result
           */
          @{category}
        </h2>

        {searchResults.length > 0 && (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
            {searchResults.slice(1).map((gif) => (
              <Gif gif={gif} key={gif.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default category;
