import "./VideoCard.scss";
import { Link } from "react-router-dom";

export function VideoCard ( {videoData, setVideoData}) {


    return(
        <Link to={`/video/${videoData.id}`}>
            <div className="video-container__card" >
        
            <video 
            className="image" poster={videoData.image}>
            </video>
                <div className="video-container__card--text">
                    <h3 className="video-container__card--text-title">{videoData.title}</h3>
                    <p className="video-container__card--text-paragraph">{videoData.channel}</p>
                </div>
        </div>
        </Link>
    )
}

