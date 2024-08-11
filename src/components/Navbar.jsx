import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import logo from '../assets/Group 1.svg'


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-18" src={logo} alt="Logo" />
      </div>
      <div className='flex m-8 items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/sanjeev-mysore-041600222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/SanjeevMysore" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/sanjeev_mysore?igsh=Y3kzdWlpOWQ5M3o1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default Navbar