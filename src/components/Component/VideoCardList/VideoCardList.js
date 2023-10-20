import "./VideoCardList.scss";
import videoDetails from "../../../data/video-details.json"
import { VideoCard } from "../VideoCard/VideoCard";



export function VideoCardList ({selectedVideoId, handleSelectVideo}) {

    return(
        <section className="video-container">
            <h3 
            className="video-container__title">Next Videos
            </h3>
                {videoDetails
                    .filter(videoDetails => videoDetails.id != selectedVideoId)
                    .map(videoDetails => 
                        <VideoCard
                            videoDetails={videoDetails}
                            handleSelectVideo={handleSelectVideo}
                    />
                ) }
        </section>
    )
}