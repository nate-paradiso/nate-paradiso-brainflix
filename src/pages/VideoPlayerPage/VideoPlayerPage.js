import { CurrentVideo } from '../../components/Component/CurrentVideo/CurrentVideo';
import { Form } from '../../components/Component/Form/Form';
import { CommentCardList } from '../../components/Component/CommentCardList/CommentCardList';
import { VideoCardList } from '../../components/Component/VideoCardList/VideoCardList';
import { VideoDetails } from '../../components/Component/VideoDetails/VideoDetail';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';

const VideoPlayerPage = () => {

  // const formatTime = (timestamp) => {
  //   const date = new Date(timestamp);
  //   return date.toLocaleDateString();
  // }

  const { videoId } = useParams();
  // const [ videoDataId, setVideoDataId] = useState ([])
  const [ videoData, setVideoData] = useState ([])


  
  useEffect(() => {
    const fetchVideoId = async () => {
      const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${videoId ? videoId : "84e96018-4022-434e-80bf-000ce4cd12b8" }?api_key=b83df1dc-dac4-4015-afac-d72c99d85694`);
      console.log(response);
      // setVideoData(response.data);
    }
    fetchVideoId();
  }, [])

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await axios.get("https://project-2-api.herokuapp.com/videos?api_key=b83df1dc-dac4-4015-afac-d72c99d85694");
      console.log(response);
      setVideoData(response.data);
    }
    fetchVideo();
  }, [])

  if (videoData) console.log(videoData)
  return (
    <>
    {videoData ?  <>
    <header >
     {/* <CurrentVideo
    setVideoDataId={setVideoDataId} 
     /> */}
   </header>
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
   </main> </> : <p>"loading..."</p> }
   </>
  )
}

export default VideoPlayerPage