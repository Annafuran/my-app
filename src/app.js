import React, { Component } from 'react';
//import types from './types.json';
import './app.css';
import {
   BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
		<div id="wrapper"> 
			<p>MASSA INFO</p>
			
		</div>

		<div id="wrapperlow">
			<p>LÅG INFO</p>
			<Link id="button" to="mood">Mood</Link>
			
		</div>
	
  </div>
)

const mood = () => (
  <div>
		<div id="wrapper2"> 
			<p>MASSA INFO</p>
				
			<Link id="button" to="Home">Home</Link>
			
		</div>
	
  </div>
)

class App extends Component {
	
  render() {

    return (

   /*   <div id="root">
   <head>
      <meta charset = "utf-8" />
      <title>TE-Appen</title>
		<link rel="stylesheet" type="text/css" href="index.css"></link>
   </head>*/
  
  <Router>
    <div>
      <hr/>

      <Route exact path="/home" component={Home}/>
	   <Route exact path="/mood" component={mood}/>
      
    </div>
  </Router>
   
   

    );
  }
}

export default App;
