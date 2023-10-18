import "./CommentCardList.scss"
import videoDataDetails from "../../../data/video-details.json"
import { CommentsCard } from "../CommentsCard/CommentsCard"
import { formatTime } from "../CommentsCard/functions"



export function CommentCardList () {
    console.log(videoDataDetails)
 
    
  
    


    return(
        <div className="comment-container">
            {videoDataDetails.map(detail => {
                return (
                    <>
                  
                    <CommentsCard
                    key={detail.comments[0].id}
                    name={detail.comments[0].name}
                    comment={detail.comments[0].comment}
                    timestamp={formatTime(detail.comments[0].timestamp)}
                    />
                    </>
                )
            })}
        </div>
    )
}
