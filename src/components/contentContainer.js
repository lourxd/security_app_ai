import React from 'react'
import "../index.css"

export default function ContentContainer({children, style}) {

  return (
    <div style={style} className='contentContainer'>
        {children}
    </div>
  )
}
