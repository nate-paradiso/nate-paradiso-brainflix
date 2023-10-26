
import { NavBar } from './components/Component/Navbar/Navbar';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Upload } from './pages/Upload/Upload';
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';

function App() {

  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<VideoPlayerPage />} />
        <Route path="/upload" element={<Upload />} /> 
        <Route path="/video/:videoId" element={<VideoPlayerPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;