import "./CommentCardList.scss"
import videoDataDetails from "../../../data/video-details.json"
import { CommentsCard } from "../CommentsCard/CommentsCard"



export function CommentCardList () {

    return(
        <div className="comment-container">
            {videoDataDetails.map(detail => {
                return (
                    <CommentsCard
                    key={detail.id}
                    name={detail.comments[0].name}
                    comment={detail.comment[0].comment}
                    timestamp={detail.comment[0].timestamp}
                    />
                )
            })}
        </div>
    )
}
