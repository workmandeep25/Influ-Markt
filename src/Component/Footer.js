import React from 'react'
import './Footer.css';

import FooterLogo1 from './images/insta-logo.jpg'
import FooterLogo2 from './images/fb-logo.jpg'
import FooterLogo3 from './images/twitter-logo.jpg'

export const Footer = () => {
  return (
    <div className='Footer-Work'>
        <div className='Footer1'>
            <div className='Get-in-touch'>Get In Touch</div>
            <br></br>
            <div className='Footer1-Para'>Schedule A Free Consultation To Understand How The Wingsup Media Can Help You</div>
            <br></br>
            <br></br>
            <button className='Footer1-Button'>Chat with Us</button>
        </div>

        <div className='Footer2'>
            <div className='Footer2-part1'>
                <div className='Footer2-part1-Lists'>
                    <div className='Footer2-Lists-heading'>Home</div>
                    <div className='Footer2-Lists-texts'>I'm A Creator</div>
                    <div className='Footer2-Lists-texts'>Top Influencer</div>
                    <div className='Footer2-Lists-texts'>Contact Us</div>
                </div>

                <div className='Footer2-part1-Lists'>
                    <div className='Footer2-Lists-heading'>I'm A Creator</div>
                    <div className='Footer2-Lists-texts'>Top Brands</div>
                    <div className='Footer2-Lists-texts'>Why Gcc</div>
                    <div className='Footer2-Lists-texts'>App Features</div>
                    <div className='Footer2-Lists-texts'>The Process</div>
                    <div className='Footer2-Lists-texts'>Top Creators</div>
                </div>

                <div className='Footer2-part1-Lists'>
                    <div className='Footer2-Lists-heading'>Info</div>
                    <div className='Footer2-Lists-texts'>Terms & Conditions</div>
                    <div className='Footer2-Lists-texts'>Privacy Policy</div>
                    <div className='Footer2-Lists-texts'>About Us</div>
                </div>

                <div className='Footer2-part1-Lists'>
                    <div className='Footer2-Lists-heading'>Contact Us</div>
                    <div className='Footer2-Lists-texts'>306, Masjid Moth Rd, South Extension,</div>
                    <div className='Footer2-Lists-texts'>Block A, New Delhi, Delhi 110049</div>
                    <div className='Footer2-Lists-texts'>Info@Wingsup.Media</div>
                    <div className='Footer2-Lists-texts'>9876543210</div>
                </div>
            </div>

            <hr></hr>

            <div className='Footer2-part2'>
                <div className='wingsup-text'>The Wingsup Media. © 2024</div>
                <div className='social-media-signs'>
                    <img id='Footer-insta-logo' src={FooterLogo1} alt='Footer-insta-logo'></img>
                    <img id='Footer-fb-logo' src={FooterLogo2} alt='Footer-fb-logo'></img>
                    <img id='Footer-twitter-logo' src={FooterLogo3} alt='Footer-twitter-logo'></img>
                </div>
            </div>
        </div>
    </div>
  )
}
