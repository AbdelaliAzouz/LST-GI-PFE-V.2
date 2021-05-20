/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState, useEffect, Component} from 'react';
import Container from "../Global/Container";
import Button from "../Global/Button/Button";
import PrincipalBackground from "../../images/principalBackground.jpg";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'


const Hero = () => {

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

    return (
        <section className="hero" css={styles}>
            <div className="overlay"></div>
            <Container>
                <div className="heroText">
                    <h2 style={{paddingTop:'70px'}}></h2><br></br>
                    <h1 style={{textShadow: '2px 2px 4px #0C0650'}}>RESEARCH PLATEFORME</h1>
                    <span>
                        <form >
                            <div>
                                <label htmlFor="exampleInputEmail1" className="form-label" style={{float:'left', color:'#09024D'}}>Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <div>
                                <label htmlFor="exampleInputPassword1" className="form-label" style={{float:'left', color:'#09024D'}}>Password</label>
                                <input type="Password" className="form-control" id="exampleInputPassword1"></input>
                            </div>
                                <button className="btn btn-primary" type="button" contenu="Sign in"  uiConfig={uiConfig} firebaseAuth={firebase.auth()}>sign in</button>
                        </form>
                    </span>
                </div>
                <div className="SignInGoogle">
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> 
                </div>
            </Container>
            <div css={styles2}>
            <Particles css={styleParticles}
                params={{
                    "particles": {
                        "number": {
                            "value": 25
                        },
                        "size": {
                            "value": 3
                        },
                        "line_linked": {
            				"shadow": {
            					"enable": true,
            					"color": "#0E046B",
            					"blur": 0.5
            				},
                            "color": {
                                "value": "#005496"
                            }
            			}
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                    
                }} 
                
  />
            </div>
        </section>
    )
}

const styles2 = css`
  width: 60%;
  min-height: 80vh;
  color: blue;
  `

const styleParticles = css`
  width: 100%;
  @media(max-width: 868px) {
        width:0%;
    }

  @media(min-width: 869px) {
        width:100%;
    }

  `
  
const styles = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url('${PrincipalBackground}') no-repeat center/cover;
  position: relative;
  .overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
  }
    .container {
      display: flex;
      flex-direction: column;
      align-items:flex-start;
      color: #fff;
      z-index: 4;
      max-width: 1200px;
        .heroText {
            padding-left:40px;
            padding-top:60px;
            line-height: 2rem;
            color:blue;
            h2 {
            font-size: 2rem;
            }
            h1 {
                padding-bottom:35px;
                font-size: 3rem;
            } 
            span {
                padding: 80px 0 0 0;
                padding-top: 80px;
                font-size: 1.3rem;
            }
        }
        .btn {
            margin: 10px 0 0 0;
            padding-left : 70px;
            padding-right : 70px;
            background-color:#1d128a;
            border:none;
        }
        .SignInGoogle{
            margin-left:15px;
        }
      
    }

    @media(max-width: 568px) {
        .container {
            .heroText {
                line-height:1;
                h2 {
                    font-size: 2.4rem;
                }
                h1 {
                    font-size: 3.5rem;
                }
                span {
                    font-size: 1.1rem;
                    padding: 30px 0;
                }

            }
        }
    }
    @media (min-width: 569px) and (max-width: 1008px){
        .container {
            .heroText {
                line-height:1;
                h2 {
                    font-size: 3rem;
                }
                h1 {
                    font-size: 5rem;
                }
                span {
                    padding: 30px 0;
                }
            }
        }
    }
`

export default Hero;