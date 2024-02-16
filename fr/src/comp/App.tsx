import React from 'react';
import Req from './Req';
import { Home } from './home/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/home' index element={<Home />} />

      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
