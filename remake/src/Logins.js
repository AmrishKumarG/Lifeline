import React, { Component } from 'react'
import firebase from './Firebase';
import { Link, Redirect } from 'react-router-dom';
import log from './viedo/log.mp4';
import './Login.css';

export class Logins extends Component {
    constructor(){
        super();
        this.setvalue=this.setvalue.bind(this);
        this.logmein=this.logmein.bind(this);
        this.authlist=this.authlist.bind(this);
        this.state={
            Email:'',
            Password:'',
            islogged:false
        }
    }
    setvalue(e){
        this.setState({[e.target.name]:e.target.value});
    }
    logmein = e =>{
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.Email, this.state.Password).then((user)=>{
            this.authlist();
        this.setState({[this.state.islogged]:true});
        alert("Login sucess");
        }).catch(function(error){
            console.log(error);
            alert("Wrong Password or Account Does Not Exist");
        })
          
    }
    componentDidMount(){
        this.authlist();
    }

    authlist(){
        firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    this.setState({[this.state.islogged]:true});
                    this.state.islogged=true;
                }
        });
    }
    render() {
        return(<div>{this.state.islogged?<Redirect push to="/bloodbrowser"/>:
            <div className="coversic">
                 <video autoPlay muted loop width="100%" height="100%" className="lovi"
               style={{position:"absolute",
               width:"100%",
               left:"50%",
               top:"50%",
               bottom:"0%",
               height:"100%",
               objectFit:"cover",
               transform:"translate(-50%,-50%)",
               zIndex:"-1"}}>
                    <source src={log} type="video/mp4"/>                  
                </video>
                <a href="/"><img src="logo.png" className="wi21"></img></a>
                    <div className="overlayl"></div>
                    <div className="login-box">
               <h1>Login</h1>
                <div className="textbox">
                <i className="fas fa-user"></i>
                <input type="email" placeholder="Email-ID" onChange={this.setvalue} value={this.state.Email} name="Email" ></input>
                </div>

               <div className="textbox">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" onChange={this.setvalue} value={this.state.Password} name="Password"></input>
                </div>
                <div className="forgot">
                <Link to="/Forgotpassword" style={{textDecoration:'none',color:'yellow'}}><p>Forgot Password?</p></Link>
                </div>
                <Link to="/bloodbrowser" style={{textDecoration:'none'}}><input type="button" onClick={this.logmein} className="btn" value="Sign in"></input></Link>
                <div className="logsign">
                <p>Don't have an account ? <Link to="/registration" style={{textDecoration:'none',color:'yellow'}}>Signup</Link></p>
                </div>
                </div>
                </div>
                }</div>
        )
    }
}

export default Logins
