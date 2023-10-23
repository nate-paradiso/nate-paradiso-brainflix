import "./Upload.scss"
import uploadImage from "../../assets/images/Upload-video-preview.jpg"

export const Upload = () => {
  
  
    return ( 
    <div>
        <img className="upload-image"src={uploadImage} alt="biker" /> 
       <form className="form" id="myForm">
            <div className="form-container">      
                <div className="form-container__typing">

                    <label className="shows__card--label 
                    shows__card--label-display 
                    form-container__typing--comments-label" 
                    htmlFor="comment">title your video
                    </label>
                    <input className="form-container__typing--name" 
                    type="text" name="name" id="name" 
                    placeholder="Add a title to your video"/>
                    
                    <label className="shows__card--label 
                    shows__card--label-display 
                    form-container__typing--comments-label" 
                    htmlFor="comment">Add a video description
                    </label>
                    <div className="form-container__typing--comments-container">
                        <textarea className="form-container__typing--comments" 
                        name="comment" id="comment" cols="30" rows="10" 
                        placeholder="Add a title to your video" >
                        </textarea>
                        <input className="form-container__typing--button" 
                        type="submit" value="PUBLISH"
                        />
                        <input className="form-container__typing--cancel" 
                        type="submit" value="CANCEL"
                        />
                    </div>
                </div>
            </div>    
        </form>
    </div>
  )
}
