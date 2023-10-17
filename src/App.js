
import {NavBar} from './components/Component/Navbar/Navbar';
import {CurrentVideo} from './components/Component/CurrentVideo/CurrentVideo';
import {Comments} from './components/Component/Comments/Comments';
// import {VideoCardList} from './components/Component/VideoCardList';

import './App.scss';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <CurrentVideo/>
    <Comments/>
    {/* <VideoCardList/> */}

    
    </div>
  );
}

export default App;
