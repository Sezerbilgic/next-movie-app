'use client'
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";

export default function Home() {
  return (
    <main>
      <Hero />
      <Slider url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" title="Trending" />
    </main>
  )
}
