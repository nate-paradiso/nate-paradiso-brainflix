import "./VideoDetails.scss";
// import videoDetails from "../../../data/video-details.json"
import viewsIcon from "../../../assets/images/icons/views.svg"
import likesIcon from "../../../assets/images/icons/likes.svg"
import { useState, useEffect } from "react";
import axios from "axios";


export function VideoDetails ( {videoFromId, formatTime}) {
    return(
        <>
        {videoFromId ? <>
        <div className="details-container">
        <h1 className="title">{videoFromId.title}</h1>
        <div className="data">
            <div className="data__container">
                <h3 className="data__container--title">
                    By {videoFromId.channel}
                </h3>
                <p className="data__container--numbers data__container--margin">
                    {formatTime(videoFromId.timestamp)}
                </p>            
            </div>
            <div className="data__container">
                <div className="data__container-views">
                    <img className="data__container--icon" 
                    src={viewsIcon}  alt="views icon" />
                    <p className="data__container--numbers">
                        {videoFromId.views}
                    </p>
                </div>
                <div className="data__container-likes">
                    <img className="data__container--icon" 
                    src={likesIcon} alt="" />
                    <p className="data__container--numbers data__container--margin">
                        {videoFromId.likes}
                    </p>
                </div>
            </div>
        </div>
        <div>
            <p className="data__description">
                {videoFromId.description}
            </p>
            <h4 className="data__comment">
                {videoFromId.comments.length} Comments
            </h4>
        </div>
        </div> </> : <p>"loading..."</p> }   
        </> 
    )
}

