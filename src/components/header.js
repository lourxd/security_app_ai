import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../index.css"

export default function Header() {

    const navigate = useNavigate()

  return (

        <header className='header_container'>
            <div className='logo_container'>
                <img src='./logo.png' onClick={()=>navigate("/")} style={{height: 75, width: 75, cursor: "pointer"}} alt='logo'/>
            </div>
            <ul className='list_header'>
                <li className='single_list_element'><Link className='link_header' to="/">Home</Link></li> 
                <li className='single_list_element'><Link className='link_header' to="/">Home</Link></li> 
                <li className='single_list_element'><Link className='link_header' to="/">Home</Link></li> 
                <li className='single_list_element'><Link className='link_header' to="/about-us">About Us</Link></li> 
            </ul>
        </header>

  )
}
