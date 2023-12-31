import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#top" className='footer__logo'>L1V3D</a>

      <ul className='permalinks'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Certifications</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#photography">Photography</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/tarekahamed007/" rel="reopener"><BsLinkedin /></a>
        <a href="https://github.com/TarekAhamed-LIV3D" rel="opener"><BsGithub /></a>
        <a href="https://twitter.com/TarekAhamed777" rel="opener"><BsTwitter /></a>
        <a href="https://www.facebook.com/tarekahamed666/" rel="opener"><BsFacebook /></a>
        <a href="https://www.pinterest.com/thewerewolf007/" rel="opener"><BsPinterest /></a>
        <a href="https://www.instagram.com/ahamed_the_morningstar/" rel="opener"><BsInstagram /></a>
      </div>

      <div className='footer__copyright'>
        <h2>Thanks For Reaching</h2>
        <small>&copy; TCloudX, All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer