
import React from 'react'

function VideoDesc({video}) {
    if(video){
        const src = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                <iframe title = "player" src={src} ></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">
                        {video.snippet.title}
                    </h4>
                    <p>
                        {video.snippet.description}
                    </p>
                </div>
            </div>
        )
    }
    return(
        <div>
            Loadding.....
        </div>
    );
}

export default VideoDesc;
