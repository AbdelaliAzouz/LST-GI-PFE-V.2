import React, { useState, useEffect, Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Accueil from "./components/Accueil/Accueil";
import Description1 from "./components/Description/Description1";
import Description2 from "./components/Description/Description2";
import Footer from './components/Footer/Footer';
import firebase from './components/utils/FirebaseConfig'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Route, BrowserRouter as Router} from 'react-router-dom';


const App = () => {  
    const [isSignedIn, setSignedIn] = useState(false); 

    const uiConfig = { 
      signInFlow: "popup", 
      signInOptions: [ 
        firebase.auth.GoogleAuthProvider.PROVIDER_ID, ], 
      callbacks: { signInSuccess: () => false 
      },
};

useEffect(() => { //Cette fonction remplace le components 'componentDidMount'
    firebase.auth().onAuthStateChanged((user) => {
      setSignedIn(!!user);
      console.log(user);
    });
}, []);

/* componentDidMount = () => { 
  firebase.auth().onAuthStateChanged(user => { 
   this.setState({ isSignedIn: !!user }) 
   console.log("user", user) 
 }) 
}  */


    return(
    <div className="App" >

      <Navbar />
      <Accueil />
      {isSignedIn ? (
                        
                     <span>  {/* convertir le <span> en un component nommé <main/> par exemple pour reduire la taille de code */}
                     <div>Signed In!</div>

                     <button onClick={() => firebase.auth().signOut()}> Sign out! </button> 

                     <h1>Welcome {firebase.auth().currentUser.displayName}</h1> 

                     <img alt="profile picture" src={firebase.auth().currentUser.photoURL} /> 

                    </span> 
                    ) : ( 
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> 
                )} 
      <Description1/>
      <Description2/>
      <Footer/>
    </div >
    )
}



export default App;

                  