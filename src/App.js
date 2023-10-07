import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import { Aboutus } from './Aboutus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
