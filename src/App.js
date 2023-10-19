
import {NavBar} from './components/Component/Navbar/Navbar';
import {CurrentVideo} from './components/Component/CurrentVideo/CurrentVideo';
import {Form} from './components/Component/Form/Form';
import { CommentCardList } from './components/Component/CommentCardList/CommentCardList';
import {VideoCardList} from './components/Component/VideoCardList/VideoCardList';
import './App.scss';
import videoDataDetails from "./data/video-details.json";
import { useState } from 'react';


function App() {
  const defaultVideo = videoDataDetails.find(video =>{
    return video.id === "84e96018-4022-434e-80bf-000ce4cd12b8"
    }) 
  const [selectedVideo, setSelectedVideo] = useState(
    defaultVideo
  )
    console.log(selectedVideo)

  
  return (
    <div className="App">
    <NavBar/>
    <CurrentVideo
    videoImage={selectedVideo.image}
    />
    <div className="main">
      <div className="main__comments">
        <Form/>    
        <CommentCardList/>
      </div>      
      <VideoCardList
      setSelectedVideo={setSelectedVideo}
      />
    </div>
    
    </div>
  )
}

export default App;
