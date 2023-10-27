import "./VideoCard.scss";
import { Link } from "react-router-dom";

export function VideoCard ( {videos, videoId}) {

    console.log(videos.id)
    return(
        <>
            {videos.map((video)  => (
            <Link to={`/video/${video.id}`}
            key={video.id}
            className={`${videoId === video.id ? "video-container__hidden" : ""}`}>
        <div className="video-container__card">
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
        </>
    )
}

