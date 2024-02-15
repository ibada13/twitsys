import React from 'react';
import Req from './Req';
import { Home } from './home/Home';
let App = () => { 
  return (
    <div className=' h-100 text-center' >
      <div className='h-25'>
          <h1 className='text-danger'>hello</h1>
      </div>
      <div>
          <Home />
      </div>
    </div>
    
  )
}
export default App;
