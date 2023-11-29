import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

const data= [
  {
    id: 1,
    image: img1,
    title: 'Wound Segmentation (Research)',
    github: 'https://github.com/TarekAhamed-LIV3D/WoundSegmentation',
    demo: '#',
    lang: "Python, TensorFlow"
  },
  {
    id: 4,
    image: img4,
    title: 'Tech Shop (E-Com Site)',
    github: 'https://github.com/TarekAhamed-LIV3D/sundarbantechshop',
    demo: '#',
    lang: "HTML, CSS, Bootstrap, Ajax"
  },
  {
    id: 3,
    image: img3,
    title: 'Bluster Mini (Game)',
    github: 'https://github.com/TarekAhamed-LIV3D/Bluster-Mini-Game',
    demo: '#',
    lang: "C#"
  },
  {
    id: 2,
    image: img2,
    title: 'Dicee (Game)',
    github: 'https://github.com/TarekAhamed-LIV3D/dicee',
    demo: '#',
    lang: "Flutter"
  },
  {
    id: 5,
    image: img5,
    title: 'Credit Card Management',
    github: 'https://github.com/TarekAhamed-LIV3D/credit-card-management',
    demo: '#',
    lang: "Java"
  },
  {
    id: 6,
    image: img6,
    title: 'Personal Website',
    github: 'https://github.com/TarekAhamed-LIV3D/PersonalSite',
    demo: 'https://www.tarekahamedofficial.com/',
    lang: "HTML, CSS, React, Swiper JS"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, lang}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} srcset="" />
                </div>
                <h3>{title}</h3>
                <small>{lang}</small>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio