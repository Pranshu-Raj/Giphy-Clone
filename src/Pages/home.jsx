import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Gifstate } from '../context/context'
import { Gif } from '../components/Gif';
import FilterGifs from '../components/filterGifs';


function Home() {
  const { gf, gifs, setGifs, filter } = Gifstate();
  const fetchTrendingGIFs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
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
        {gifs.map((gif) => {
           return <Gif gif={gif} key={gif?.title} />
        })}
      </div>
    </div>
  )
}

export default Home