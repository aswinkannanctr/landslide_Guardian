import React, { useEffect, useState } from 'react';
import './warning.css';
import axios from 'axios';
import img1 from '../Assets/img1.png'
const Warning = () => {
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

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const formatCreatedAt = (createdAt) => {
        const date = new Date(createdAt);
        return date.toLocaleString();
    };

    return (
        <>
            <header className="header" role="banner">
                <h1 className="logo">
                    <a href="/home"><span>LandSlide Guardian</span></a>
                </h1>
                <div className="nav-wrap">
                    <nav className="main-nav" role="navigation">
                        <ul className="unstyled list-hover-slide">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/lnsde">Land slide Data</a></li>
                            <li><a href="/wthr">Weather Broadcast</a></li>
                            <li><a href="/bot">Chatbot</a></li>
                            <li><a href="/wrn">Warning System</a></li>
                        </ul>
                    </nav>
                    <ul className="social-links list-inline unstyled list-hover-slide">
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Google+</a></li>
                        <li><a href="#">GitHub</a></li>
                    </ul>
                </div>
            </header>
            <div className="content">
                <div className="side-div">
                    <div className="Warncontainer">
                        <div className="Warnheader">
                            <div style={{ marginLeft: '700px', fontFamily: 'sans-serif' }}>
                                <h1>Warning System</h1>
                                {data && data.feeds && data.feeds[0] && (
                                    <>
                                        {data.feeds[0].field1 >= 600 && (
                                            <div className="advice-card">
                                                <div className="advice-header">
                                                    <img src="https://i.postimg.cc/HkQf9cKj/img1.png" alt="Advice Icon" />
                                                </div>
                                                <div className="advice-body">
                                                    <h1>Low Risk</h1>
                                                    <ul>
                                                        <p>Although the risk is low,  </p>
                                                        <p>staying vigilant and taking preventive measures</p>
                                                        <p>can help mitigate potential damage</p>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                        {data.feeds[0].field1 >= 550 && data.feeds[0].field1 < 600 && (
                                            <div className="advice-card2">
                                                <div className="advice-header2">
                                                    <img src="https://i.postimg.cc/tRz3HXxw/Screenshot-2024-06-25-at-11-38-30-PM.png" alt="Advice Icon" />
                                                </div>
                                                <div className="advice-body2">
                                                    <h1>Moderate Risk</h1>
                                                    <ul>
                                                        <p>Taking the precautions seriously can help to</p>
                                                        <p>reduce the impact and damage caused by potential landslides </p>
                                                        <p>under moderate risk conditionss</p>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                        {data.feeds[0].field1 >= 500 && data.feeds[0].field1 < 550 && (
                                            <div className="advice-card3">
                                                <div className="advice-header3">
                                                    <img src="https://i.postimg.cc/SxR3M14Q/Screenshot-2024-06-25-at-11-41-10-PM.png" alt="Advice Icon" />
                                                </div>
                                                <div className="advice-body3">
                                                    <h1>High Risk</h1>
                                                    <ul>
                                                        <p>Taking the precautions seriously is essential to </p>
                                                        <p>protect lives and minimize damage</p>
                                                        <p>during high-risk landslide conditions</p>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                        {data.feeds[0].field1 >= 450 && data.feeds[0].field1 < 500 && (
                                            <div className="advice-card4">
                                                <div className="advice-header4">
                                                    <img src="https://i.postimg.cc/15sfswQr/Screenshot-2024-06-25-at-11-42-58-PM.png" alt="Advice Icon" />
                                                </div>
                                                <div className="advice-body4">
                                                    <h1>Very High Risk</h1>
                                                    <ul>
                                                        <p>Taking the precautions seriously is</p>
                                                        <p>critical to safeguard lives and reduce damage</p>
                                                        <p>during very high-risk landslide conditions</p>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Warning;
