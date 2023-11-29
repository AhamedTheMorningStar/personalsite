import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_fm1omls', 'template_ur6ltas', form.current, 'fQF7SAK78fLE2JCBg')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mdahamed2470@gmail.com</h5>
            <a href="mailto:mdahamed2470@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Tarek Ahamed</h5>
            <a href="https://m.me/tarekahamed666" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+1(669)696-7299</h5>
            <a href="https://api.whatsapp.com/send?phone=+16696967299" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* End of contact option*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Your full Name' required/>
          <input type="email" name="email" id="" placeholder='Your E-mail' required/>
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact