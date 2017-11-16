import React, { Component } from 'react';
//import types from './types.json';
import './app.css';
import {
   BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div id="home">
		<div id="wrapper"> 
			<p>TEA APP</p>
			
		</div>

		<div id="wrapperlow">
    <p> </p>
			
			<Link id="button" to="mood">Mood</Link>
			
		</div>
	
  </div>
)

const mood = () => (
  <div id="home">
		<div id="wrapper2"> 
			<p>Pick a mood</p>
				
			
      <div id="allmoods">
          <div id="firstcol">
              <button id="button1" name="mood" type ="submit" value="happy"> Hej </button>
              <button id="button1" name="mood" type ="submit" value="happy"> Hej </button>
              <button id="button1" name="mood" type ="submit" value="happy"> Hej </button>
			
		      </div>
          <div id="secondcol">
              <button id="button1" name="mood" type ="submit" value="happy"> Hej </button>
              <button id="button1" name="mood" type ="submit" value="happy"> Hej </button>
              <button id="button1" name="mood" type ="submit" value="happy"> Hej </button>
      
          </div>
          <div id="thirdcol">
              <button id="button1" name="mood" type ="submit" value="happy"> Hej </button>
              <button id="button1" name="mood" type ="submit" value="happy"> Hej </button>
              <button id="button1" name="mood" type ="submit" value="happy"> Hej </button>
      
          </div>
    

    </div>
    <div id="navigator">
        <div id="forward">
              <Link id="button" to="info">Forward</Link>
      
          </div>
          <div id="backward">
              <Link id="button" to="Home">Backward</Link>
      
          </div>
    </div>
    </div>
	
  </div>
)

const info = () => (
  <div id="home">
    <div id="wrapper2"> 
      <p>INFO</p>
      
    

    <div id="infotext">

    </div>
      
      <div id="navigator">
          <div id="backward">
              <Link id="button" to="mood">Backward</Link>
      
          </div>
      </div>
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
      <Route exact path="/info" component={info}/>
    </div>
  </Router>
   
   

    );
  }
}

export default App;
