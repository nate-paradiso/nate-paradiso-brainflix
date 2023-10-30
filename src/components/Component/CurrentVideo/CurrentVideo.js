import "./CurrentVideo.scss";



export function CurrentVideo ({videoFromId }) {

    return(
        <>
       {videoFromId ? (
        <section className="video-main">
            <div className="video-main__wrapper">
                <video className="video-main__wrapper--video" 
                poster={videoFromId.image} 
                controls>
                </video>
            </div>
        </section>)
        :  
        <p>Not Found</p>
        }
        </>
    )
}



