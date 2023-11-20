import { API_KEY, baseImgUrl } from '@/constants/system'
import Image from 'next/image'
import React from 'react'
import Score from '../Score/Score';
import ClockSvg from '../../assets/icons/clock.svg'
import TagSvg from '../../assets/icons/tag.svg'
import moment from 'moment'

const Hero = () => {
  const [movie, setMovie] = React.useState<any>();
  const [cast, setCast] = React.useState<any>();
  const [crew, setCrew] = React.useState<any>();

  React.useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
      }
    }).then((res) => res.json()).then((data: any) => {
      fetch(`https://api.themoviedb.org/3/movie/${data?.results[0]?.id}/credits`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_KEY
        }
      }).then((_res: any) => _res.json()).then((_data: any) => {
        const _crew = _data.crew.sort((a: any, b: any) => b.popularity - a.popularity).slice(0, 2)

        setCast(_data.cast.slice(0, 2))
        setCrew(_data.crew.slice(0,2))
      })

      fetch(`https://api.themoviedb.org/3/movie/${data?.results[0]?.id}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_KEY
        }
      }).then((_res: any) => _res.json()).then((_data: any) => setMovie(_data))
    })
  }, [])

  return (
    movie ?
      <div className='cm-hero' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})` }} >
        <div className='cm-hero-overview flex fadeInUp animated animatedFadeInUp'>
          <div className='cm-overview-section-movie' > 
            <Score score={movie?.vote_average} />
            <span className='cm-hero-movie-title' >{movie?.title}</span>
            <div className='cm-overview-detail-container'>
              <div className='cm-overview-detail' >
                <Image src={ClockSvg} alt="clock" />
                <span>{moment(movie?.release_date).format('DD MMMM YYYY')}</span>
              </div>
              <div className='cm-overview-detail' >
                <Image src={TagSvg} alt="Tag" />
                <span>{movie?.genres.map((genre: any, index: number) => <span key={genre.id}>{genre.name}{movie?.genres.length - 1 !== index ? "," : ""}</span>)}</span>
              </div>
            </div>
            <div className='cm-overview-container'  >
              <span className='cm-overview-title' >Overview</span>
              <p className='cm-overview' >{movie?.overview}</p>
            </div>
            <div className='cm-overview-crew-container' >
              {
                crew?.map((_crew: any, index: number) => (
                  <div className='cm-overview-crew' key={index}>
                    <span className='cm-overview-crew-name' >{_crew.name}</span>
                    <span className='cm-overview-crew-job' >{_crew.job}</span>
                  </div>
                ))
              }
            </div>
            <div className='cm-overview-detail-btn' >
              <button>Read More</button>
            </div>
          </div>
          <div className='cm-overview-section-cast'>
            <div className='cm-overview-cast-container' >
              {
                cast?.map((_cast: any, index: number) => (
                  <div className='cm-overview-cast' key={index} >
                    <div className='cm-overview-cast-image' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w92${_cast?.profile_path})` }} />
                    <div className='cm-overview-cast-detail'>
                      <span className='cm-overview-cast-name' >{_cast.original_name}</span>
                      <span className='cm-overview-cast-character'>{_cast.character}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      : <></>
  )
}

export default Hero