import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Definitions from './pages/Definitions';
import Error from './pages/Error';
import Modifications from './pages/Modifications';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Mymenu from './pages/Mymenu';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mymenu" element={<Mymenu />} />
        <Route path="/definitions" element={<Definitions />} />
        <Route path="/modifications" element={<Modifications />} />
        <Route path="/account" element={<Navigation />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;