import "./CommentsCard.scss"

export function CommentsCard ( {comment}) {

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
    }
    return(
        <div id="formComments" className="comment-section">
        <div className="comments-container">
            <div className="comments-container__avatar comments-container__avatar--greyed"></div>
            <div className="comments-container__all-text">
                <div className="comments-container__text--time">
                    <p className="comments-container__text--name-label">{comment.name}</p>
                    <p className="comments-container__text--time-label">
                    {formatTime(comment.timestamp)}
                    </p>
                </div>
                <div className="comments-container__text">
                    <p className="comments-container__text--comment">{comment.comment}</p>                
                </div>
            </div>
        </div>
    </div>
    )
}
