import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="Tarek Ahamed" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 3+ Years</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small> 9+ Clients Worldwide </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>14+ Projects</small>
            </article>
          </div>

          <p>A self-motivated and enthusiastic <b>Software Developer</b> with a deep interest in software crafting & <b>Cloud Infrastructure. </b>
            Extensive 3 years of hands-on experience in programming languages such as <b>Java</b> and <b>Python</b> with a proven track record of developing software and optimizing automation scripts  
            Also experience in supporting and automating critical deployments over extensive infrastructure. 
            Proficient in <b>Kubernetes</b>, <b>Jenkins</b>, <b>AWS CodePipeline</b> and <b>Monitoring Tools. </b>
            Skilled in using various <b>DevOps Tools</b> and <b>Cloud Technologies</b> to promote teamwork, speed up project timelines and ensure stable, scalable systems. 
            Passionate about new technology and constantly working towards improve.
            Beyond the tech realm, <b>Photography</b> is more than just a hobby to me; it's a creative pursuit that adds depth and richness to my life.
          </p>
        </div>
      </div> 
    </section>
  )
}

export default About