import React from 'react'
import VideoItems from './VideoItems';


function VideoList({videos , selectedVideo}) {

    let allList = videos.map((video) => {
        return <VideoItems key = {video.id.videoId} selectedVideo={selectedVideo} video = {video}/>
    });

    return (
        <div className = 'ui relaxed divided list'>
           {allList}
        </div>
    )
}

export default VideoList;
