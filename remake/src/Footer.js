import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import "./Footer.css"
export class Footer extends Component {
    render() {
        return (
            <div className="fo">
                <div className="folo">
                <img src="logo.png" className="wii"></img>
                <h1 className="hhh1"><Link to="/" style={{textDecoration:'none',color:'white'}}>Lifeline</Link></h1>
                </div>
                <div className="down">
                <div className="block">
                    <h2 className="just">Information</h2>
                    <ul>
                    <li><h4><Link to="/about-us" style={{textDecoration:'none',color:"whitesmoke"}}>About US</Link></h4></li>
                    <li><h4><Link to="/terms-condition" style={{textDecoration:'none',color:"whitesmoke"}}>Terms & Condition</Link></h4></li>
                    <li><h4><Link to="/privacy" style={{textDecoration:'none',color:"whitesmoke"}}>Privay Policy</Link></h4></li>
                    </ul>
                </div>
                <div className="block">
                    <h2 className="specal">Contact US</h2>
                    <ul>
                    <li><h4 className="me">Address:Vel Tech</h4></li>
                    <li><h4 className="me">Email:lifeline@gmail.com</h4></li>
                    <li><h4 className="me">Phone:+91 6383548303</h4></li>
                    </ul>
                </div>
                <div className="block">
                    <h2 className="sociallink">Social Links</h2>
                    <div className="ic">
                    <a><SocialIcon  classname="social" url="https://www.instagram.com/" network="instagram" bgColor="#ff3300" style={{ height: 40, width: 40 }}/></a><br></br>
                    <a><SocialIcon classname="social" url="https://www.facebook.com/" network="facebook" bgColor="#ff3300" style={{ height: 40, width: 40 }} /></a><br></br>
                    <a><SocialIcon classname="social" url="https://twitter.com/login?lang=en" network="twitter" bgColor="#ff3300" style={{ height: 40, width: 40 }} /></a><br></br>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Footer
