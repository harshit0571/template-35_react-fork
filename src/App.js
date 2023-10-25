import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import { Aboutus } from './Aboutus';
import { Blog } from './Blog';
import { Login } from './Login';
import { Portfolio } from './Portfolio';
import { Contactus } from './Contactus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contactus/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
