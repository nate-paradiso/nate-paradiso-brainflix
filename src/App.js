
import { NavBar } from './components/Component/Navbar/Navbar';
import './App.scss';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Upload } from './pages/Upload/Upload';
import { HomePage } from './pages/HomePage/HomePage';

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
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage 
        formatTime={formatTime}
        selectedVideoId={selectedVideoId}
        handleSelectVideo={handleSelectVideo} 
        />} />
        <Route path="/upload" element={<Upload />} />
        {/* <Route path="/video/:videoId" element={<CurrentVideo />} /> */}
      </Routes>
      </BrowserRouter>
    // {/* <header >
    //   <CurrentVideo
    //   selectedVideoId={selectedVideoId}
    //   />
    // </header>
    // <main className="main">
    //   <section className="main__comments">
    //     <VideoDetails
    //     formatTime={formatTime}
    //     selectedVideoId={selectedVideoId}
    //     />
    //     <Form/>    
    //     <CommentCardList
    //     formatTime={formatTime}
    //     selectedVideoId={selectedVideoId}
    //     />
    //   </section>  
    //   <VideoCardList
    //   selectedVideoId={selectedVideoId}
    //   handleSelectVideo={handleSelectVideo}
    //   />    
    // </main> */}
  )
}

export default App;