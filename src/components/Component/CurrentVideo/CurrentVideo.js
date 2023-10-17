import "./CurrentVideo.scss";
import videoData from "../../../data/videos.json"
import videoDataDetails from "../../../data/video-details.json"

export function CurrentVideo () {
    console.log(videoData)
    console.log(videoDataDetails)

    return(
        <div>
            <video>placeholder</video>
        </div>
    )
}
