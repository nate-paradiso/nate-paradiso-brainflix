import "./CommentCardList.scss"
import videoDataDetails from "../../../data/video-details.json"
import { CommentsCard } from "../CommentsCard/CommentsCard"
// import { Form } from "../Form/Form"



export function CommentCardList () {
    console.log(videoDataDetails)
 
    
    // <Form/>
    
    // function formatTime (timestamp) {
    //     const date = new Date(timestamp);
    //     // console.log(date)
    //     return date.toLocaleDateString();
    // }

    return(
        <div className="comment-container">
            {videoDataDetails.map(detail => {
                return (
                    <>
                  
                    <CommentsCard
                    key={detail.comments[0].id}
                    name={detail.comments[0].name}
                    comment={detail.comments[0].comment}
                    timestamp={detail.comments[0].timestamp}
                    />
                    </>
                )
            })}
        </div>
    )
}
