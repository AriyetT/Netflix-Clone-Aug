import React from 'react'
import "./Footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <XIcon />
        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Legal Notices</li>
              <li>do not sell or share my <br/>personal information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Netflix Shope</li>
              <li>Cookies Preferance</li>
              <li>Ad Choice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Term of use</li>
              <li>Corporate information</li>
            </ul>
          </div>
        </div>
        <div className='service_code'>
          <p>
            Service Code
          </p>
        </div>
        <div  className='copy-write'>
          &copy; 1997-2024 Netfilx, Inc.
        </div>
        </div>     
    </div>
  )
}

export default Footer
