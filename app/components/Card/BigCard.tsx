import Image from 'next/image'
import React from 'react'

const BigCard = ({ image }: { image: string }) => {
  return (
    <div className='cm-card-lg' >
      <Image className='cm-card-lg-image' src={`https://image.tmdb.org/t/p/original/${image}`} alt="card_image" width={300} height={450} />
    </div>
  )
}

export default BigCard