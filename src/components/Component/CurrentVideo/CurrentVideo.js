import "./CurrentVideo.scss";



export function CurrentVideo ({videoIdData, videoData}) {

    return(
        <section className="video-main">
            <div className="video-main__wrapper">
                <video className="video-main__wrapper--video" 
                
                poster={videoData.find(video => video.id === videoIdData)?.image} 
                
                controls>
                </video>
            </div>
        </section>
    )
}