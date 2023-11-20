import { API_KEY } from '@/constants/system';
import React from 'react'

type SlideProps = {
  url: string;
  title: string;
}

const Slider = ({url, title}: SlideProps) => {
  const [sliderData, setSliderData] = React.useState<any>()
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
    <div>

    </div>
  )
}

export default Slider