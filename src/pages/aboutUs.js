import React from 'react'
import {FcAbout} from "react-icons/fc"
import { SiEventstore } from "react-icons/si"
import ContentContainer from '../components/contentContainer'
export default function AboutUs() {
  return (
    <ContentContainer>
      <FcAbout
        color={"#fff"}
        size={100}
        />
          <p style={{color: "#fff"}}>
            Blue falg Solutions is a Security applications of AI start up, created on 2022 to respond to the market needs;
          </p>
     
    </ContentContainer>
  )


}