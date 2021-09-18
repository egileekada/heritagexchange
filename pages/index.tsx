// import type { NextPage } from 'next'
import Head from 'next/head' 
import AboutPage from '../Components/SalesPage/AboutPage'
import AppFeature from '../Components/SalesPage/AppFeatures'
import AppStore from '../Components/SalesPage/AppStore'
import Footer from '../Components/SalesPage/Footer'
import Navbar from '../Components/SalesPage/Navbar'   
import SecondFeature from '../Components/SalesPage/SecondFeatures'
import ThirdFeatures from '../Components/SalesPage/ThirdFeatures'

export default function index() {
  return (
    <div className='w-full h-full overflow-x-hidden ' >
      <Head>
        <title>HX-Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <div className='w-full h-auto flex flex-col bg-heritagecolor' >  
        <div className='w-full h-auto fixed z-50' >
          <Navbar/>
        </div>
        <AppFeature />
      </div>
      <div className='w-full h-full' >
        <SecondFeature />
      </div>
      <div className='w-full h-full'>
        <ThirdFeatures />
      </div>
      <div className='w-full h-full'>
        <AboutPage />
      </div>
      <div className='w-full h-full'>
        <AppStore />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    )
}
