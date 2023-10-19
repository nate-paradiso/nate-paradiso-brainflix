import "./CurrentVideo.scss";
import videoDetails from "../../../data/video-details.json"

export function CurrentVideo ({selectedVideoId}) {

    return(
        <div className="video-main">
            <div className="video-main__wrapper">
                <video className="video-main__wrapper--video" 
                poster={videoDetails.find(videoImage => videoImage.id === selectedVideoId).image} controls>
                </video>
            </div>
        </div>
    )
}