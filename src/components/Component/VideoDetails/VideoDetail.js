import "./VideoDetails.scss";
import videoDetails from "../../../data/video-details.json"
import viewsIcon from "../../../assets/images/icons/views.svg"
import likesIcon from "../../../assets/images/icons/likes.svg"


export function VideoDetails ( {selectedVideoId, formatTime}) {

    return(
        <div className="details-container">
        <h1 className="title">{videoDetails
        .find(videoImage => videoImage.id === selectedVideoId)
        .title}</h1>
        <div className="data">
            <div className="data__container">
                <h3 className="data__container--title">
                    By {videoDetails
                    .find(videoImage => videoImage.id === selectedVideoId)
                    .channel}
                </h3>
                <p className="data__container--numbers data__container--margin">
                    {formatTime(videoDetails
                    .find(videoImage => videoImage.id === selectedVideoId)
                    .timestamp)}
                </p>            
            </div>
            <div className="data__container">
                <div className="data__container-views">
                    <img className="data__container--icon" 
                    src={viewsIcon}  alt="views icon" />
                    <p className="data__container--numbers">
                        {videoDetails
                        .find(videoImage => videoImage.id === selectedVideoId)
                        .views}
                    </p>
                </div>
                <div className="data__container-likes">
                    <img className="data__container--icon" 
                    src={likesIcon} alt="" />
                    <p className="data__container--numbers data__container--margin">
                        {videoDetails
                        .find(videoImage => videoImage.id === selectedVideoId)
                        .likes}
                    </p>
                </div>
            </div>
        </div>
        <div>
            <p className="data__description">
                {videoDetails
                .find(videoImage => videoImage.id === selectedVideoId)
                .description}
            </p>
            <h4 className="data__comment">
                {videoDetails
                .find(videoImage => videoImage.id === selectedVideoId)
                .comments.length} Comments
            </h4>
        </div>
        </div>
    )
}

