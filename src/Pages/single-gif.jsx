import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Gifstate } from "../context/context";
import { Gif } from "../components/Gif";

import { HiOutlineExternalLink } from "react-icons/hi";
import {
  HiMiniChevronDown,
  HiMiniChevronUp,
  HiMiniHeart,
} from "react-icons/hi2";
import { FaPaperPlane } from "react-icons/fa6";
import { IoCodeSharp } from "react-icons/io5";
import FollowOn from "../components/FollowOn";

const contentType = ["gifs", "stickers", "texts"];

/**
 * Renders a page displaying a specific GIF and related GIFs
 * @returns {JSX.Element} The rendered GIF page component
 */
export default function GifPage() {
  const { type, slug } = useParams();
  const [gif, setGif] = useState({});
  const [relatedGifs, setRelatedGifs] = useState([]);
  /**
   * Fetches a specific GIF and related GIFs based on the provided slug
   * @param {string} type - The content type to validate
   * @param {string} slug - The slug containing the GIF ID
   * @param {function} setGif - Function to set the fetched GIF data
   * @param {function} setRelatedGifs - Function to set the related GIFs data
   * @returns {void} This effect does not return anything
   */
  const [readMore, setReadMore] = useState(false);

  const { gf, addToFavourites, favorites = [] } = Gifstate();

  useEffect(() => {
    if (!contentType.includes(type)) {
      throw new Error("Invalid Content Type");
    }
    /**
     * Fetches a specific GIF and related GIFs based on the provided slug
     * @param {void} - This function doesn't take any parameters
     * @returns {Promise<void>} Asynchronously updates the state with fetched GIF and related GIFs
     */
    async function fetchGif() {
      const gifId = slug.split("-");
      const { data } = await gf.gif(gifId[gifId.length - 1]);
      const { data: related } = await gf.related(gifId[gifId.length - 1], {
        limit: 10,
      });
      setGif(data);
      setRelatedGifs(related);
    };

    fetchGif();
  }, []);

  /**
   * Shares a GIF.
   * @returns {void} This function does not return a value.
   */
  const shareGif = () => {
    // Assignment
  };

  /**
   * Renders a component for embedding a GIF
   * @returns {JSX.Element} The embedded GIF component
   */
  const EmbedGif = () => {
    // Assignment
  };

  return (
    <div className="grid grid-cols-4 my-10 gap-4">
      <div className="hidden sm:block">
        {gif?.user && (
          <>
            <div className="flex gap-1">
              <img
                src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="h-14"
              />
              <div className="px-2">
                <div className="font-bold">{gif?.user?.display_name}</div>
                <div className="faded-text">@{gif?.user?.username}</div>
              </div>
            </div>
            {gif?.user?.description && (
              <p className="py-4 whitespace-pre-line text-sm text-gray-400">
                {readMore
                  ```
                  /**
                   * Toggles the readMore state when clicked
                   * @param {void} - No parameters
                   * @returns {void} Does not return a value
                   */
                  ```
                  ? gif?.user?.description
                  : gif?.user?.description.slice(0, 100) + "..."}
                <div
                  className="flex items-center faded-text cursor-pointer"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? (
                    <>
                      Read less <HiMiniChevronUp size={20} />
                    </>
                  ) : (
                    <>
                      Read more <HiMiniChevronDown size={20} />
                    </>
                  )}
                </div>
              </p>
            )}
          </>
        )}
        <FollowOn />

        <div className="divider" />

        {gif?.source && (
          <div>
            <span
              className="faded-text" //custom - faded-text
            >
              Source
            </span>
            <div className="flex items-center text-sm font-bold gap-1">
              <HiOutlineExternalLink size={25} />
              <a href={gif.source} target="_blank" className="truncate">
                {gif.source}
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="col-span-4 sm:col-span-3">
        <div className="flex gap-6">
          <div className="w-full sm:w-3/4">
            <div className="faded-text truncate mb-2">{gif.title}</div>
            <Gif gif={gif} hover={false} />

            {/* -- Mobile UI -- */}
            <div className="flex sm:hidden gap-1">
              <img
                src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="h-14"
              /**
               * Adds the selected GIF to the user's favorites list
               * @param {Function} onClick - Event handler function to be called when the element is clicked
               * @param {string} gif.id - The unique identifier of the GIF to be added to favorites
               * @returns {void} This function doesn't return a value
               */
              />
              <div className="px-2">
                <div className="font-bold">{gif?.user?.display_name}</div>
                <div className="faded-text">@{gif?.user?.username}</div>
              </div>

              <button className="ml-auto" onClick={shareGif}>
                <FaPaperPlane size={25} />
              </button>
            </div>
            {/* -- Mobile UI -- */}
          </div>

          <div className="hidden sm:flex flex-col gap-5 mt-6">
            <button
              onClick={() => addToFavorites(gif.id)}
              className="flex gap-5 items-center font-bold text-lg"
            >
              <HiMiniHeart
                size={30}
                className={`${
                  favorites.includes(gif.id) ? "text-red-500" : ""
                }`}
              />
              Favorite
            </button>
            <button
              onClick={shareGif} // Assignment
              className="flex gap-6 items-center font-bold text-lg"
            >
              <FaPaperPlane size={25} />
              Share
            </button>
            <button
              onClick={EmbedGif} // Assignment
              className="flex gap-5 items-center font-bold text-lg"
            >
              <IoCodeSharp size={30} />
              Embed
            </button>
          </div>
        </div>
/**
 * Renders a list of related GIFs, excluding the first one
 * @param {Array} relatedGifs - An array of GIF objects
 * @returns {Array} An array of Gif components, each representing a related GIF
 */

        <div>
          <span className="font-extrabold">Related GIFs</span>
          <div className="columns-2 md:columns-3 gap-2">
            {relatedGifs.slice(1).map((gif) => (
              <Gif gif={gif} key={gif.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

