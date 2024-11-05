import React, { useEffect, useState } from "react";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Gifstate } from "../context/context";
import category from "../Pages/Category";
import GifSearch from "./GifSearch";

/**
 * Header component for the GIPHY application
 * @returns {JSX.Element} A navigation bar containing the GIPHY logo, category links, favorites button, and search functionality
 */
function Header() {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const { gf, filter, setFilter, favourites } = Gifstate();

  /**
   * Fetches GIF categories asynchronously and updates the state with the retrieved data.
   * @returns {Promise<void>} A promise that resolves when the categories are fetched and state is updated.
   */
  const fetchGifCategories = async () => {
    /**
     * Fetches GIF categories when the component mounts
     * @returns {void} This effect does not return anything
     */
    const { data } = await gf.categories();
    setCategories(data);
  };

  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" alt="Giphy-Logo" className="w-8" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        {/* reder categories */}
        {categories?.slice(0, 5)?.map((category) => {
          return (
            <Link
              key={category.name}
              to={`/${category.name_encoded}`}
              className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
            >
              {category.name}
            </Link>
          );
        })}
        <div className="font-bold text-md flex gap-2 items-center">
          /**
           * Toggles the visibility of categories
           * @param {React.MouseEvent<HTMLButtonElement>} event - The click event
           * @returns {void} Nothing
           */
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${
                showCategories ? "gradient" : ""
              } border-b-4 hidden lg:block`}
            />
          </button>

          {favourites > 0 &&(<div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to="/favourites">Favourites Gifs</Link>
          </div>)}

          <button>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="tet-3xl font-extrabold">Catogeries</span>
            <hr className="bg-gray-100 opacity-50 my-5"/>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              /**
               * Renders a list of category links
               * @param {Array} categories - An array of category objects
               * @returns {Array} An array of Link components for each category
               */
              {categories?.map((category)=>{

                return (
                  <Link className="font-bold" key={category.name} to={`/${category.name_encoded}`}> {category.name}</Link>

                )
              })}
            </div>
          </div>
        )}
      </div>

      <GifSearch />
      {/* {search} */}
     
    </nav>
  );
}

export default Header;
