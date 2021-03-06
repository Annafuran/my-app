import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import Popup from 'react-popup';
//import types from './types.json';
import './app.css';
import {
   BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



let mySpecialPopup = Popup.register({
    content: <div> Welcome to tea app!
	<p>This tea-app will give a tea recommendetion depending on your current mood.</p>
	Press start to get started, this will take you to the mood page. 
	There you simply click on the mood that youre currently in. 
	By clicking on the "right arrow"-button a tea-recommendetion that suits your mood will be displayed.
    </div>,
	
	className: 'pop_up',
	buttons: {
        right: ['ok'
		]
    }
	
});

function Poppis() {
	
	Popup.queue(mySpecialPopup)
	
}




const Home = () => (
  <div id="home">
		<div id="wrapper"> 
    <div id="wrappertop">
       <div id= "infobox" onClick = {Poppis}>i

	   
	   </div>
	   
    </div>
			<h1>TEA APP</h1>
			
			

      <img id="logo" src={require('./Logo.png')} />
		  <div id="introtext">
        <h2>What tea mood are you in? We'll help you find just the perfect tea for you!</h2>
      </div>
    </div>

		<div id="wrapperlow">
    <p> </p>
			<div>
			  <Link id="StartLink" to="mood"> START </Link>
			
			
			</div>
			
      
		</div>
  </div>
)



class mood extends Component {
	
	constructor() {
		super();
		
		this.state = {
			
			mood : null
			
		};
		
	}
	
	knapp(ngt){
		if (ngt == "")
		{
			console.log("nope");
		}
		else
		{
			console.log("Hello " + ngt);
			this.setState({ mood: ngt });
			
			
		}
		
	
		// {this.knapp.bind(this)}
	}
	
	render() {
		let linkContent = null; 
		
		// här kan man skapa variabler/konstanter
		if(this.state.mood != null)
		{
			linkContent = ( <div id="forward">
			<Link to={
			{
			pathname: '/tea',
			mood: this.state.mood,
			
			}}
			><img id="arrow" src={require('./arrowright.png')} /></Link> 
		
			</div>)
			}
		else { 
			linkContent = ( 
			
			<div id="forward" className = "disabled"> 
			<Link to={{}}
			>
			
			<img id="arrow" src={require('./arrowright.png')} /></Link> 
			
			</div>)
		
		}
		
		
		return(
			
			<div id="home">
				<div id="wrappertop">

					<div id= "infobox" onClick = {Poppis}>i</div>
				</div>
					<div id="wrapper2"> 
						
						<h2>How are you feeling right now? Pick one mood below</h2>	
			
			  <div id="allmoods">
			
				  <div id="firstcol">
					  <button id="button1" name="mood" type ="submit" value="happy" onClick={ () => this.knapp("happy") }><h3> HAPPY</h3></button>
					  <button id="button1" name="mood" type ="submit" value="sad" onClick={ () => this.knapp("sad") }><h3> SAD</h3> </button>
					  <button id="button1" name="mood"  type ="submit" value="stressed" onClick={ () => this.knapp("stressed") }><h3> STRESSED </h3></button>
					
					  </div>
				  <div id="secondcol">
					  <button id="button1" name="mood" type ="submit" value="festive" onClick={ () => this.knapp("festive") }><h3>FESTIVE</h3> </button>
					  <button id="button1" name="mood" type ="submit" value="angry" onClick={ () => this.knapp("angry") }><h3>ANGRY</h3> </button>
					  <button id="button1" name="mood" type ="submit" value="sweet" onClick={ () => this.knapp("sweet") }><h3>SWEETISH</h3></button>
			  
				  </div>
				  <div id="thirdcol">
					  <button id="button1" name="mood"  type ="submit" value="sleep" onClick={ () => this.knapp("sleep") }><h3> SLEEPY</h3> </button>
					  <button id="button1" name="mood"  type ="submit" value="energy" onClick={ () => this.knapp("energy") }><h3> TIRED</h3> </button>
					  <button id="button1" name="mood" type ="submit" value="sick" onClick={ () => this.knapp("sick") }> <h3>SICK</h3></button>
				  </div>
				 
			
			</div>


			
			<p id="demo"></p>

			
			<div id="navigator">
			{linkContent}
				  <div id="backward">
					  <Link id="button" to="Home"><img id="arrow" src={require('./arrowleft.png')} /></Link>
			  
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
				<div id="wrapper3"> 
				<div id="wrappertop">
				</div>
					<h1>The perfect tea for you is</h1>
					<img id="logo" src={require('./Lemon.png')} />
						<div id="introtext">
							<h3> Lemon </h3>
							<h2>If you are feeling angry, orange or lemon tea can boost up your mood and reduce the anger. 
							With its strong and fresh flavour, not only will the taste but the scent itself calm you down.</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="backtomoods" to="mood"> <img id="arrow" src={require('./arrowleft.png')} /> </Link>
			   
			</div>
      
				</div>
			</div>

		);
			
		}
		
		//HAPPY
		if(x == "happy"){
			
			return(
		
			<div id="home">
				<div id="wrapper3"> 
					<div id="wrappertop">	
					</div>
						<h1>The perfect tea for you is</h1>

							<img id="logo" src={require('./Chai.png')} />
						
						<div id="introtext">
							<h3> Chai Tea</h3>
							<h2>Happy is a feeling you don't want to chase away but rather a feeling you want to maintain for as long as you can. 
							Chai tea is flavoured with a blend of spices that will warm you up inside and out. It will keep you happy or even uplift your joyful feeling. 
</h2>
						</div>
				</div>

				<div id="wrapperlow">
					<p> </p>
					<div id="button">
			   			<Link id="backtomoods" to="mood"> <img id="arrow" src={require('./arrowleft.png')} /> </Link>
					</div>
      
				</div>
			</div>

		);
			
		}
		//STRESSED
		if(x == "stressed"){
			
			return(
		
			<div id="home">
				<div id="wrapper3"> 
				<div id="wrappertop">
				</div>
					<h1>The perfect tea for you is</h1>
					<img id="logo" src={require('./Camomille.png')} />
					<div id="introtext">
						<h3> Chamomile tea</h3>
						<h2>Chamomile tea is one of the best teas to drink when you are feeling stressed and anxious. 
						It is naturally caffeine-free and has a mild and slightly sweet 
						taste which fit very well when you want to calm yourself down.</h2>
					</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="backtomoods" to="mood"> <img id="arrow" src={require('./arrowleft.png')} /> </Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		//FESTIVE
		if(x == "festive"){
			
			return(
		
			<div id="home">
				<div id="wrapper3"> 
				<div id="wrappertop">
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./cinnamon.png')} />
						<div id="introtext">
							<h3> Cinnamon </h3>
							<h2>Christmas has a tendency to bring a very festive feeling to us all. 
							If you want to keep the holiday spirit as high as possible, a cup of cinnamon tea can help you with that. 
							Just the scent itself brings you a warm and joyful feeling that reminds you of Christmas.</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="backtomoods" to="mood"> <img id="arrow" src={require('./arrowleft.png')} /> </Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		//SAD
		if(x == "sad"){
			
			return(
		
			<div id="home">
				<div id="wrapper3"> 
				<div id="wrappertop">
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./Rooibos.png')} />
						<div id="introtext">
							<h3> Rooibos tea </h3>
							<h2>Rooibos tea is naturally caffeine-free but it is still a full bodied tea with a really rich flavour. It does not have a calming nor
							 a bracing effect which makes it suitable when you're feeling sad and just want something flavourful that can uplift your mood just a bit. </h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="backtomoods" to="mood"> <img id="arrow" src={require('./arrowleft.png')} /> </Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		
		//SWEETTOOTH
		if(x == "sweet"){
			
			return(
		
			<div id="home">
				<div id="wrapper3"> 
				<div id="wrappertop">
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./strawBerry.png')} />
						<div id="introtext">
							<h3>Berry teas</h3>
							<h2>If you have the urge for something sweet, a berry-tea can fulfill your need. 
							A berry-tea is sweet both in scent and taste and you can choose between lots of different berry-flavours that will give you the sweetness you are looking for.
							</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="backtomoods" to="mood"> <img id="arrow" src={require('./arrowleft.png')} /> </Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		
		//NEED SLEEP
		if(x == "sleep"){
			
			return(
		
			<div id="home">
				<div id="wrapper3"> 
				<div id="wrappertop">
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./lavender.png')} />
						<div id="introtext">
							<h3>Lavender</h3>
							<h2>Lavender tea is the best tea to induce sleep. With its anxiolytic and relaxant properties, a cup of lavender tea before bedtime can help
							 you get an undisturbed night of sleep and give you a refreshed feeling in the morning!</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="backtomoods" to="mood"> <img id="arrow" src={require('./arrowleft.png')} /> </Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		
		//NEED ENERGY
		if(x == "energy"){
			
			return(
		
			<div id="home">
				<div id="wrapper3"> 
				<div id="wrappertop">
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./BlackTea.png')} />
						<div id="introtext">
							<h3>Black tea</h3>
							<h2>The best tea to drink if you want to give yourself a real boost of energy is black tea. 
							Black tea contains natural stimulants like caffeine which can help enhance your energy level and allows you to stay awake and alert throughout the day. 
							</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			   <Link id="backtomoods" to="mood"> <img id="arrow" src={require('./arrowleft.png')} /> </Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		
		//SICK
		if(x == "sick"){
			
			return(
		
			<div id="home">
				<div id="wrapper3"> 
				<div id="wrappertop">
				</div>
					<h1>The perfect tea for you</h1>
					<img id="logo" src={require('./GingerTea.png')} />
						<div id="introtext">
							<h3> Ginger tea</h3>
							<h2>Ginger is known for its medicinal effects and therefore drinking ginger tea can be a great help when you are not feeling well. 
							It contains anti-inflammatory properties and provides a feeling of comfort and warmth, which can help boost up your wellbeing.</h2>
						</div>
				</div>

			<div id="wrapperlow">
				<p> </p>
			<div id="button">
			  <Link id="backtomoods" to="mood"> <img id="arrow" src={require('./arrowleft.png')} /> </Link>
			</div>
      
				</div>
			</div>

		);
			
		}
		
		return (		
		<div className='disabled'> This webpage is broken </div>
		);		
	}
}

class App extends Component {
	
	 constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
	
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
		<Popup className = "mm-popup" />
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
