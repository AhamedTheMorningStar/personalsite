import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import TextLoop from "react-text-loop";

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tarek Ahamed</h1>
        <TextLoop>
          <span>Programmer</span>
          <span>Software Developer</span>
          <span>MultiCloud DevOps Engineer</span>
          <span>Site Reliability Engineer</span>
          <span>Photographer</span>
        </TextLoop>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Tarek Ahamed" srcset="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header