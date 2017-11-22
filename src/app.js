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
    <div id="wrappertop">
       <div id= "infobox">i</div>
    </div>
			<h1>TEA APP</h1>
      <img id="logo" src={require('./Logo.png')} />
		  <div id="introtext">
        <h2>What tea mood are you in? We'll help you find just the perfect tea for you!</h2>
      </div>
    </div>

		<div id="wrapperlow">
    <p> </p>
			<div id="button">
			   <Link id="StartLink" to="mood"> Start</Link>
			</div>
      
		</div>
	
  </div>
)


class mood extends Component {
	
	constructor() {
		super();
		
		this.state = {
			
			mood : ""
			
		};
		
	}
	
	knapp(ngt){
		
		console.log("Hello " + ngt);
		this.setState({ mood: ngt });
		
		// {this.knapp.bind(this)}
	}
	
	render() {
		
		// här kan man skapa variabler/konstanter
		
		return(
			
			<div id="home">
				<div id="wrapper2"> 
					<p>Pick a mood</p>
			

			
			  <div id="allmoods">
			
				  <div id="firstcol">
					  <button id="button1" name="mood" type ="submit" value="happy" onClick={ () => this.knapp("happy") }> happy </button>
					  <button id="button1" name="mood" type ="submit" value="sad" onClick={ () => this.knapp("sad") }> sad </button>
					  <button id="button1" name="mood"  type ="submit" value="stressed" onClick={ () => this.knapp("stressed") }> stressed </button>
					
					  </div>
				  <div id="secondcol">
					  <button id="button1" name="mood" type ="submit" value="festive" onClick={ () => this.knapp("festive") }> festive </button>
					  <button id="button1" name="mood" type ="submit" value="angry" onClick={ () => this.knapp("angry") }> angry </button>
					  <button id="button1" name="mood" type ="submit" value="sweet" onClick={ () => this.knapp("sweet") }> sweet </button>
			  
				  </div>
				  <div id="thirdcol">
					  <button id="button1" name="mood"  type ="submit" value="sleep" onClick={ () => this.knapp("sleep") }> sleep </button>
					  <button id="button1" name="mood"  type ="submit" value="energy" onClick={ () => this.knapp("energy") }> energy </button>
					  <button id="button1" name="mood" type ="submit" value="sick" onClick={ () => this.knapp("sick") }> sick </button>
				  </div>
				 
			
			</div>


			
			<p id="demo"></p>

			
			<div id="navigator">
				<div id="forward">	
					<Link id="button" to={{
						pathname: '/tea',
						mood: this.state.mood,
						
					}}>Forward</Link>             
				  </div>
				  <div id="backward">
					  <Link id="button" to="Home">Backward</Link>
			  
				  </div>
			</div>
			</div>
			
		  </div>
		
		);
		
	}
	
}



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


class Tea extends Component {
	
	
	
	render(){
		
		const x = this.props.location.mood;
		
		//ANGRY
		if(x == "angry"){
			
			return(
			<div id="home">
				<div id="wrapper"> 
				<div id="wrappertop">
					<div id= "infobox">i</div>
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./Lemon.png')} />
						<div id="introtext">
							<h2>What tea mood are you in? We'll help you find just the perfect tea for you!</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="StartLink" to="mood">Try again</Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		
		//HAPPY
		if(x == "happy"){
			
			return(
		
			<div id="home">
				<div id="wrapper"> 
				<div id="wrappertop">
					<div id= "infobox">i</div>
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./Chai.png')} />
						<div id="introtext">
							<h2>What tea mood are you in? We'll help you find just the perfect tea for you!</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="StartLink" to="mood">Try again</Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		//STRESSED
		if(x == "stressed"){
			
			return(
		
			<div id="home">
				<div id="wrapper"> 
				<div id="wrappertop">
					<div id= "infobox">i</div>
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./Camomille.png')} />
						<div id="introtext">
							<h2>What tea mood are you in? We'll help you find just the perfect tea for you!</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="StartLink" to="mood">Try again</Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		//FESTIVE
		if(x == "festive"){
			
			return(
		
			<div id="home">
				<div id="wrapper"> 
				<div id="wrappertop">
					<div id= "infobox">i</div>
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./cinnamon.png')} />
						<div id="introtext">
							<h2>What tea mood are you in? We'll help you find just the perfect tea for you!</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="StartLink" to="mood">Try again</Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		//SAD
		if(x == "sad"){
			
			return(
		
			<div id="home">
				<div id="wrapper"> 
				<div id="wrappertop">
					<div id= "infobox">i</div>
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./Rooibos.png')} />
						<div id="introtext">
							<h2>What tea mood are you in? We'll help you find just the perfect tea for you!</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="StartLink" to="mood">Try again</Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		
		//SWEETTOOTH
		if(x == "sweet"){
			
			return(
		
			<div id="home">
				<div id="wrapper"> 
				<div id="wrappertop">
					<div id= "infobox">i</div>
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./strawBerry.png')} />
						<div id="introtext">
							<h2>What tea mood are you in? We'll help you find just the perfect tea for you!</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="StartLink" to="mood">Try again</Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		
		//NEED SLEEP
		if(x == "sleep"){
			
			return(
		
			<div id="home">
				<div id="wrapper"> 
				<div id="wrappertop">
					<div id= "infobox">i</div>
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./lavender.png')} />
						<div id="introtext">
							<h2>What tea mood are you in? We'll help you find just the perfect tea for you!</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="StartLink" to="mood">Try again</Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		
		//NEED ENERGY
		if(x == "energy"){
			
			return(
		
			<div id="home">
				<div id="wrapper"> 
				<div id="wrappertop">
					<div id= "infobox">i</div>
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./BlackTea.png')} />
						<div id="introtext">
							<h2>What tea mood are you in? We'll help you find just the perfect tea for you!</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="StartLink" to="mood">Try again</Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		
		//SICK
		if(x == "sick"){
			
			return(
		
			<div id="home">
				<div id="wrapper"> 
				<div id="wrappertop">
					<div id= "infobox">i</div>
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./GingerTea.png')} />
						<div id="introtext">
							<h2>What tea mood are you in? We'll help you find just the perfect tea for you!</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="StartLink" to="mood">Try again</Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		
		return (
		
		<div> This webpage is broken </div>
		);
		
	
		
		
	}
}


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
	  <Route exact path="/tea" component={Tea}/>
    </div>
  </Router>
   
   

    );
  }
}

export default App;
