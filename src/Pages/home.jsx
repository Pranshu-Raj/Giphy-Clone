import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Gifstate } from '../context/context'
import { Gif } from '../components/Gif';
import FilterGifs from '../components/filterGifs';


/**
 * Renders the Home component, displaying trending GIFs
 * @returns {JSX.Element} The rendered Home component
 */
function Home() {
  const { gf, gifs, setGifs, filter } = Gifstate();
  /**
   * Fetches trending GIFs from an external API
   * @param {void} - This function doesn't take any parameters
   * @returns {Promise<void>} A promise that resolves when the GIFs are fetched and set
   */  const fetchTrendingGIFs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      /**
       * Fetches trending GIFs based on the current filter
       * @param {void} - This useEffect hook doesn't take any parameters
       * @returns {void} This hook doesn't return anything, it triggers the fetchTrendingGIFs function as a side effect
       */
      rating: "g"
    });
    setGifs(data);
  }
  useEffect(() => {
    fetchTrendingGIFs();
  },[filter])
  return (
    <div>
      <img src='/banner.gif' alt="earth banner" className='mt-2 rounded w-full' />
      

      <FilterGifs showTrending/>
      
      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        /**
         * Renders a list of Gif components based on the provided gifs array
         * @param {Array} gifs - An array of gif objects to be rendered
         * @returns {Array} An array of Gif components, each representing a gif from the input array
         */
        {gifs.map((gif) => {
           return <Gif gif={gif} key={gif?.title} />
        })}
      </div>
    </div>
  )
}

export default Home