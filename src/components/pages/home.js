import React from 'react'
import Slideshow from '../Slider/Slideshow'
import {JumbotronContainer} from '../containers/jumbotron'
import Footer from './Footer/Footer'
import '../../App.css'
const Home = () => {
    return (
        <div className="home">
        <Slideshow />
        <JumbotronContainer />
        <Footer />
        </div>
    )
}

export default Home
