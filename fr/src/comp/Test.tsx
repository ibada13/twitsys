import React, { useEffect, useState } from 'react';
import { test } from './home/Reqs/test';
function Test() {
  const [httpResponse, setHttpResponse] = useState('');
    const requestData = {
      key1: 'value1',
      key2: 'value2',
  };
  useEffect(() => {

  
  test('/api/', requestData);
    },[])

  return (
    <div>
      <h1>React App</h1>
      <p>HTTP Response from Server:</p>
      <pre>{httpResponse}</pre>
    </div>
  );
}

export default Test;
