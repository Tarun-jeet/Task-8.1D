import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Post from './components/Post';
import FindQuestion from './components/FindQuestion';
import './App.css'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/post">Post</Link>
        <Link to="/find-question">Find Question</Link>
        
      </nav>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/find-question" element={<FindQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
