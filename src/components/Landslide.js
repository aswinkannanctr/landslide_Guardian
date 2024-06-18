import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Landslide = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://api.thingspeak.com/channels/2509827/feeds.json?api_key=ESOQ662OYSDMM2L3&results=1'
      );
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    return date.toLocaleString(); 
};

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 3000); 

    return () => clearInterval(interval);
  }, []); 
  const handleRefreshClick = () => {
    fetchData();
  };

  return (
    <div>
      <header className="header" role="banner">
        <h1 className="logo">
          <a href="/home"> <span>LandSlide Guardian</span></a>
        </h1>
        <div className="nav-wrap">
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
              <li><a href="/home">Home</a></li>
              <li><a href="/lnsde">Land slide Data</a></li>
              <li><a href="/wthr">Weather Broadcast</a></li>
              <li><a href="/bot">Chatbot</a></li>
               
            </ul>
          </nav>
          <ul className="social-links list-inline unstyled list-hover-slide">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Google+</a></li>
            <li><a href="#">GitHub</a></li>
                        <li><a href="/">Logout</a></li>

          </ul>
            
        </div>
      </header>
      <div className="content">
        <div className="side-div">
          <div style={{ marginLeft: '750px', fontFamily: 'sans-serif' }}>
            <h1>LandSlide Data</h1>
            {data ? (
              <div>
                <p>Latest entry:</p>
                <p>Field 1: {data.feeds[0].field1}</p>
                <p>Generated at: {formatCreatedAt(data.feeds[0].created_at)}</p>
                {/* <p>Field 2: {data.feeds[0].field2}</p> */}
              </div>
            ) : (
              <p>Loading...</p>
            )}
            <button style={{cursor:"pointer"}} onClick={handleRefreshClick}>Refresh Data</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landslide;
