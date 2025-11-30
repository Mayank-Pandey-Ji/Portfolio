import Greet from './pages/Greet'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import {BrowserRouter , Routes , Route , Navigate } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className='App ' >
      <Routes>
        <Route path='/' element = {<Greet/>} />
        <Route path='/home' element = {<Home/>} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/project' element = {<Project/>} />

      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
