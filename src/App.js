import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import PageNotFound from './pages/pagenotfound.js';
import Colortheme from './pages/Colortheme';
import TodoApp from './pages/TodoApp';


function App() {
  return (
    <>
      <div className='header-nav'>
        <Router>
          <div className="navbar">
            <Link to="/">Home</Link>&nbsp;&nbsp;  
            <Link to="/about">About</Link>&nbsp;&nbsp;
            <Link to="/colortheme">Color Theme</Link>
            <Link to="/todoapp">TodoApp</Link>
          </div>
          <Routes>
              <Route path="/" element={<Home />} ></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path='*' element={<PageNotFound />}></Route>
              <Route path='/colortheme' element={<Colortheme />}></Route>
              <Route path='/todoapp' element={<TodoApp />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;