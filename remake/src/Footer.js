import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';

export class Footer extends Component {
    render() {
        return (
            <div className="fo">
                <div className="folo">
                <img src="logo.png" className="wii"></img>
                <h1>Lifeline</h1>
                </div>
                <div className="down">
                <div className="block">
                    <h3>Information</h3>
                    <ul>
                    <li><h4>About US</h4></li>
                    <li><h4>Terms & Condition</h4></li>
                    <li><h4>Privay Policy</h4></li>
                    </ul>
                </div>
                <div className="block">
                    <h3 className="specal">Contact US</h3>
                    <ul>
                    <li><h4>Address:Vel Tech</h4></li>
                    <li><h4>Phone:6383548303</h4></li>
                    <li><h4>Email:lifeline@gmail.com</h4></li>
                    </ul>
                </div>
                <div className="block">
                    <h3>Social Links</h3>
                    <div>
                    <SocialIcon network="instagram" bgColor="#ff5a01" />
                    <SocialIcon network="facebook" bgColor="#ff5a01" />
                    <SocialIcon network="twitter" bgColor="#ff5a01" />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Footer
