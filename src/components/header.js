import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import "../index.css"
import { HiMenuAlt3 } from "react-icons/hi"

export default function Header() {
    const navigate = useNavigate()
    const [isHeaderOpen, toggleHeader] = useState(false)
    const headerMobileAnimation = useTransition(isHeaderOpen,{
        config:{ friction: 10, tension: 100, clamp: true},
        from:{opacity: 0, x: 100, display: "none"},
        enter:{opacity: 1, x: 0, display: "flex"},
        leave:{opacity: 0, x: 100},
    })
    return (
        <header className='header_container'>
            <div className='logo_container'>
                <img src='./logo.png' onClick={()=>navigate("/")} style={{height: 75, width: 75, cursor: "pointer"}} alt='logo'/>
            </div>
            <ul className='list_header'>
                <li className='single_list_element'><Link className='link_header' to="/">AI Security</Link></li> 
                <li className='single_list_element'><Link className='link_header' to="/">Our vision</Link></li> 
                <li className='single_list_element'><Link className='link_header' to="/">AI App</Link></li> 
                <li className='single_list_element'><Link className='link_header' to="/about-us">About Us</Link></li> 
            </ul>

            {headerMobileAnimation((style, item)=>
                item && <animated.ul style={style} className='list_header_mobile'>
                            <li className='single_list_element'><Link className='link_header' to="/">AI Security</Link></li> 
                            <li className='single_list_element'><Link className='link_header' to="/">Our vision</Link></li> 
                            <li className='single_list_element'><Link className='link_header' to="/">AI App</Link></li> 
                            <li className='single_list_element'><Link className='link_header' to="/about-us">About Us</Link></li> 
                            <li className='single_list_element'><span className='link_header' onClick={()=>toggleHeader(false)}>Back</span></li> 
                        </animated.ul>
            )}

            <div className='hamburguer' onClick={()=>toggleHeader(true)}>
                <HiMenuAlt3
                    color={"#fff"}
                    size={50}
                />
            </div>
        </header>
  )
}
