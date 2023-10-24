import "./VideoCard.scss";

export function VideoCard ( {videoData, setVideoData}) {


    return(
        <div className="video-container__card" 
        onClick={ () => setVideoData(videoData.id)}
        >
            <video 
            className="image" poster={videoData.image}>
            </video>
                <div className="video-container__card--text">
                    <h3 className="video-container__card--text-title">{videoData.title}</h3>
                    <p className="video-container__card--text-paragraph">{videoData.channel}</p>
                </div>
        </div>
    )
}

