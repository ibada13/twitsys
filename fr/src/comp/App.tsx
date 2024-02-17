import React from 'react';

import { Home } from './home/Home';
import Test from './Test';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/home' index element={<Home />} />
        <Route path='/api' element={ <Test />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
