import "./VideoDetails.scss";
// import videoDetails from "../../../data/video-details.json"
import viewsIcon from "../../../assets/images/icons/views.svg"
import likesIcon from "../../../assets/images/icons/likes.svg"
import { useState, useEffect } from "react";
import axios from "axios";


export function VideoDetails ( {videoIdData, formatTime, videoData}) {

    
    const [videoDetails, setVideoDetails] = useState()

    useEffect(() => {
        const fetchVideoDetails = async () => {
            const response =await 
            axios.get(`https://project-2-api.herokuapp.com/videos/${videoIdData}?api_key=b83df1dc-dac4-4015-afac-d72c99d85694`);
            console.log(response)
            setVideoDetails(response.data)
        }
        fetchVideoDetails();
    }, []);



    return(
        <>
        {videoDetails ? <>
        <div className="details-container">
        <h1 className="title">{videoData
        .find(videoImage => videoImage.id === videoDetails.id)
        .title}</h1>
        {/* <div className="data">
            <div className="data__container">
                <h3 className="data__container--title">
                    By {videoData
                    .find(videoImage => videoImage.id === videoIdData)
                    .channel}
                </h3>
                <p className="data__container--numbers data__container--margin">
                    {formatTime(videoData
                    .find(videoImage => videoImage.id === videoIdData)
                    .timestamp)}
                </p>            
            </div>
            <div className="data__container">
                <div className="data__container-views">
                    <img className="data__container--icon" 
                    src={viewsIcon}  alt="views icon" />
                    <p className="data__container--numbers">
                        {videoData
                        .find(videoImage => videoImage.id === videoIdData)
                        .views}
                    </p>
                </div>
                <div className="data__container-likes">
                    <img className="data__container--icon" 
                    src={likesIcon} alt="" />
                    <p className="data__container--numbers data__container--margin">
                        {videoData
                        .find(videoImage => videoImage.id === videoIdData)
                        .likes}
                    </p>
                </div>
            </div>
        </div>
        <div>
            <p className="data__description">
                {videoData
                .find(videoImage => videoImage.id === videoIdData)
                .description}
            </p>
            <h4 className="data__comment">
                {videoData
                .find(videoImage => videoImage.id === videoIdData)
                .comments.length} Comments
            </h4>
        </div> */}
        </div> </> : <p>"loading..."</p> }   
        </> 
    )
}

