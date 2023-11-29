import React from 'react'
import './services.css'
import {Autoplay, EffectCoverflow, Pagination} from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
import '/node_modules/swiper/swiper.min.css'
import '/node_modules/swiper/modules/pagination/pagination.min.css'
import S1 from '../../assets/cc/AIForEveryone.png'
import S2 from '../../assets/cc/Angular.png'
import S3 from '../../assets/cc/GoogleCloudCertification.png'
import S4 from '../../assets/cc/GoogleITAutomationwithPython.png'
import S5 from '../../assets/cc/GoogleITSupport.png'
import S6 from '../../assets/cc/IntroductiontoCybersecurity.png'
import S7 from '../../assets/cc/ITEssentialsPCHardwareandSoftware.png'
import S8 from '../../assets/cc/ITFundamentalsforCybersecurity.png'
import S9 from '../../assets/cc/NDGLinuxUnhatched.png'
import S10 from '../../assets/cc/PythonforEverybody.png'
import S11 from '../../assets/cc/SearchEngineOptimization.png'

const data = [
  {avatar:S1,name:'AI For Everyone'},
  {avatar:S2,name:'Full Stack Web Development with Angular'},
  {avatar:S3,name:'Google Cloud Certification'},
  {avatar:S4,name:'Google IT Automation with Python'},
  {avatar:S5,name:'Google IT Support'},
  {avatar:S6,name:'Introduction to Cybersecurity'},
  {avatar:S7,name:'IT Essentials PC Hardware and Software'},
  {avatar:S8,name:'IT Fundamentals for Cybersecurity'},
  {avatar:S9,name:'NDG Linux Unhatched'},
  {avatar:S10,name:'Python for Everybody'},
  {avatar:S11,name:'Search Engine Optimization'}
]

const Services = () => {
    return (
      <section id='services'>
        <h5>My</h5>
        <h2>Certifications</h2>
        <Swiper className='container cc__container'
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={40}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      >
        {
          data.map(({avatar, name}, index) => {
            return(
                <SwiperSlide key={index} className='cc-all'>
                  <div className='cc'>
                    <img src={avatar} alt="" />
                    <h5>{name}</h5>
                  </div>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
      </section>
    )
  }
  
  export default Services