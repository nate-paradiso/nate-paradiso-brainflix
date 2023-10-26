import { CurrentVideo } from '../../components/Component/CurrentVideo/CurrentVideo';
import { Form } from '../../components/Component/Form/Form';
import { CommentCardList } from '../../components/Component/CommentCardList/CommentCardList';
import { VideoCardList } from '../../components/Component/VideoCardList/VideoCardList';
import { VideoDetails } from '../../components/Component/VideoDetails/VideoDetail';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';

const VideoPlayerPage = () => {

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }

  const { videoIdData } = useParams();
  // const [ videoDataId, setVideoDataId] = useState ([])
  const [ videoData, setVideoData] = useState ([])


  
  useEffect(() => {
    const fetchVideoId = async () => {
      // if (videoIdData.length > 0) {
      const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${videoIdData ? videoIdData : videoIdData[0].id }?api_key=b83df1dc-dac4-4015-afac-d72c99d85694`);
      console.log(response);
      // setVideoData(response.data);
      // console.log(videoData[0].id)
      // }
      
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

  return (
    <>
    {/* added a ternary to the entire body to check for axios data and if not then state loading... */}
    {videoData ?  <>
    <header >
     <CurrentVideo
    videoIdData={videoIdData} 
    videoData={videoData}
     />
   </header>
   <main className="main">
     <section className="main__comments">
       <VideoDetails
       formatTime={formatTime}
       videoIdData={videoIdData} 
       videoData={videoData}
       />
       <Form/>    
       {/* <CommentCardList
       formatTime={formatTime}
       videoData={videoData}
       /> */}
     </section>  
    <VideoCardList
      videoData={videoData}
      setVideoData={setVideoData}  
      videoIdData={videoIdData} 
      /> 
   </main> </> : <p>"loading..."</p> }
   </>
  )
}

export default VideoPlayerPage