import "./Form.scss";

export function Form () {

    return(
        <>
        <form className="form" id="myForm">
        <div className="form-container">
            <div className="form-container__img-container">
                <div className="form-container__img-container--image"></div>
            </div>
            <div className="form-container__typing">
                <label className="shows__card--label shows__card--label-display form-container__typing--comments-label" for="comment">join the conversation</label>
                <textarea className="form-container__typing--comments" name="comment" id="comment" cols="30" rows="10" placeholder="Add a new comment" ></textarea>
                <input className="form-container__typing--button" type="submit" value="comment"/>
            </div>
        </div>    
    </form>
    <div id="formComments" className="comment-section"></div>
    </>
    )
    }
