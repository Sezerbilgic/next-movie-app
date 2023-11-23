'use-client'
import Image from 'next/image'
import React from 'react'
import Score from '../Score/Score'

type SmallCardProps = {
  image: string,
  date: string,
  score: number,
  title: string
  handleClick?: () => void
}

const SmallCard = ({image, date, score, title, handleClick}: SmallCardProps) => {
  return (
    <div onClick={handleClick}  className='cm-card-sm' >
      <div className='cm-card-sm-image-container' >
        <Image className='cm-card-sm-image' src={`https://image.tmdb.org/t/p/original/${image}`} alt="card_image" width={160} height={240} />
        <div className='cm-card-sm-score' >
          <Score score={score} />
        </div>
      </div>
      <div className='cm-card-sm-info-container fadeInUp animated animatedFadeInUp' >
        <div className='cm-card-sm-title'>{title}</div>
        <div className='cm-card-sm-date'>{date}</div>
      </div>
    </div>
  )
}

export default SmallCard