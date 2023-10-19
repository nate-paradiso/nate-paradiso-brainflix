import "./CurrentVideo.scss";
// import videoData from "../../../data/videos.json"
// import videoDataDetails from "../../../data/video-details.json"

export function CurrentVideo ({videoImage}) {

    return(
        <div className="video-main">
            <div className="video-main__wrapper">
                <video className="video-main__wrapper--video" poster={videoImage} controls></video>
            </div>
        </div>
    )
}
