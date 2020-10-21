import React, { Component } from 'react'
import pl from './viedo/log.mp4';
import './login.css';
export class Login extends Component {
    render() {
        return (
            <div className="backkkk">
                <div>
                    <video autoPlay muted loop width="100%" height="100%" className="lovi">
                    <source src={pl} type="video/mp4"/>                  
                    </video>  
                    <img src="logo.png" className="wi21"></img>
                    <div className="overlay"></div>
                    <div className="logcen">
                    <h1>Login</h1>
                    <input className="kk" placeholder="Email"></input><br></br>
                    <input className="kk" placeholder="Password"></input><br></br>
                    <button className="bulog">Login</button>
                    <div className="fex">
                    <h1>Dont't have Account ? </h1>
                    <h2 className="regg">Register Now</h2>
                    </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Login
