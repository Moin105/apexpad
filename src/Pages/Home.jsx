import React from 'react'
import Header from '../Components/Header/Header';
import { Hero } from '../Components/Banner/Banner';
import { StreamlinedExperience } from '../Components/Services/Services';
import { MoreFeatures } from '../Components/MoreFeatures/MoreFeatures';
import Footer from '../Components/Footer/Footer';
function Home() {
  return (
    <div className="App">
    <Header />
    <Hero/>
    <div className='servicesde'>
       <h1>Apexpad Services</h1>
    </div>
    <StreamlinedExperience/>
    <MoreFeatures/>
    <Footer/>
   </div>
  )
}

export default Home