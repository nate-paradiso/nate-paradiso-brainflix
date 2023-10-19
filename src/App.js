
import { NavBar } from './components/Component/Navbar/Navbar';
import { CurrentVideo } from './components/Component/CurrentVideo/CurrentVideo';
import { Form } from './components/Component/Form/Form';
import { CommentCardList } from './components/Component/CommentCardList/CommentCardList';
import { VideoCardList } from './components/Component/VideoCardList/VideoCardList';
import { CurrentVideoDetails } from './components/Component/VideoDetails/VideoDetail';
import './App.scss';
import { useState } from 'react';


function App() {

  
  const [selectedVideoId, setSelectedVideo] = useState("84e96018-4022-434e-80bf-000ce4cd12b8")

  const handleSelectVideo = (id) => {
    setSelectedVideo(id)
  }
  return (
    <div className="App">
    <NavBar/>
    <CurrentVideo
    selectedVideoId={selectedVideoId}
    />
    <CurrentVideoDetails
    selectedVideoId={selectedVideoId}
    />
    <div className="main">
      <div className="main__comments">
        <Form/>    
        <CommentCardList
        selectedVideoId={selectedVideoId}
        />
      </div>      
      <VideoCardList
      selectedVideoId={selectedVideoId}
      handleSelectVideo={handleSelectVideo}
      />
    </div>
    
    </div>
  )
}

export default App;