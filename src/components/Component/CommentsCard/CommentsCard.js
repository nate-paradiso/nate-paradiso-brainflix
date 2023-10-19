import "./CommentsCard.scss"

export function CommentsCard ( {comment}) {

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
    }
    return(
        <div id="formComments" class="comment-section">
        <div class="comments-container">
            <div class="comments-container__avatar comments-container__avatar--greyed"></div>
            <div class="comments-container__all-text">
                <div class="comments-container__text--time">
                    <p class="comments-container__text--name-label">{comment.name}</p>
                    <p class="comments-container__text--time-label">
                    {formatTime(comment.timestamp)}
                    </p>
                </div>
                <div class="comments-container__text">
                    <p class="comments-container__text--comment">{comment.comment}</p>                
                </div>
            </div>
        </div>
    </div>
    )
}
