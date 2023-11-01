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
                     <source src={videoFromId.video} type="video/mp4" />
                </video>
            </div>
        </section>)
        :  
        <p>Not Found</p>
        }
        </>
    )
}



