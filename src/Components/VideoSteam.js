import React from 'react'
import {useSearchParams} from "react-router-dom"
import Comments from './Comments';

const VideoSteam = () => {

    const [seachParams] = useSearchParams()
  return (
		<div className='px-4 m-4'>
			<iframe
				width="900"
				height="500"
				src={"https://www.youtube.com/embed/" + seachParams.get("v")}
              title="YouTube video player"
              autoPlay
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			>
				       
          </iframe>
          
          <Comments />
		</div>
	);
}

export default VideoSteam