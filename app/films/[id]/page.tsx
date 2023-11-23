'use client'

import DetailHero from "@/app/components/DetailHero/DetailHero";
import { API_KEY } from "@/constants/system";
import { Movie } from "@/types/movie";
import React from "react";

export default function FilmsDetailPage({ params }: { params: { id: string } }) {
  const [movie, setMovie] = React.useState<Movie>({} as Movie);
  const [cast, setCast] = React.useState<any>();
  const [crew, setCrew] = React.useState<any>();

  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
      }
    }).then((_res: any) => _res.json()).then((_data: any) => {
      const _crew = _data.crew.sort((a: any, b: any) => b.popularity - a.popularity).slice(0, 2)

      setCast(_data.cast.slice(0, 2))
      setCrew(_data.crew.slice(0, 2))
    })

    fetch(`https://api.themoviedb.org/3/movie/${params.id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
      }
    }).then((_res: any) => _res.json()).then((_data: any) => setMovie(_data))

  }, [params]);

  console.log(movie, cast, crew)
  return (
    <main>
      <DetailHero {...{...movie}} />
    </main>
  )
}
