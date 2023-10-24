
import { NavBar } from './components/Component/Navbar/Navbar';
import './App.scss';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Upload } from './pages/Upload/Upload';
import { HomePage } from './pages/HomePage/HomePage';
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';
import axios from 'axios';

function App() {

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }
  const [ videoData, setVideoData] = useState ([])
  // const apiEndpoint = "https://project-2-api.herokuapp.com/videos?api_key=b83df1dc-dac4-4015-afac-d72c99d85694"
  
  useEffect(() => {
    const fetchVideo = async () => {
      const response = await axios.get("https://project-2-api.herokuapp.com/videos?api_key=b83df1dc-dac4-4015-afac-d72c99d85694");
      console.log(response);
      setVideoData(response.data);
    }
    fetchVideo();
  }, [])

  
  // const handleVideoData = (id) => {
  //   setVideoData(id)
  // }
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage 
        formatTime={formatTime}
        videoData={videoData}
        setVideoData={setVideoData} 
        />} />
        <Route path="/upload" element={<Upload />} /> 
        <Route path="/video/videoId" element={<VideoPlayerPage 
         formatTime={formatTime}
         videoData={videoData}
        setVideoData={setVideoData}  />} />
       </Routes>
       </BrowserRouter>
  )
}

export default App;