import "./VideoCard.scss";

export function VideoCard ( {videoDetails, handleSelectVideo}) {


    return(
        <div className="video-container__card" 
        onClick={ () => handleSelectVideo(videoDetails.id)}
        >
            <video 
            className="image" poster={videoDetails.image}>
            </video>
                <div className="video-container__card--text">
                    <h3 className="video-container__card--text-title">{videoDetails.title}</h3>
                    <p className="video-container__card--text-paragraph">{videoDetails.channel}</p>
                </div>
        </div>
    )
}

