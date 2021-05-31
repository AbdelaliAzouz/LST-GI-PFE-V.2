import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import WelcomePage from "./components/WelcomPage/WelcomePage";
import Description1 from "./components/Description/Description1";
import Description2 from "./components/Description/Description2";
import Footer from './components/Footer/Footer';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import Accueil from './components/Pages/Accueil/Accueil';
import Articles from './components/Pages/Articles/Articles';

const App = () => {  
    return(
    <div className="App" >
    <Router>
      <Route exact path="/">
          <Navbar />
          <Articles/>
          <WelcomePage />
          <Description1/>
          <Description2/>
          <Footer/>
      </Route>
      <Route exact path="/Accueil" >
          <Accueil/>
      </Route>
    </Router>
    </div >
    );
};



export default App;

                  