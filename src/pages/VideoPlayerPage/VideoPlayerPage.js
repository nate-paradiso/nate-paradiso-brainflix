import { CurrentVideo } from '../../components/Component/CurrentVideo/CurrentVideo';
import { Form } from '../../components/Component/Form/Form';
import { CommentCardList } from '../../components/Component/CommentCardList/CommentCardList';
import { VideoCardList } from '../../components/Component/VideoCardList/VideoCardList';
import { VideoDetails } from '../../components/Component/VideoDetails/VideoDetail';

const VideoPlayerPage = (formatTime, selectedVideoId, handleSelectVideo) => {
  return (
    <>
    <header >
     <CurrentVideo
     selectedVideoId={selectedVideoId}
     />
   </header>
   <main className="main">
     <section className="main__comments">
       <VideoDetails
       formatTime={formatTime}
       selectedVideoId={selectedVideoId}
       />
       <Form/>    
       <CommentCardList
       formatTime={formatTime}
       selectedVideoId={selectedVideoId}
       />
     </section>  
     <VideoCardList
     selectedVideoId={selectedVideoId}
     handleSelectVideo={handleSelectVideo}
     />    
   </main>
   </>
  )
}

export default VideoPlayerPage