import React, { Component } from 'react'
import './index.css';

export class Hesder extends Component {
    render() {
        return (
            <div>
                <ul className="opop">
                    <li><img src="logo.png" className="wi"></img></li>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Blood</li>
                    <li>Contact Us</li>
                    <span className="ii">
                    <li>Login</li>
                    <li>Register</li></span>
                </ul>
            </div>
        )
    }
}

export default Hesder
