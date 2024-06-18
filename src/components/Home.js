import React from 'react';
import './home.scss'
const Home = () => {
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
                        {/* <li><a href="#">CodePen</a></li> */}
                    </ul>
                </div>
            </header>
            <div className="content">
                <div className="side-div">
                    < div style={{ marginLeft: '650px', fontFamily: 'sans-serif' }}>
                        <h1>LandSlide Guardian Project</h1>


                    </div>
                    <p style={{ width: '70%', marginLeft: '380px' }}>
                        The Landslide Guardian Project is a comprehensive initiative designed to enhance safety and mitigate risks in landslide-prone areas.
                        <span>This project focuses on leveraging technology to provide early warnings, safe routes, and real-time weather updates to help protect communities and individuals from potential landslide hazards.</span>
                        Overall, the Landslide Guardian Project is a vital tool for safeguarding lives and property in areas vulnerable to landslides, making it an indispensable resource for enhancing public safety and disaster preparedness.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Home;
