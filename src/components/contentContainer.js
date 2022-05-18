import React from 'react'
import "../index.css"

export default function ContentContainer({children, style, className}) {

  return (
    <div style={style} className={className ? className : 'contentContainer'}>
        {children}
    </div>
  )
}
