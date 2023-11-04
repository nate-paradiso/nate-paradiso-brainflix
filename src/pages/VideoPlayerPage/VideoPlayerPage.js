import { CurrentVideo } from '../../components/Component/CurrentVideo/CurrentVideo';
import { Form } from '../../components/Component/Form/Form';
import { CommentCardList } from '../../components/Component/CommentCardList/CommentCardList';
import { VideoCardList } from '../../components/Component/VideoCardList/VideoCardList';
import { VideoDetails } from '../../components/Component/VideoDetails/VideoDetail';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';

const VideoPlayerPage = () => {
  const { videoId } = useParams();
  const [ videos, setVideos] = useState ([])
  const [ videoFromId, setVideoFromId] = useState (null)


  useEffect(() => {
    const fetchVideos = async () => {
      try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/videos`);
      setVideos(response.data);
      } catch(error){
        console.log(error);
      }
    };
    fetchVideos();
  }, [])


  useEffect(() => {
    const fetchFromVideoId = async (videoId) => {
      try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/videos/${videoId}`);
      setVideoFromId(response.data);
      } catch(error){
        console.log(error);
      }
    };
    fetchFromVideoId(videoId || "84e96018-4022-434e-80bf-000ce4cd12b8");
  }, [videoId]);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }


  return (
    <>
    {/* added a ternary to the entire body to check for axios data, if not there, then state loading... */}
    {videos ?  <>
    <header >
     <CurrentVideo
    videoFromId={videoFromId}
     />
   </header>
   <main className="main">
     <section className="main__comments">
       <VideoDetails
       formatTime={formatTime}
       videoFromId={videoFromId}
       />
       <Form
       setVideoFromId={setVideoFromId}
       />    
       <CommentCardList
       formatTime={formatTime}
       videoFromId={videoFromId}
       />
     </section>  
    <VideoCardList
      videos={videos}
      videoId={videoId}
      /> 
   </main> </> : <p>"loading..."</p> }
   </>
  )
}

export default VideoPlayerPage