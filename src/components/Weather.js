import React, { useState } from 'react';
import axios from 'axios';
import './weather.css';  // Assuming you will create a separate CSS file for styles

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiKey = 'b41ec3be35c7dac8aabbc21ba253137a';

    const getWeather = async (url) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(url);
            setWeatherData(response.data);
        } catch (err) {
            setError('City not found');
        } finally {
            setLoading(false);
        }
    };

    const fetchWeatherByCity = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        getWeather(url);
    };

    const fetchWeatherByLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
                getWeather(url);
            }, (error) => {
                setError('Unable to retrieve your location');
            });
        } else {
            setError('Geolocation is not supported by this browser');
        }
    };

    return (
        <>
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
                    <div style={{ marginLeft: '650px', fontFamily: 'sans-serif' }}>
                        <h1>Live Weather</h1>
                        <div className="weather-container">
                            <input 
                                type="text" 
                                value={city} 
                                onChange={(e) => setCity(e.target.value)} 
                                placeholder="Enter city name" 
                            />
                            <button onClick={fetchWeatherByCity}>Get Weather</button>
                            <button onClick={fetchWeatherByLocation}>Use My Location</button>
                        </div>
                        {loading && <div className="loading">Loading...</div>}
                        {error && <div className="error">{error}</div>}
                        {weatherData && (
                            <div className="weather-info">
                                <h2>{weatherData.name}</h2>
                                <p>{weatherData.weather[0].description}</p>
                                <p>Temperature: {weatherData.main.temp}°C</p>
                                <p>Humidity: {weatherData.main.humidity}%</p>
                                <p>Wind: {weatherData.wind.speed} m/s</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Weather;
