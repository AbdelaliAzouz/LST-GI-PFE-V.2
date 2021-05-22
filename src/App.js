import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Accueil from "./components/Accueil/Accueil";
import Description1 from "./components/Description/Description1";
import Description2 from "./components/Description/Description2";
import Footer from './components/Footer/Footer';


const App = () => {  
  
    return(
    <div className="App" >

      <Navbar />
      <Accueil />
      <Description1/>
      <Description2/>
      <Footer/>
    </div >
    )
}



export default App;

                  