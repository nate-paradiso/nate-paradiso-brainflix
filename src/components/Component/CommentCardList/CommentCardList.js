import "./CommentCardList.scss"
import { CommentsCard } from "../CommentsCard/CommentsCard"


export function CommentCardList ({videoFromId, formatTime}) {
    return(
        <>
        {videoFromId ? (
        <div className="comment-container">
            {videoFromId.comments.map((comment) => <CommentsCard
                key={comment.id}
                formatTime={formatTime}
                comment={comment}
                />
            )}
        </div>
        ) : (
            <p>Not Found</p>
        )}
        </>
    )
}