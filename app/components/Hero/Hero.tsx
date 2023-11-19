import { API_KEY, baseImgUrl } from '@/constants/system'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  const [movie, setMovie] = React.useState<any>();
  /*   const response: any = await fetch("https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
      }
    })
    const popularFilms = await response.json()
    const film =  popularFilms?.results?.[0]; */

  React.useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
      }
    }).then((res) => res.json()).then((data: any) => {
      console.log(data)
      fetch(`https://api.themoviedb.org/3/movie/${data.results[1].id}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_KEY
        }
      }).then((_res: any) => _res.json()).then((_data: any) => setMovie(_data))
    })
  }, [])

  console.log(movie, process.env)
  return (
    movie ?
      <div className='cm-hero' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})` }} >
        <div className='flex'>
          <h3>${movie?.title}</h3>
        </div>
      </div>
      : <></>
  )
} 

export default Hero