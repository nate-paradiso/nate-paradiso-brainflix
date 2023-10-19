import "./VideoCardList.scss";
import videoData from "../../../data/videos.json"
import videoDetails from "../../../data/video-details.json"
import { VideoCard } from "../VideoCard/VideoCard";



export function VideoCardList ({selectedVideoId, handleSelectVideo}) {

    return(
        <div className="video-container">
        <h3 className="video-container__title">Next Videos</h3>
            {videoDetails
                .filter(videoDetails => videoDetails.id != selectedVideoId)
                .map(videoDetails => 
                    <VideoCard
                        videoDetails={videoDetails}
                        handleSelectVideo={handleSelectVideo}
                    />
                ) }
        </div>
    )
}