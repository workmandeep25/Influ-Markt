import React from 'react'
import "./Section1.css";

import Slide1 from './images/Slide1.jpg';
import Slide2 from './images/Slide2.jpg';
import Slide3 from './images/Slide3.jpg';


export const Section1 = () => {
  return (
    <div className='Sec1-Body'>
        <div className='Sec1-Menu'>
            <h1 id='Sec1-h1' className='Sec1-Menu-item'>Friction-Less Influencer Marketing</h1>
            <p id='Sec1-p' className='Sect1-Menu-item'>3M Users</p>
            <span id='Sec1-span' className='Sect1-Menu-item'>The Biggest Programme For Influencers! Discover Thousands Of Influencers Across Niches And Classes</span>
            <button id='Sec1-button'>Get A Free Consultation</button>
        </div>
        <div className='Sec1-Images'>
            <img className='Sec1-Images-slides' src={Slide1} alt='Slide1'></img>
            <img className='Sec1-Images-slides' src={Slide2} alt='Slide2'></img>
            <img className='Sec1-Images-slides' src={Slide3} alt='Slide3'></img>
        </div>
    </div>
  )
}
