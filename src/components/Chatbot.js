import React, { useState } from 'react';
import './chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            const newMessage = { text: input, sender: 'user' };
            setMessages([...messages, newMessage]);
            setInput('');

            // Simulate a bot response
            setTimeout(() => {
                const botMessage = { text: `You said: ${input}`, sender: 'bot' };
                setMessages(prevMessages => [...prevMessages, botMessage]);
            }, 1000);
        }
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
                <div className="chat-container">
                    <div className="chat-header">
                        <h1>Chatbot</h1>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type a message..."
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
