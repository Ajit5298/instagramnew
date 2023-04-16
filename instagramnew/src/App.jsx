import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import HomePage from './components/HomePage';
import Login from './components/Login';
import AddPost from './components/AddPost';
import AddStory from './components/AddStory';
import Profile from './components/Profile';
import Search from './components/Search';
function App() {
  return (
    <>
      <div>
        <Routes>
        <Route excat path='/register' element={<Register/>}/>
        <Route excat path='/login' element={<Login/>} />
        <Route excat path='/addPost' element={<AddPost/>} />
        <Route excat path='/addStory' element={<AddStory/>}/>
        <Route excat path='/profile' element={<Profile/>}/>
        <Route excat path='/homePage' element={<HomePage/>}/>
        <Route excat path='/search' element={<Search/>}/>
        </Routes>

      </div>
    </>
  );
}

export default App;