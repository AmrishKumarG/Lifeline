import React, { Component } from 'react'
import './About.css';
import Footer from './Footer';

export class About extends Component {
    render() {
        return (
            <div>
                <a href="/"><img src="logo.png" className="wi211"></img></a>
                <div className="aboutflex">
                    <div>
                    <img src="30051116789.jpg" className="sam"></img>
                    </div>
                    <div className="abouthead">
                    <h1>About Lifeline</h1>
                    <p className="mman">Each day, thousands of people just like you provide compassionate care to those in need. Our network of generous donors, volunteers and employees share a mission of preventing and relieving suffering, here at home and around the world.</p>
                <p className="mman">We roll up our sleeves and donate time, money and blood. We learn or teach life saving skills so our communities can be better prepared when the need arises. We do this every day because the Red Cross is needed every day.</p>
                    </div>
                </div>
                <h1 className="abouthead1">Our Team</h1>
                <div className="group">
                    <div className="myteam">
                        <img className="picture" src="Amrish.png"></img>
                        <h1 className="amrisho">Amrish Kumar.G</h1>
                    </div>
                    <div className="myteam">                    
                        <img className="picture" src="seran.jpeg"></img>
                        <h1 className="normal">Seranilavan.S</h1>
                    </div>
                    <div className="myteam">                    
                        <img className="picture" src="vasanth.jpeg" ></img>
                        <h1 className="normal">S.Vasanth</h1>
                    </div>
                    <div className="myteam">                    
                        <img className="picture" src="vghji.jpg"></img>
                        <h1 className="normal">P.Nikhil Kumar</h1>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About
