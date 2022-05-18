import React from 'react'
import {FcAbout} from "react-icons/fc"
import ContentContainer from '../components/contentContainer'
export default function AboutUs() {
  return (
    <ContentContainer>
      <FcAbout
        color={"#fff"}
        size={100}
      />
      <p style={{color: "#fff"}}></p>
    </ContentContainer>
  )
}
