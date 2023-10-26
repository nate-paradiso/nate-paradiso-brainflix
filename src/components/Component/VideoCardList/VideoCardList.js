import "./VideoCardList.scss";
import { VideoCard } from "../VideoCard/VideoCard";



export function VideoCardList ({videos}) {

    return(
        <section className="video-container">
            <h3 
            className="video-container__title">Next Videos
            </h3>
            <VideoCard
            videos={videos}
            />
        </section>
    )
}
