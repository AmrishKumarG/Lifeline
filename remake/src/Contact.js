import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './contact.css'
export class Contact extends Component {
    render() {
        return (
            <div>
                <img src="1.jpeg" className="imgg"></img>
                <a href="/"><img src="logo.png" className="wi21"></img></a>
                <div className="overlay1"></div>
                <div className="join">
                <div className="mmap1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4157.918363376345!2d80.09967263157287!3d13.175357927505106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d82ff11a9cf%3A0x3304dc9aed0f444a!2sVel%20Tech%20Rangarajan%20Dr.Sagunthala%20R%26D%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1604495822614!5m2!1sen!2sin" width="500" height="350" ></iframe>
                </div>
                <div className="formc">
                <h1 className="akcen1">Contact Us</h1>
                <input className="vk" type="text" placeholder="Name"/><br></br>
                <input className="vk"  type="text" placeholder="Phone Number"/><br></br>
                <input className="vk" type="text" placeholder="Subject" /><br></br>
                <textarea className="vkk" placeholder="Message"></textarea><br/>
                <button className="buuu">Send</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Contact
