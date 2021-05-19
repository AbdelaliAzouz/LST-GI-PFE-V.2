import React, { useState, useEffect, Component} from 'react';
import Navbar from "../../Navbar/Navbar";
import Footer from '../../Footer/Footer';
import firebase from '../../utils/FirebaseConfig'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Route, Router } from 'react-router';



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



    return(
    <div className="App" >

      <Navbar />

      {isSignedIn ? (

                    

                    {/* <span>  convertir le <span> en un component nommé <main/> par exemple pour reduire la taille de code
                    <div>Signed In!</div>

                    <button onClick={() => firebase.auth().signOut()}> Sign out! </button> 

                    <h1>Welcome {firebase.auth().currentUser.displayName}</h1> 

                    <img alt="profile picture" src={firebase.auth().currentUser.photoURL} /> 

                    </span> */} ) : ( 
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> 
                )} 
     
      <Footer/>
    </div >
    )
}



export default App;
