import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tarekahamed007/" target="_blank" rel="opener"><BsLinkedin /></a>
        <a href="https://github.com/TarekAhamed-LIV3D" target="_blank" rel="opener"><BsGithub /></a>
        <a href="https://twitter.com/TarekAhamed777" target="_blank" rel="opener"><BsTwitter /></a>
        <a href="https://www.facebook.com/tarekahamed666/" target="_blank" rel="opener"><BsFacebook /></a>
        <a href="https://www.pinterest.com/thewerewolf007/" target="_blank" rel="opener"><BsPinterest /></a>
        <a href="https://www.instagram.com/ahamed_the_morningstar/" target="_blank" rel="opener"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials