import React from 'react'
import LinkCustom from "./linkCustom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFigma, faInstagram } from '@fortawesome/free-brands-svg-icons';


   export const Footer = () => {
  return (
    <>
    <div className='w-full h-60 bg-gray-800 flex justify-evenly items-center'>
          <div>
            <LinkCustom ruta={"/"} 
            resource={"/public/bannerlogow.png"} 
            logoClass= "w-70"/>

            
          </div>
          <div className='flex gap-8 text-3xl text-white'>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faFigma} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>


    </div>

    
    </>
  )
}

export default Footer;