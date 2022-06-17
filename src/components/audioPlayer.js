import React from "react"
import podcast from "../files/podcast.mp3"

import ReactAudioPlayer from 'react-audio-player';
function PodcastPlayer(){

    return(
        
        <ReactAudioPlayer
            src={podcast}
            autoPlay
            controls
        />
    )
};


export default PodcastPlayer