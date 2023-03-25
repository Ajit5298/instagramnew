import './App.css';
import { Routes, Route } from 'react-router-dom'
import Regiater from './components/Register';
import HomePage from './components/HomePage';
import Login from './components/Login';
import AddPost from './components/AddPost';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div>
        <Routes>
        <Route excat path='/register' element={<Regiater/>} />
        <Route excat path='/login' element={<Login/>} />
        <Route excat path='/addPost' element={<AddPost/>} />
        <Route excat path='/footer' element={<Footer/>} />
        </Routes>

      </div>
    </>
  );
}

export default App;