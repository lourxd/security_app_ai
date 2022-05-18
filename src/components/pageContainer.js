import React from 'react'
import "../index.css"

export default function PageContainer({children}) {
  return (
    <div className='pageContainer'>
        {children}
    </div>
  )
}
