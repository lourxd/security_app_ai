import React from 'react'
import {ImBinoculars} from "react-icons/im"
import ContentContainer from '../components/contentContainer'


export default function OurVision() {
  return (
    <ContentContainer>
      <ImBinoculars
        color={"#fff"}
        size={100}
      />
      <p style={{color: "#fff"}}></p>
    </ContentContainer>
  )
}
