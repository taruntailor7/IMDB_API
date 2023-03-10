import React, { useEffect, useState } from 'react'
import './Coloum4.css';

export const Coloum4 = () => {
  const[topRatedMovies, setTopRatedMovies] = useState([]);
  const[upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(()=>{
    getData();
  },[])

  let url = 'https://image.tmdb.org/t/p/w300'

  const getData = () =>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=72babf9b4222ded21e3d0eec02b2fe0d')
    .then((res)=>res.json())
    .then((res)=>setTopRatedMovies(res.results))

    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=72babf9b4222ded21e3d0eec02b2fe0d')
    .then((res)=>res.json())
    .then((res)=>setUpcomingMovies(res.results))
  }
  return (
    <div className='coloum4'>
      <div className='reviews'>
      <p>Top Rated</p>
        {topRatedMovies.map((elem)=>(
          <div key={elem.id} className='review'>
            <img src={url+elem.poster_path} alt="" />
            <div>
              <p>{elem.title}</p>
              <p>Popularity : {elem.popularity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='subscription'>
        <p>Upcoming</p>
          {upcomingMovies.map((elem)=>(
            <div key={elem.id} className='subs'>
              <img src={url+elem.poster_path} alt="" />
              <div>
                <p>{elem.title}</p>
                <p>Popularity : {elem.popularity}</p>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}
