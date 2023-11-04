import "./Form.scss";
import { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'

export function Form ({setVideoFromId}) {

    const { videoId } = useParams();
    const [myFormData, setMyFormData] = useState({comments: ""});


    const handleAllChanges = (event) => {
        setMyFormData({ ...myFormData, comments: event.target.value });
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!myFormData.comments){
          alert("Must provide a comment.")
        
        } else {
            try { 
                await axios.post((`${process.env.REACT_APP_BACKEND_URL}/videos/${videoId}/comments`), {
                comment: myFormData.comments
                });
            }catch (error){
                console.error(error); 
                alert("Unsuccessful");
            }   
        }
        
        // const getComments = async (videoId) => {
        //     try {
        //         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/videos/${videoId}`);
        //         const updatedComments = response.data.comments;
        //         setVideoFromId(updatedComments)
        //     } catch(error){
        //         console.log(error);
        //     }
        //     return
        // };
    };
   
    

    return(
        <form className="form" id="myForm" onSubmit={handleSubmit}>
            <div className="form-box">
                <div className="form-box__img-container">
                    <div 
                    className="form-box__img-container--image">
                    </div>
                </div>
                <div className="form-box__typing">
                    <label className="shows__card--label 
                    shows__card--label-display 
                    form-container__typing--comments-label" 
                    htmlFor="comment">join the conversation
                    </label>
                    <div className="form-box__typing--comments-container">
                        <textarea className="form-box__typing--comments" 
                        name="comments" id="comment" cols="30" rows="10" 
                        placeholder="Add a new comment" 
                        onChange={handleAllChanges}
                        value={myFormData.comments}>
                        </textarea>
                        <button className="form-box__typing--button" 
                        >Comment</button>
                    </div>
                </div>
            </div>    
        </form>
    )
}
