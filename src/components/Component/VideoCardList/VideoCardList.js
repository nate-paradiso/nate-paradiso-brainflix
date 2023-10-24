import "./VideoCardList.scss";
import { VideoCard } from "../VideoCard/VideoCard";



export function VideoCardList ({videoData, setVideoData}) {

    return(
        <section className="video-container">
            <h3 
            className="video-container__title">Next Videos
            </h3>
                {videoData
                    .filter(video => video.id !== videoData.id)
                    .map(video => 
                        <VideoCard
                            key={video.id}
                            videoData={video}
                            setVideoData={setVideoData} 
                        />
                    ) 
                }
        </section>
    )
}