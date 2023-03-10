import React, { useEffect, useState } from 'react'
import './Coloum3.css';

export const Coloum3 = () => {
  const[latestMovies, setLatestMovies] = useState([]);

  useEffect(()=>{
    getData();
  },[])

  let url = 'https://image.tmdb.org/t/p/w300';

  const getData = () =>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=72babf9b4222ded21e3d0eec02b2fe0d')
    .then((res)=>res.json())
    .then((res)=>setLatestMovies(res.results))
  }
  return (
    <div className='coloum3'>
      <div className='letestMovies'>
        {latestMovies.map((elem)=>(
          <div className='latestMovie' key={elem.id}>
            <img src={url+elem.poster_path} alt="" />
            <div>
              <p>{elem.title}</p>
              <p>{elem.release_date}</p>
              <p>{elem.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='trendingMovies'>
        <p>Trending</p>
        {latestMovies.map((elem)=>(
            <div className='trendingMovie' key={elem.id}>
              <img src={url+elem.poster_path} alt="" />
              <p>{elem.title}</p>
            </div>
        ))}
      </div>
    </div>
  )
}
