import React, { Component } from 'react'
import './Forgotpassword.css';
import log from './viedo/log.mp4';
import firebase from './Firebase';
import { Redirect, useHistory,Link } from 'react-router-dom';
export class Forgotpassword extends Component {
    constructor(){
        super();
        this.forgot=this.forgot.bind(this);
        this.setvalue=this.setvalue.bind(this);
        this.state={
            Email:'',
            val:false
        }
    }
    setvalue(e){
        this.setState({[e.target.name]:e.target.value});
    }
    forgot= e =>{
        var auth=firebase.auth();
        if(this.state.Email!=""){
            auth.sendPasswordResetEmail(this.state.Email).then(function(){
                window.alert("Reset link sented to your mail");
            }).catch(function(error){
                window.alert(error);
            })
        }else{
            window.alert("Enter the mail Id");
        }
    }
    render() {
        return (
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
               <h1>Reset Password</h1>
                <div className="textbox">
                <i style={{paddingLeft:"8px",paddingTop:"3%"}} class="fas fa-envelope"></i>
                <input type="email" placeholder="Email-ID" onChange={this.setvalue} value={this.state.Email} name="Email" ></input>
                </div>
                <Link to="/login" style={{textDecoration:'none'}}><input type="button" onClick={this.forgot} className="btn" value="Sign in"></input></Link>
                </div>
                </div>
        )
    }
}

export default Forgotpassword
