import React from "react";
import { Gifstate } from "../context/context";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

const filters = [
  {
    title: "GIFS",
    value: "gifs",
    background:
      "bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500",
  },
  {
    title: "Stickers",
    value: "stickers",
    background: "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500",
  },
  {
    title: "Text",
    value: "text",
    background: "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500",
  },
];

/**
 * Renders a filter component for GIFs with optional trending display
 * @param {Object} options - Configuration options for the filter
 * @param {boolean} [options.alignLeft=false] - Whether to align the filter to the left
 * @param {boolean} [options.showTrending=false] - Whether to show the trending section
 * @returns {JSX.Element} A div containing filter options and optional trending display
 */
function filterGifs({ alignLeft = false, showTrending = false }) {
  const { filter, setFilter } = Gifstate();
  return (
    <div
      className={`flex my-3 gap-3 ${alignLeft ? "" : "justify-end"}
    ${
      showTrending ? "justify-between flex-col sm:flex-row sm:items-center" : ""
    }`}
    >
      {showTrending && (
        <span className="flex gap-2">
          {showTrending && (
            <HiMiniArrowTrendingUp size={25} className="text-teal-400" />
          )}
          <span className="font-semibold text-gray-400">Trending</span>
        </span>
      )}

      <div className="flex min-w-80 rounded-full bg-gray-800">
        /**
         * Renders a list of filter options as clickable spans
         * @param {Array} filters - An array of filter objects containing title, value, and background properties
         * @param {string} filter - The currently selected filter value
         * @param {function} setFilter - A function to update the selected filter
         * @returns {Array} An array of JSX span elements representing filter options
         */
        {filters.map((f) => {
          return (
            <span
              /**
               * Sets the filter value when clicked
               * @param {Function} onClick - Event handler function
               * @param {Function} setFilter - Function to update the filter state
               * @param {*} f.value - The value to set as the new filter
               * @returns {void}
               */
              onClick={() => setFilter(f.value)}
              className={`${
                filter === f.value ? f.background : ""
              } font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer`}
              key={f.title}
            >
              {f.title}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default filterGifs;
