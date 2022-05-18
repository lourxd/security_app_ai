import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import ContentContainer from '../components/contentContainer'
import PageContainer from '../components/pageContainer'
import "../index.css"
import { SiSpeedtest, SiEventstore } from "react-icons/si"
import { IoIosEye } from "react-icons/io"
import { GiSmart } from "react-icons/gi"
import { AiOutlineDotChart, AiOutlineRadiusBottomleft } from "react-icons/ai"


export default function Home() {
  const iconSize= 150

  return (
    <PageContainer>
        <ContentContainer>
          <Parallax pages={2} style={{position: "absolute", top: 0, left: 0, zIndex: -1}}>

            {/* Title */}
            <ParallaxLayer    
              offset={0}
              speed={5.5}
              style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
              <ContentContainer style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <h2 style={{fontSize: 70, fontWeight: "bold", color: "#fff"}}>AI in CyberSecurity</h2>
                <p style={{color: "#fff", width: 628, textAlign: "center"}}>
                AI security tools work to discover, predict, justify, act, and learn about potential cybersecurity threats, without needing much human intervention.
                </p>
              </ContentContainer>
            </ParallaxLayer>


            {/* First Text */}
            <ParallaxLayer    
              offset={0.7}
              speed={4.8}
              style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}
            >
              <ContentContainer style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", height: "fit-content", alignItems: "center", justifyContent: "space-around", flexDirection: "row"}}>

                <div className='iconTextContainer'>
                  <SiSpeedtest
                    color={"#fff"}
                    size={iconSize}
                  />
                  <p style={{color: "#fff"}}>
                  AI can help to speed up detection.
                  </p>
                </div>

                <div className='iconTextContainer'>
                  <SiEventstore
                    color={"#fff"}
                    size={iconSize}
                  />
                  <p style={{color: "#fff"}}>
                  AI can process a huge number of events.
                  </p>
                </div>

                <div className='iconTextContainer'>
                  <IoIosEye
                    color={"#fff"}
                    size={iconSize}
                  />
                  <p style={{color: "#fff"}}>
                  AI can detect anomalys.
                  </p>
                </div>
                

                <div className='iconTextContainer'>
                  <GiSmart 
                    color={"#fff"}
                    size={iconSize}
                  />
                  <p style={{color: "#fff"}}>
                  AI learns continuesly.
                  </p>
                </div>

                <div className='iconTextContainer'>
                  <AiOutlineDotChart
                    color={"#fff"}
                    size={iconSize}
                  />
                  <p style={{color: "#fff"}}>
                  AI can even predict future incidence.
                  </p>
                </div>

                <div className='iconTextContainer'>
                  <AiOutlineRadiusBottomleft 
                    color={"#fff"}
                    size={iconSize}
                  />
                  <p style={{color: "#fff"}}>
                  AI is making logical and own conclusions.
                  </p>
                </div>
                
              </ContentContainer>
            </ParallaxLayer>





          </Parallax>
        </ContentContainer>
    </PageContainer>
  )
}
