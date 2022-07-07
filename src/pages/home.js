import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { useRef } from 'react'
import ContentContainer from '../components/contentContainer'
import PageContainer from '../components/pageContainer'
import "../index.css"
import { SiSpeedtest, SiEventstore } from "react-icons/si"
import { IoIosEye } from "react-icons/io"
import { GiSmart } from "react-icons/gi"
import { AiOutlineDotChart, AiOutlineRadiusBottomleft } from "react-icons/ai"
import Header from '../components/header'
import PodcastPlayer from '../components/audioPlayer'


export default function Home() {
  const iconSize= 150
  const scrollRef = useRef()
  return (
    <PageContainer>
        <ContentContainer>
          <Parallax pages={6} ref={scrollRef} style={{position: "absolute", top: 0, left: 0}}>
            <ParallaxLayer              
              offset={0}
              style={{zIndex: 1}}
            >
              <Header scroll={scrollRef}/>
            </ParallaxLayer>

            {/* Title */}
            <ParallaxLayer    
              offset={0}
              speed={2.5}
              style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
              <ContentContainer style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <h2 className='websiteTitle'>AI in CyberSecurity</h2>
                <p style={{color: "#fff", width: 628, textAlign: "center"}}>
                  AI security tools work to discover, predict, justify, act, and learn about potential cybersecurity threats, without needing much human intervention.
                </p>
              </ContentContainer>
            </ParallaxLayer>


            {/* Icons */}
            <ParallaxLayer    
              offset={0.9}
              speed={1}
              style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", backgroundColor: 'rgba(0, 0, 0, 0.8)', }}
            >
              <ContentContainer className="homeGrid">

                <div className='iconTextContainer'>
                  <SiSpeedtest
                    color={"#fff"}
                    size={iconSize}
                  />
                  <p style={{color: "#fff", fontWeight: "bold"}}>
                  AI can help to speed up detection.
                  </p>
                </div>

                <div className='iconTextContainer'>
                  <SiEventstore
                    color={"#fff"}
                    size={iconSize}
                  />
                  <p style={{color: "#fff", fontWeight: "bold"}}>
                  AI can process a huge number of events.
                  </p>
                </div>

                <div className='iconTextContainer'>
                  <IoIosEye
                    color={"#fff"}
                    size={iconSize}
                  />
                  <p style={{color: "#fff", fontWeight: "bold"}}>
                  AI can detect anomalys.
                  </p>
                </div>
                

                <div className='iconTextContainer'>
                  <GiSmart 
                    color={"#fff"}
                    size={iconSize}
                  />
                  <p style={{color: "#fff", fontWeight: "bold"}}>
                  AI learns continuesly.
                  </p>
                </div>

                <div className='iconTextContainer'>
                  <AiOutlineDotChart
                    color={"#fff"}
                    size={iconSize}
                  />
                  <p style={{color: "#fff", fontWeight: "bold"}}>
                  AI can even predict future incidence.
                  </p>
                </div>

                <div className='iconTextContainer'>
                  <AiOutlineRadiusBottomleft 
                    color={"#fff"}
                    size={iconSize}
                  />
                  <p style={{color: "#fff", fontWeight: "bold"}}>
                  AI is making logical and own conclusions.
                  </p>
                </div>
                
              </ContentContainer>
            </ParallaxLayer>


            <ParallaxLayer    
              offset={1}
              factor={1}
              speed={0.5}
              style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", marginBottom: 1000}}
            >
              <ContentContainer style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                <h2 className='secondaryHeader' style={{width: "80%"}}>How AI impacts the future of Cybersecurity </h2>
                <p className='main_text'> 
                Artificial intelligence improves security but the same technology used to protect 
                can be used by cyber criminals to launch attacks without the need of human interaction.
                We as cyber professionals should be always aware of chances and risks of AI.
                <br></br><br></br>
                Let us dive deeper into the security potential of AI Cybersecurity.
                </p>
              </ContentContainer>

            </ParallaxLayer>


            <ParallaxLayer    
              offset={2}
              factor={1}
              speed={0.1}
              style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", marginBottom: 1000, backgroundColor: 'rgba(0, 0, 0, 0.8)',}}
            >
              <ContentContainer style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
              <h2 className='secondaryHeader' style={{width: "80%"}}>Management of vulnerabilities</h2>
                <p className='main_text'> 
                With new technologys and growing networks organizations start to struggle to manage all 
                the upcoming new vulnerabilities. Conventional vulnerability management methods 
                exceed their limits and response only after hackers already exploited the vulnerability.
                <br></br><br></br>
                Modern AI and machine leanring can improve the management by accessing vulnerability databases.
                </p>
              </ContentContainer>

            </ParallaxLayer>

            <ParallaxLayer    
              offset={3}
              factor={1}
              speed={0.1}
              style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", marginBottom: 1000}}
            >
              <ContentContainer style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
              <h2 className='secondaryHeader' style={{width: "80%"}}>Security screening</h2>
                <p className='main_text'> 
                Security screening done by immigration officers and customs can detect people that are lying about their intentions. However, the screening process is prone to mistakes. In addition, human-based screening can lead to errors because people get tired and can be distracted easily.<br></br><br></br>
                The United States Department of Homeland Security has developed a system called AVATAR that screens body gestures and facial expressions of people.<br></br> AVATAR leverages AI and Big Data to pick up small variations of facial expressions and body gestures that may raise suspicion.
                </p>
              </ContentContainer>

            </ParallaxLayer>


            <ParallaxLayer    
              offset={4}
              factor={1}
              speed={0.1}
              style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", marginBottom: 1000,backgroundColor: 'rgba(0, 0, 0, 0.8)',}}
            >
              <ContentContainer style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
              <h2 className='secondaryHeader' style={{width: "80%"}}>AI-powered threat detection</h2>
                <p className='main_text'> 
                Commodities trader ED&F Man Holdings experienced a security incident several years ago. An independent assessment indicated that the company needed to improve its cybersecurity processes and tools.<br></br>
                The company looked to Cognito, Vectra’s AI-based threat detection and response platform. Cognito collects and stores network metadata and enriches it with unique security insights.<br></br> It uses this metadata along with machine learning techniques to detect and prioritize attacks in real time.
                Cognito helped ED&F Man Holdings to detect and block multiple man-in-the-middle attacks, and halt a crypto mining scheme in Asia. Moreover, Cognito found command-and-control malware that had been hiding for several years.
                </p>
              </ContentContainer>

            </ParallaxLayer>

            <ParallaxLayer    
              offset={5}
              factor={0.4}
              speed={0.1}
              style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", marginBottom: 1000, zIndex: 10}}
            >
              <ContentContainer style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", backgroundColor: 'rgba(0, 0, 227, 0.9)', padding: 20, paddingBottom: 40}}>
              <h2 className='secondaryHeader' style={{width: "80%"}}>Podcast</h2>
              <PodcastPlayer/>

              </ContentContainer>

            </ParallaxLayer>

            <ParallaxLayer    
              offset={5.2}
              speed={1}
              style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
            >
              <ContentContainer style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-around", backgroundColor: 'rgba(0, 0, 0, 0.8)', paddingLeft: 60, paddingBottom: 40}}>
                <h2 className='secondaryHeader' style={{fontSize: 30, marginBottom: 10}}>Creators</h2>
                <h3 style={{color: "white"}}>Felix Jaezosch <br></br><a href='https://www.linkedin.com/in/felix-jaezosch/'>https://www.linkedin.com/in/felix-jaezosch/</a></h3>
                <h3 style={{color: "white"}}>Merzouk Benamar <br></br><a href='https://www.linkedin.com/in/merzouk-benamar/'>https://www.linkedin.com/in/merzouk-benamar/</a></h3>
                <h3 style={{color: "white"}}>Lourenço Rosado <br></br><a href='https://www.linkedin.com/in/lourenco-rosado/'>https://www.linkedin.com/in/lourenco-rosado/</a></h3>
              </ContentContainer>

            </ParallaxLayer>



          </Parallax>
        </ContentContainer>
    </PageContainer>
  )
}
