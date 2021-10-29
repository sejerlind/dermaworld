import React from 'react'
import Banner from '../Components/Banner'
import InfoBox from '../Components/InfoBox'
import About from '../Components/About'
import Hero from '../Components/Hero'
import ClinicalTools from '../Components/ClinicalTools'
import KOLVideos from '../Components/KOLVideos'
import Details from '../Components/Details'

function Home() {
    return (
        <main>
            <Banner />
            <InfoBox />
            <About />
            <Hero />
            <ClinicalTools />
            <KOLVideos />
            <Details />
        </main>
    )
}

export default Home
