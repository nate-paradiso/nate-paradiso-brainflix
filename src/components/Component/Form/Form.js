import "./Form.scss";

export function Form () {

    return(
        <form className="form" id="myForm">
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
                        name="comment" id="comment" cols="30" rows="10" 
                        placeholder="Add a new comment" >
                        </textarea>
                        <input className="form-box__typing--button" 
                        type="submit" value="comment"
                        />
                    </div>
                </div>
            </div>    
        </form>
    )
}
