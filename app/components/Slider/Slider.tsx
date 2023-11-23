'use-client'
import { API_KEY } from '@/constants/system';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useRouter } from 'next/navigation';
import React from 'react'
import SmallCard from '../Card/SmallCard';

type SlideProps = {
  url: string;
  title: string;
}

const Slider = ({ url, title }: SlideProps) => {
  const [sliderData, setSliderData] = React.useState<any>()
  const router = useRouter()
  React.useEffect(() => {
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
      }
    }).then((res) => res.json()).then((data: any) => setSliderData(data))
  }, [url])

  return (
    sliderData ?
      <div className='cm-slider' >
        <div className='cm-slider-title' >{title}</div>
        <div className='cm-slider-cards' >
          <ScrollingCarousel className='cm-slider-carousel'>
            {
              sliderData?.results?.map((data: any, index: number) => (
                <SmallCard key={index} {...{
                  id: data.id,
                  title: data.original_title,
                  score: data.vote_average,
                  image: data.poster_path,
                  date: data.release_date,
                  handleClick: () => router.push(`/films/${data.id}`)
                }} />
              ))
            }
          </ScrollingCarousel>
        </div>
      </div>
      : <></>
  )
}

export default Slider