import "./Upload.scss"
import uploadImage from "../../assets/images/Upload-video-preview.jpg"
import { useState } from "react";
import axios from "axios";

export const Upload = () => {
  
    const [ myFormData, setMyFormData ] = useState({});

    const handleAllChanges = (event) => {
      setMyFormData({...myFormData, [event.target.name]: event.target.value});
    }


 
    
  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/videos`, {
      title: myFormData.title,
      description: myFormData.description
    });
    window.location.href = '/'; 
    alert("Successful");

  };

    return ( 
    <div className="upload">
        <h1 className="upload-title">Upload Video</h1>
        <h4 className="upload-label"> video thumbnail</h4>
        <div className="upload-image-form">
          <div className="upload-image-title">
            <h4 className="upload-label-desktop"> video thumbnail </h4>
            <div className="upload-image">
              <img className="upload-image__image" src={uploadImage} alt="biker" /> 
            </div>
          </div>
          <form className="form" id="myForm" onSubmit={handleSubmit} >
              <div className="form-container">      
                  <div className="form-container__typing">
                      <label className="shows__card--label 
                      shows__card--label-display 
                      form-container__typing--comments-label" 
                      htmlFor="comment">title your video
                      </label>
                      <input className="form-container__typing--name input-title"
                      type="text" name="title" id="title" 
                      placeholder="Add a title to your video" 
                      onChange={handleAllChanges}
                      value={myFormData.title}
                      />
                      <label className="shows__card--label 
                      shows__card--label-display 
                      form-container__typing--comments-label" 
                      htmlFor="comment">Add a video description
                      </label>
                      <div className="form-container__typing--comments-container">
                          <textarea className="
                          form-container__typing--comments-tablet" 
                          name="description" id="comment" cols="30" rows="10" 
                          placeholder="Add a description to your video" 
                          onChange={handleAllChanges}
                          value={myFormData.description}
                          >
                          </textarea>
                          <div className="form-container__buttons-mobile">
                            <button className="form-container__typing--button" 
                            >PUBLISH</button>
                            <input className="form-container__typing--cancel" 
                            type="" value="CANCEL" 
                            />
                          </div>
                      </div>
                  </div>
              </div>    
            <div className="form-container__buttons-desktop">
              <input className="form-container__typing--button" 
              type="submit" value="PUBLISH" 
              />
              <input className="form-container__typing--cancel" 
              type="" value="CANCEL" 
              />
            </div>
          </form>
        </div>
    </div>
  )
}
