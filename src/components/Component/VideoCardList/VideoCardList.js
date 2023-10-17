import "./VideoCardList.scss";
import videoData from "../../../data/videos.json"
import videoDataDetails from "../../../data/video-details.json"
import { VideoCard } from "../VideoCard/VideoCard";



export function VideoCardList () {

    return(
        <div className="video-container">
        <h3 className="video-container__title">Next Videos</h3>
            {videoDataDetails.map(detail => {
                return (
                    <VideoCard
                    key={detail.id}
                    image={detail.image}
                    title={detail.title}
                    channel={detail.channel}
                    />
                )
            })}
        </div>
    )
}
