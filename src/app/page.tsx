import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import Subscribe from './components/Subscribe'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Subscribe />
    </>
  )
}
