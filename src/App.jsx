import React from 'react'
import logo from '../src/assets/logo.png'
import {Helmet} from "react-helmet";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Tarek Ahamed-L1V3D</title>
                <link rel="icon" type="image/x-icon" href={logo}></link>
                <link rel="canonical" href="https://www.tarekahamedofficial.com/"/>
      </Helmet>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App