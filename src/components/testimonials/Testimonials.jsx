import React from 'react'
import './testmonials.css'
import {Autoplay, EffectCoverflow, Pagination} from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
import '/node_modules/swiper/swiper-bundle.min.css'

import '/node_modules/swiper/modules/pagination/pagination.min.css'

import p1 from '../../assets/photo/img1.jpg'
import p2 from '../../assets/photo/img2.jpg'
import p3 from '../../assets/photo/img3.JPG'
import p4 from '../../assets/photo/img4.JPG'
import p5 from '../../assets/photo/img5.JPG'
import p6 from '../../assets/photo/img6.JPG'
import p7 from '../../assets/photo/img7.JPG'
import p8 from '../../assets/photo/img8.jpg'
import p9 from '../../assets/photo/img9.jpg'
import p10 from '../../assets/photo/img10.JPG'
import p11 from '../../assets/photo/img11.JPG'
import p12 from '../../assets/photo/img12.JPG'
import p13 from '../../assets/photo/img13.JPG'
import p14 from '../../assets/photo/img14.JPG'
import p15 from '../../assets/photo/img15.JPG'
import p16 from '../../assets/photo/img16.JPG'
import p18 from '../../assets/photo/img18.JPG'
import p19 from '../../assets/photo/img19.JPG'
import p20 from '../../assets/photo/img20.JPG'
import p21 from '../../assets/photo/img21.JPG'
import p22 from '../../assets/photo/img22.jpg'
import p23 from '../../assets/photo/img23.JPG'
import p24 from '../../assets/photo/img24.JPG'
import p25 from '../../assets/photo/img25.JPG'
import p26 from '../../assets/photo/img26.JPG'
import p27 from '../../assets/photo/img27.JPG'
import p28 from '../../assets/photo/img28.JPG'
import p29 from '../../assets/photo/img29.JPG'
import p30 from '../../assets/photo/img30.jpg'
import p31 from '../../assets/photo/img31.JPG'

const data = [
  {avatar:p1},{avatar:p2},{avatar:p3},{avatar:p4},{avatar:p5},{avatar:p6},{avatar:p7},{avatar:p8},{avatar:p9},{avatar:p10},
  {avatar:p11},{avatar:p12},{avatar:p13},{avatar:p14},{avatar:p15},{avatar:p16},{avatar:p18},{avatar:p19},{avatar:p20},
  {avatar:p21},{avatar:p22},{avatar:p23},{avatar:p24},{avatar:p25},{avatar:p26},{avatar:p27},{avatar:p28},{avatar:p29},{avatar:p30},
  {avatar:p31}
]

const Testimonials = () => {
  return (
    <section id='photography'>
      <h5>My Recent Shots</h5>
      <h5>“Photography helps people to see.”</h5>
      <h2>Photography</h2>

      <Swiper className='container photo__container'
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
          data.map(({avatar}, index) => {
            return(
                <SwiperSlide key={index} className='photos-all'>
                  <div className='photo'>
                    <img src={avatar} alt="" />
                  </div>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials