import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h3>Home</h3>;
}

function About() {
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;