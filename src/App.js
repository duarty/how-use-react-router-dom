
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './pages/registerform'
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Register/>}/>

          </Routes>
          <Routes>
            <Route path="/home:id" element={<Home/>}/>
            
          </Routes>
        
      </BrowserRouter>
  </div> 
  );
}

export default App;
