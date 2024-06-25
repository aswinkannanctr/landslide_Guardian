
// import './App.css';

// // import Banner from './Banner';
// // import Navbar from './Navbar';
// // import Row from './Row';
// // import { requests } from './request';


// function App() {
//   return (
//     <div className="App">
     

//      {/* <Row isposter={true} title={"trending movies"} fetchUrl={requests.fetchTrending}>  </Row>
//      <Row title={"Netflix Original movies"} fetchUrl={requests.fetchNetflixOriginals}>  </Row>
//      <Row title={"Top Rated movies"} fetchUrl={requests.fetchTopRated}>  </Row>
//      <Row title={"Action movies"} fetchUrl={requests.fetchActionMovies}>  </Row>
//      <Row title={" Comedy movies"} fetchUrl={requests.fetchComedyMovies}>  </Row>
//      <Row title={" Horror movies"} fetchUrl={requests.fetchHorrorMovies}>  </Row>
//      <Row title={"Romance  movies"} fetchUrl={requests.fetchRomanceMovies}>  </Row>
//      <Row title={" Documentry movies"} fetchUrl={requests.fetchDocumentaries}>  </Row> */}
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Home from './components/Home';
import Landslide from './components/Landslide';
import Weather from './components/Weather';
import Chatbot from './components/Chatbot';
import Warning from './components/Warning';

// Your App component code

function App() {
  return (
    <Router>
      <div className="App">
    
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/lnsde" element={<Landslide/>} />
          <Route path="/wthr" element={<Weather/>} />
          <Route path="/bot" element={<Chatbot/>} />
          <Route path="/wrn" element={<Warning/>} />

        </Routes>
      </div>
    </Router>
  );


}

export default App;
