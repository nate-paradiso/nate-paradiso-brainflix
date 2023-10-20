import "./CommentCardList.scss"
import videoDetails from "../../../data/video-details.json"
import { CommentsCard } from "../CommentsCard/CommentsCard"


export function CommentCardList ({selectedVideoId, handleSelectVideo, formatTime}) {

    return(
        <div className="comment-container">
            {videoDetails
            .find(videoComments => videoComments.id === selectedVideoId).comments
            .map(comment => 
                    <CommentsCard
                    key={comment.id}
                    formatTime={formatTime}
                    comment={comment}
                    handleSelectVideo={handleSelectVideo}
                    />
            )}
        </div>
    )
}