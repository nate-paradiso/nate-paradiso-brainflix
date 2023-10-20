import "./VideoCard.scss";

export function VideoCard ( {videoDetails, handleSelectVideo}) {


    return(
        <div className="video-container__card" 
        onClick={ () => handleSelectVideo(videoDetails.id)}
        >
        <video className="image" poster={videoDetails.image}></video>
            <div className="video-container__card--text">
                <p className="video-container__card--text-title">{videoDetails.title}</p>
                <p className="video-container__card--text-paragraph">{videoDetails.channel}</p>
            </div>
        </div>
    )
}

