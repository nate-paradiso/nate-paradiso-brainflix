
import {NavBar} from './components/Component/Navbar/Navbar';
import {CurrentVideo} from './components/Component/CurrentVideo/CurrentVideo';
import {Form} from './components/Component/Form/Form';
import { CommentCardList } from './components/Component/CommentCardList/CommentCardList';
import {VideoCardList} from './components/Component/VideoCardList/VideoCardList';
import './App.scss';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <CurrentVideo/>
    {/* <Form/> */}
    <CommentCardList/>
    <VideoCardList/>
    
    </div>
  )
}

export default App;
