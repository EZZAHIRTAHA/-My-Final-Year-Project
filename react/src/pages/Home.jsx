import React from 'react'
import { About, Banner, ProductsPreview} from '../components'
import ParticlesBackground from '../components/ParticlesBackground'

const Home = () => {
  return (
    <>
      <ParticlesBackground/>
      <Banner/>
      <ProductsPreview/> 
      <About/>
    </>
  )
}

export default Home
