import "./CurrentVideo.scss";
// import videoData from "../../../data/videos.json"
// import videoDataDetails from "../../../data/video-details.json"

export function CurrentVideo ({videoImage}) {

    return(
        <div className="current-video">
            <video className="current-video__player" poster={videoImage}></video>
        </div>
    )
}
