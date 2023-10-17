import "./VideoCard.scss";
import videoDataDetails from "../../../data/video-details.json"

export function VideoCard ( {image, title, channel}) {
    // console.log(videoData)
    // console.log(videoDataDetails)

    return(
        <div className="video-container__card">
            <video className="image" poster={image}></video>
            <div className="video-container__card--text">
                <p className="video-container__card--text-title">{title}</p>
                <p className="video-container__card--text-paragraph">{channel}</p>
            </div>
        </div>
    )
}
