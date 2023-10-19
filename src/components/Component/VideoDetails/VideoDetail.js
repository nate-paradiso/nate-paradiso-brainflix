import "./VideoDetails.scss";
import videoDetails from "../../../data/video-details.json"


export function CurrentVideoDetails ( {selectedVideoId}) {
console.log(videoDetails)

const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
}
    return(
        <>
        <h1 className="title">{videoDetails
        .find(videoImage => videoImage.id === selectedVideoId)
        .title}</h1>
        <div className="data">
            <div className="data__container">
                <p>
                    By {videoDetails
                    .find(videoImage => videoImage.id === selectedVideoId)
                    .channel}
                </p>
                <img src="../../../" alt="views image" />
                <p>
                    {formatTime(videoDetails
                    .find(videoImage => videoImage.id === selectedVideoId)
                    .timestamp)}
                </p>            
            </div>
            <div className="data__container">
                <p>
                    {videoDetails
                    .find(videoImage => videoImage.id === selectedVideoId)
                    .views}
                </p>
                <img src="" alt="" />
                <p>
                    {videoDetails
                    .find(videoImage => videoImage.id === selectedVideoId)
                    .likes}
                </p>
            </div>
        </div>
        <div>
            <p>
                {videoDetails
                .find(videoImage => videoImage.id === selectedVideoId)
                .description}
            </p>
            <p>
                {videoDetails
                .find(videoImage => videoImage.id === selectedVideoId)
                .comments.length} Comments
            </p>
        </div>
        </>
    )
}

