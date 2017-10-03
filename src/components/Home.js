import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TweenLite from 'gsap';
import classNames from 'classnames';

// eslint-disable-next-line
import scrollTo from '../../node_modules/gsap/ScrollToPlugin';
import logo from '../assets/img/LogoAD2.png';
import scuto from '../assets/img/scuto1.jpg';
import kubo from '../assets/img/kubo2.jpg';
import opm from '../assets/img/opm2.jpg';
import thoy from '../assets/img/thoy2.jpg';
import pub from '../assets/img/pub1.jpg';
import back from '../assets/img/back1.png';

import '../App.css';
import '../input.css';


const sidebarStyle = {
  visibility : 'visible',
  
}

const inputClasses = classNames('fl-input' );

function Warning(props) {
  return (
    <div className="label-danger" onClick={props.onClick}>
    Invalid Email
    </div>
  );
}
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {isEmail: true,isFirst : true};
  }
  
  componentDidMount(){
    ReactDOM.findDOMNode(this);
    
  }
  AboutMe() {
    TweenLite.to(window, 1, {scrollTo:"#content-1"});
  }
  Work() {
    TweenLite.to(window, 1, {scrollTo:"#content-3"});
  }
  Connect() {
    TweenLite.to(window, 1, {scrollTo:"#content-4"});
  }
  
  sendMail(){
    //test mode : http://localhost:3000/
    
    /*
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "name" :  this.refs.name.value,
      "email" : this.refs.email.value,
      "message" : this.refs.message.value
    })*/
    // prod mode : https://us-central1-api-anshor-dev.cloudfunctions.net/bigben
    
    if(this.state.isFirst===true){
      alert("Please Input your Name");
    }else if(this.state.isEmail===false){
      alert("Please Input with valid Email Address");
    }else{
      
      fetch('https://us-central1-api-anshor-dev.cloudfunctions.net/api1/?name='+this.refs.name.value+'&email='+ this.refs.email.value+'&message='+ this.refs.message.value, {})
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      alert("Thanks "+this.refs.name.value +". I will contact you soon");
      this.refs.name.value ="";
      this.refs.email.value ="";
      this.refs.message.value = "";
    })
    .catch((error) => {
      console.log(error);
      alert("Server Down");
    });
    
    
  }
}

emailValidator(){
  // eslint-disable-next-line
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var value = this.refs.email.value;
  console.log(re.test(value));
  // eslint-disable-next-line
  if(re.test(value) == false){
    this.setState({isEmail: false,isFirst: false});
  }else{
    this.setState({isEmail: true,isFirst: false});
  }
}
render() {
  const isEmail = this.state.isEmail;
  let warning = null;
  if (isEmail) {
    warning = null;
  } else {
    warning = <Warning  />;
  }
  
  
  return (
    <div className="container" onScroll= {this.scroll} >
   <div className="buttonSide" ><i className="fa fa-bars" aria-hidden="true"></i></div>
   <div className="sidebar" style={sidebarStyle}>
      <div className="sidebar-1" >
         <div>
            <a href="javascript:void(0)" onClick = {this.AboutMe}>
               <div> ABOUT</div>
               <svg xmlns="http://www.w3.org/2000/svg" width="120" height="15" viewBox="-52.5 0 120 15">
                  <path d="M13.79 5.677c.763-.763.996-1.854.703-2.818l-1.515 1.513-1.478-.396-.396-1.477L12.62.984c-.965-.293-2.055-.06-2.818.704-.764.764-.877 1.735-.507 2.626L7.718 5.888c-.023-.06-.057-.117-.106-.165L7.19 5.3c-.182-.18-.474-.18-.655 0l-.36.373-2.358-2.36-.128-.457h-.002c-.013-.095-.056-.187-.13-.26L1.493 1.092C1.313.913 1.075.857.963.97l-.52.52c-.112.112-.057.35.123.53l1.502 2.064c.074.073.167.117.262.13l.452.082L5.16 6.674l-.385.388c-.18.18-.18.474 0 .653l.422.424c.048.048.105.08.164.102l-3.586 3.583-.016.02c-.52.522-.52 1.364 0 1.886.52.52 1.358.52 1.878.005l.028-.02 3.25-3.264 3.35 3.355c.448.445 1.172.445 1.62-.002l1.384-1.383c.445-.447.445-1.173 0-1.62L9.91 7.444l1.254-1.26c.89.37 1.86.258 2.626-.506zM2.792 13.3c-.227.087-.48-.028-.564-.258-.085-.226.03-.48.256-.563.227-.087.48.027.564.255.086.226-.028.48-.256.565zm2.883-7.383c-.085.084-.224.084-.31 0L1.05 1.597l.14-.14c.056-.06.178-.03.272.063l1.814 1.525c.038.04.06.085.067.135.008.063.034.122.076.173l2.253 2.253c.087.087.087.226.002.31zm1.512.437l-.716.716-.443-.446.715-.715c.105-.106.274-.106.38 0l.065.064c.105.105.105.275 0 .38zm5.68 4.916c.203.205.203.54 0 .744l-.7.7L7.29 7.84c.218-.245.606-.224.856.03l2.863 2.86c.064.065.17.065.237 0 .064-.064.064-.172 0-.236l-2.86-2.86c-.256-.258-.278-.653-.024-.868l4.504 4.504z"></path>
                  <line fill="none" stroke="#000000" x1="-42.5" y1="7.25" x2="-4.5" y2="7.25"></line>
                  <line fill="none" stroke="#000000" x1="19.5" y1="7.25" x2="57.5" y2="7.25"></line>
               </svg>
               <div> Who Am I</div>
            </a>
         </div>
         <div>
         </div>
      </div>
      <div className="sidebar-2">
         <div>
            <a href="javascript:void(0)" onClick = {this.Work}>
               <div> Work </div>
               <svg xmlns="http://www.w3.org/2000/svg" width="120" height="15" viewBox="-52.5 0 120 15">
                  <path d="M4.182 13.166v.438h6.636v-.694H4.182M13.56 1.396H1.515c-.45 0-.816.326-.816.776v8.777c0 .448.366.917.816.917h3.61c.246.14.413.402.413.705l-.002.01h4l-.002-.01c0-.303.167-.565.413-.705h3.608c.45 0 .742-.47.742-.918V2.17c0-.45-.292-.776-.74-.776zm-.308 9.112h-.514c-.17 0-.31-.102-.31-.272 0-.17.14-.27.31-.27h.514c.17 0 .308.1.308.27s-.138.272-.308.272zM1.38 9.01V2.076h12.178V9.01H1.38z"></path>
                  <line fill="none" stroke="#000000" x1="-42.5" y1="7.25" x2="-4.5" y2="7.25"></line>
                  <line fill="none" stroke="#000000" x1="19.5" y1="7.25" x2="57.5" y2="7.25"></line>
               </svg>
               <div> Case Studies</div>
            </a>
         </div>
      </div>
      <div className="sidebar-3">
         <div className="sidebar-3-sub">
            <a href="javascript:void(0)" onClick = {this.Connect}>
               <div> Contact </div>
               <svg xmlns="http://www.w3.org/2000/svg" width="120" height="15" viewBox="-52.5 0 120 15">
                  <path d="M1.758,2.944c0.002,0,3.081-0.771,5.741-0.771c2.659,0,5.74,0.771,5.743,0.771c1.134,0.261,1.84,1.392,1.578,2.525 C14.629,6.3,13.972,6.9,13.188,7.06l-2.494-1.704c-0.048-0.269-0.042-0.551,0.023-0.834c0.038-0.165,0.095-0.321,0.167-0.467 C9.944,3.955,8.741,3.862,7.5,3.862c-1.24,0-2.443,0.092-3.383,0.193c0.072,0.146,0.13,0.302,0.168,0.467 c0.065,0.283,0.07,0.565,0.023,0.834L0.524,6.229c-0.16-0.221-0.279-0.477-0.344-0.76C-0.082,4.336,0.625,3.206,1.758,2.944z M10.031,4.206c0.523,2.1,1.761,3.917,3.44,5.177v3.444H1.529V9.383c1.679-1.261,2.916-3.078,3.439-5.177 c0.271-0.023,0.554-0.043,0.847-0.061v0.877h3.37V4.146C9.478,4.162,9.761,4.183,10.031,4.206z M10.102,8.49 c0-1.436-1.164-2.601-2.602-2.601c-1.437,0-2.601,1.166-2.601,2.601c0,1.437,1.164,2.603,2.601,2.603 C8.938,11.093,10.102,9.927,10.102,8.49z M9.185,8.49c0,0.931-0.754,1.686-1.685,1.686c-0.93,0-1.685-0.755-1.685-1.686 c0-0.93,0.754-1.685,1.685-1.685C8.431,6.806,9.185,7.561,9.185,8.49z"></path>
                  <line fill="none" stroke="#000000" x1="-42.5" y1="7.25" x2="-4.5" y2="7.25"></line>
                  <line fill="none" stroke="#000000" x1="19.5" y1="7.25" x2="57.5" y2="7.25"></line>
               </svg>
               <div>
                  Let's Connect
               </div>
            </a>
         </div>
      </div>
      <div className="notes">
         Copyright @Anshor Dev
      </div>
   </div>
   <div className="header">
   </div>
   
   <div className="title" style = { {backgroundImage: `url(${back})`} }>
   <img src={logo} className="App-logo" alt="logo" />
   <div className="title-big" >Ahsanul Intishor</div>
   <div  className="title-small">DEVELOPER  | HO CHI MINH CITY, VIETNAM</div>
   <div  className="title-small">First, Solve The Problem Then Write The Code </div>
</div>
<div className="content-1"  id="content-1" >
   <div>   I am a software engineer that loves solve a problem in the field of information technology. I always learn the latest technology and develop it. For me, the problem is not a burden but a challenge. I am trying to solve a problem with a different approach and expand the potential of the project with the latest technology.
   </div>
   <div>
      I am graduating with a Bachelors of Computer Science with a major in Informatics Engineering. Originally from Madiun,Indonesia but now residing in Ho Chi Minh,Vietnam , I'm looking to grow personally and professionally anywhere in the world.
   </div>
   <div>
      I want to be involved in projects that I can be proud of, join an amazing team and advance my development career. Take some time to look at my work, credentials and if you're interested in helping me make this happen, let's get in touch.
   </div>
</div>
<div className="content-2" >
   <div className="content-sub-resume">
      <a href="#resume" rel="noopener noreferrer">
         <i className="fa fa-3x fa-file" aria-hidden="true"></i>
         <div> Resume </div>
         <div>View Resume</div>
      </a>
   </div>
   <div className="content-sub-resume">
      <a  href="https://github.com/auronsan" target="_blank" rel="noopener noreferrer">
         <i className="fa fa-3x fa-github" aria-hidden="true"></i>
         <div> Github </div>
         <div>View Repository</div>
      </a>
   </div>
</div>
<div className="title heading" style = { {backgroundImage: `url(${back})`} }>
<div className="title-big">Work</div>
<div  className="title-small">A SHOWCASE OF DESIGN,
   DEVELOPMENT AND EXPERIMENTS
</div>
</div>
<div className="content-3"  id="content-3"  >
   <div className="content">
      <a href="http://www.scutojogja.com" target="_blank" rel="noopener noreferrer">
         <div className="content-overlay"></div>
         <img className="content-image" src={scuto} alt="scutojogja.com" />
         <div className="content-details fadeIn-right">
            <h3 className="content-title">ScutoJogja.com</h3>
            <p className="content-text">Freelance Project</p>
         </div>
      </a>
   </div>
   <div className="content">
      <a href="https://kuboseinz.co" target="_blank" rel="noopener noreferrer">
         <div className="content-overlay"></div>
         <img className="content-image" src={kubo} alt="kuboseinz.co" />
         <div className="content-details fadeIn-left">
            <h3 className="content-title">Kuboseinz.co</h3>
            <p className="content-text">Freelance Project</p>
         </div>
      </a>
   </div>
   <div className="content">
      <a href="https://opmlogistic.com/" target="_blank" rel="noopener noreferrer">
         <div className="content-overlay"></div>
         <img className="content-image" src={opm} alt="OpmLogistic.com" />
         <div className="content-details fadeIn-bottom">
            <h3 className="content-title">OpmLogistic.com</h3>
            <p className="content-text">Freelance Project</p>
         </div>
      </a>
   </div>
   <div className="content">
      <a href="https://thoyyibah-umroh.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
         <div className="content-overlay"></div>
         <img className="content-image" src={thoy} alt="Thoyyibah Safari" />
         <div className="content-details fadeIn-bottom">
            <h3 className="content-title">Thoyyibah Safari</h3>
            <p className="content-text">Freelance Project</p>
         </div>
      </a>
   </div>
   <div className="content">
      <a href="https://www.pubdot.com/pub.group" target="_blank" rel="noopener noreferrer">
         <div className="content-overlay"></div>
         <img className="content-image" src={pub} alt="Pub.Group" />
         <div className="content-details fadeIn-bottom">
            <h3 className="content-title">Pub.Group</h3>
            <p className="content-text">Front-end Developer</p>
         </div>
      </a>
   </div>
</div>
<div className="title heading" style = { {backgroundImage: `url(${back})`} }>
<div className="title-big">Contact</div>
<div  className="title-small">Currently available for contract or full-time work,
   and would love to hear from you
</div>
</div>
<div className="content-4" id="content-4" >
   <div className="contact">
      <div className="contact-value" >auronsanjr@gmail.com</div>
      <div  className="contact-value">+84 120 443 9008</div>
      <div  className="contact-value">Ho Chi Minh CIty, Vietnam </div>
      <div  className="contact-value"><a href="https://www.linkedin.com/in/auronsan/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
   </div>
   <div className="form" >
      <form >
         <div className="form-content">
            <div className='fl-input-container'>
               <input  className={inputClasses} type="text" ref="name" />
               <label className='fl-input-label' >Name</label>
               <span className='fl-input-bar'></span>
            </div>
         </div>
         {warning}
         <div className="form-content">
            <div className='fl-input-container'>
               <input   className={inputClasses}  type="text" ref="email"   onChange={this.emailValidator.bind(this)} />
               <label className='fl-input-label' >Email</label>
               <span className='fl-input-bar'></span>
            </div>
         </div>
         <div className="form-content">
            <div className='fl-input-container'>
               Message:
               <textarea ref="message" className={inputClasses}  type="text" style={{width: '100%'}} name="body" />
               <span className='fl-input-bar'></span>
            </div>
            <div className="form-content">
               <div><input className="button-sub" type="button" value="Submit" onClick={this.sendMail.bind(this)}/></div>
            </div>
         </div>
      </form>
   </div>
</div>
<div className="footer">
</div>
</div>
  );
}
}


export default HomeComponent;
