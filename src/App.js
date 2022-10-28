import './App.css';
import FetchApi from './Component/FetchApi';
import Navbars from './Component/Navbar';

import News from './Component/News/News.js';


function App() {
  return (
    <div className="App">
      <Navbars />
      <News />
      <FetchApi />
    </div>
  );
}

export default App;
