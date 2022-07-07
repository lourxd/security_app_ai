import React from "react"
import podcast from "../files/podcast.mp3"
function PodcastPlayer(){

    return(
        
        <audio
            src={podcast}
            controls
            style={{zIndex: 10}}
        />
    )
};


export default PodcastPlayer