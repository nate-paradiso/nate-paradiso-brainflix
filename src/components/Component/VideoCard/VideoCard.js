import "./VideoCard.scss";
import videoDataDetails from "../../../data/video-details.json"
import { useState } from "react";

export function VideoCard ( {image, title, channel, id, setSelectedVideo}) {

    const click = (id) => {
        setSelectedVideo(videoDataDetails.find(video => {
            return video.id === id
        }))
    }
    // const [selectedVideo, setSelectedVideo] = useState()

    // const selectVideo = () => {
    //     setSelectedVideo(selectedVideoStatus => !selectedVideoStatus)
    // }


    return(
        <div className="video-container__card" onClick={ () => click(id)}>
            <video className="image" poster={image}></video>
            <div className="video-container__card--text">
                <p className="video-container__card--text-title">{title}</p>
                <p className="video-container__card--text-paragraph">{channel}</p>
            </div>
        </div>
    )
}
