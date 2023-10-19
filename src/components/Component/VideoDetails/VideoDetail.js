import "./VideoDetails.scss";
import videoDetails from "../../../data/video-details.json"
export function CurrentVideoDetails ( {selectedVideoId}) {
console.log(videoDetails)

    return(
        <>
        <h1 className="Title">{videoDetails
        .find(videoImage => videoImage.id === selectedVideoId)
        .title}</h1>
        <div className="Data">
            <div className="Data__container">
                <p>By {videoDetails
                .find(videoImage => videoImage.id === selectedVideoId)
                .channel}
                </p>
                <img src="" alt="" />
                <p>{videoDetails
                .find(videoImage => videoImage.id === selectedVideoId)
                .likes}
                </p>
            </div>
            <div className="Data__container">
                <p></p>
                <img src="" alt="" />
                <p></p>
            </div>
        </div>
        <p></p>
        </>
    )
}

