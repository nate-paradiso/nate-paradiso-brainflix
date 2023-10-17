
import {NavBar} from './components/Component/Navbar/Navbar';
import {CurrentVideo} from './components/Component/CurrentVideo/CurrentVideo';
import {Form} from './components/Component/Form/Form';
import {VideoCardList} from './components/Component/VideoCardList/VideoCardList';
import './App.scss';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <CurrentVideo/>
    <Form/>
    <VideoCardList/>
    
    </div>
  )
}

export default App;
