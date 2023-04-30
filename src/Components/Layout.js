import React from 'react'
import {NavLink} from 'react-router-dom';

const Layout = () => {
  return (
    <nav>
        <ul className='navigationList'>
            <li>
                <NavLink to = '/' className='navigationItem'>Home</NavLink>
            </li>
            <li>
                <NavLink to = '/education' className='navigationItem' >Education</NavLink>
            </li>
            <li>
                <NavLink to = '/professionalSummary' className='navigationItem' >Professional Summary</NavLink>
            </li>
            <li>
                <NavLink to = '/workExperience' className='navigationItem' >Work Experience</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Layout