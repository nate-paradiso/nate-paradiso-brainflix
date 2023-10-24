
import { NavBar } from './components/Component/Navbar/Navbar';
import { CurrentVideo } from './components/Component/CurrentVideo/CurrentVideo';
import { Form } from './components/Component/Form/Form';
import { CommentCardList } from './components/Component/CommentCardList/CommentCardList';
import { VideoCardList } from './components/Component/VideoCardList/VideoCardList';
import { VideoDetails } from './components/Component/VideoDetails/VideoDetail';
import './App.scss';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Upload } from './pages/Upload/Upload';



function App() {

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }

  const [selectedVideoId, setSelectedVideo] = useState("84e96018-4022-434e-80bf-000ce4cd12b8")

  const handleSelectVideo = (id) => {
    setSelectedVideo(id)
  }
  return (


    <BrowserRouter>

    <header >
      <NavBar/>
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
    {/* <Upload/> */}
   </BrowserRouter>
  )
}

export default App;