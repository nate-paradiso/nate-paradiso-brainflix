import { CurrentVideo } from '../../components/Component/CurrentVideo/CurrentVideo';
import { Form } from '../../components/Component/Form/Form';
import { CommentCardList } from '../../components/Component/CommentCardList/CommentCardList';
import { VideoCardList } from '../../components/Component/VideoCardList/VideoCardList';
import { VideoDetails } from '../../components/Component/VideoDetails/VideoDetail';

export const HomePage = ({formatTime, videoData, setVideoData }) => {
  return (
    <>
     {/* <header >
      <CurrentVideo
      videoData={videoData}
      />
    </header> */}
    <main className="main">
      {/* <section className="main__comments">
        <VideoDetails
        formatTime={formatTime}
        videoData={videoData}
        />
        <Form/>    
        <CommentCardList
        formatTime={formatTime}
        videoData={videoData}
        />
      </section>   */}
      <VideoCardList
      videoData={videoData}
      setVideoData={setVideoData} 
      />    
    </main>
    </>
  )
}
