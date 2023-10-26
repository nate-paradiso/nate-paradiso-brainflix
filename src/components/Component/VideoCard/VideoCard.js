import "./VideoCard.scss";
import { Link } from "react-router-dom";

export function VideoCard ( {videos}) {

    return(
        <div>
            {videos.map((video)  => (
            <Link to={`/video/${video.id}`}
            key={video.id}>
        <div className={`video-container__card 
            ${videos.id === video.id ? "video-container__hidden" : ""}`}>
            <video 
            className="image" poster={video.image}>
            </video>
                <div className="video-container__card--text">
                    <h3 className="video-container__card--text-title">{video.title}</h3>
                    <p className="video-container__card--text-paragraph">{video.channel}</p>
                </div>
        </div>
        </Link>
        ))}
        </div>
    )
}

