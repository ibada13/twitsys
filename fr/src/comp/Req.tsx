import React, { useEffect, useState } from 'react';

function Req() {
  const [httpResponse, setHttpResponse] = useState('');

  useEffect(() => {
    // Function to make the HTTP request
    const fetchData = async () => {
      try {
        // Make a GET request to the server
        const response = await fetch('http://localhost:8080');
        
        // Check if the request was successful (status code 200)
        if (response.ok) {
          // Parse the response as text or JSON based on your server's response type
            const data = await response.text();
            console.log(data);
          setHttpResponse(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    // Call the function to make the request when the component mounts
    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>React App</h1>
      <p>HTTP Response from Server:</p>
      <pre>{httpResponse}</pre>
    </div>
  );
}

export default Req;
