import React, { useEffect, useState } from 'react';
import { test } from './home/Reqs/test';
import { AxiosResponse } from 'axios';
function Test() {
  const [httpResponse, setHttpResponse] = useState('');
    const requestData = {
      key1: 'value1',
  };
  useEffect(() => {
    const mycallback = (Response: AxiosResponse<any,any>) => { 
      console.log(Response.data)
      
      setHttpResponse(Response.data.x)
    }
  
  test('/api/', requestData,mycallback);
    },[])

  return (
    <div className='text-center'>
      <h1>React App</h1>
      <p>HTTP Response from Server:</p>
      <p>{httpResponse}</p>
    </div>
  );
}

export default Test;
