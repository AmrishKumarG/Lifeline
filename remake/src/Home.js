import React, { Component} from 'react'
import Footer from './Footer';
import power from './viedo/ti.mp4';
import { Link } from 'react-router-dom'
import Drop from './Drop';
import firebase from './Firebase';
export default class Home extends Component {
    constructor(){
        super();
        this.authlist=this.authlist.bind(this);
        this.state={
            Color:Boolean,
            islogg:false
        };
    }
componentDidMount(){
    window.addEventListener('scroll',this.backChange);
    document.getElementById("bu").addEventListener("mouseover",this.mouseOver);
    document.getElementById("bu").addEventListener("mouseout",this.mouseOut);
    this.authlist();
}
mouseOver=()=>{
    document.getElementById("bu").style.backgroundColor="yellow";
}
mouseOut=()=>{
    document.getElementById("bu").style.backgroundColor="rgba(167, 4, 4, 0.925)";
}
    backChange = () =>{
        if(window.scrollY>=453){
            this.setState({Color:false});
        }else{
            this.setState({Color:true});
        }
    }
    authlist(){
        firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    this.setState({[this.state.islogg]:true});
                    this.state.islogg=true;
                }
        });
    }
    render() {
        return (
            <div className="all">
                <div className={this.state.Color ? "rem2":"rem2 sc"}>
                <a href="/"><img src="logo.png" className="wi21"></img></a>
                <h1><Link to="/" style={{textDecoration:'none',color:'rgba(219, 43, 43, 0.87)'}}>Home</Link></h1>
                <h1><Link to="/about-us" style={{textDecoration:'none',color:'rgba(219, 43, 43, 0.87)'}}>About Us</Link></h1>
                <h1><Link to="/contact-us" style={{textDecoration:'none',color:'rgba(219, 43, 43, 0.87)'}}>Contact Us</Link></h1>
                <h1><Link to="/bloodbrowser" style={{textDecoration:'none',color:'rgba(219, 43, 43, 0.87)'}}>Blood</Link></h1>
                <div className="pppppppppppp"></div>
                {console.log(this.state.islogg)}{this.state.islogg?
                <Drop/>:<h1><Link to="/registration" style={{textDecoration:'none',color:'rgba(219, 43, 43, 0.87)'}}>Sign Up</Link></h1>}
                </div>
                <div>
                <button className="bu" id="bu"><Link to="/login" style={{textDecoration:'none',color:'rgba(255, 255, 255, 0.884)'}}>Let's Be The God</Link></button>
                </div>
                    <video autoPlay loop muted width="100%">
                        <source src={power} type="video/mp4"/>
                  </video>
                  <div>
                  <h1 className="le">What we do?</h1>
                  <div className="i">
                  <img src="2.jpeg" className="aa bb"></img>
                  <p className="lec">We enable the Hospitals and other people to find a quick donor of any blood group using our website by providing donor details. we also collect user details who comes to the website in search of blood donor and add them to donors list so that the data will increase and the chance of saving the patient increases.</p>
                  </div>
                  <h1 className="re">Why we do?</h1>
                  <div className="i">
                  <p className="rec">In India, around 5 cr unit of blood is required out of which we get around 2.5 cr unit of blood. thus many people die just because of lack of blood.so we wanted to build an efficient blood bank system so the chance of saving the patient and waiting time decreases.</p>
                  <img src="2.png" className="aa"></img>
                  </div>
                  <h1 className="le">How we do?</h1>
                  <div className="i">
                  <img src="3.png" className="aa bb"></img>
                  <p className="lec">We collect details of the Donor's list from every hospital and even if any user wants himself to be a donor he will register on our site, we add his details to the donor's list. we also add the details of the person to the donor's list who has come to the website in search of blood Donor.</p>
                  </div>
                  </div>
                  <Footer/>
            </div>
        )
    }
}
