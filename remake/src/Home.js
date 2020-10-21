import React, { Component} from 'react'
import Footer from './Footer';
import power from './viedo/ti.mp4';
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            Color:Boolean
        };
    }
componentDidMount(){
    window.addEventListener('scroll',this.backChange);
    document.getElementById("bu").addEventListener("mouseover",this.mouseOver);
    document.getElementById("bu").addEventListener("mouseout",this.mouseOut);
}
mouseOver=()=>{
    document.getElementById("bu").style.backgroundColor="teal";
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
    render() {
        return (
            <div>
                <div className={this.state.Color ? "rem2":"rem2 sc"}>
                <img src="logo.png" className="wi2"></img>
                <h1 className="gpgpg">Home</h1>
                <h1 className="gpgpg">About Us</h1>
                <h1 className="gpgpg">Contact Us</h1>
                <h1 className="gpgpg">Blood</h1>
                </div>
                <div>
                <button className="bu" id="bu">Let's Be God</button>
                </div>
                    <video autoPlay loop muted width="100%">
                        <source src={power} type="video/mp4"/>
                  </video>
                  <div>
                  <h1 className="le">What we do?</h1>
                  <div className="i">
                  <img src="2.jpeg" className="aa bb"></img>
                  <p className="lec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                  <h1 className="re">Why we do?</h1>
                  <div className="i">
                  <p className="rec">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                  <img src="2.png" className="aa"></img>
                  </div>
                  <h1 className="le">How we do?</h1>
                  <div className="i">
                  <img src="3.png" className="aa bb"></img>
                  <p className="lec">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                  </div>
                  </div>
                  <Footer/>
            </div>
        )
    }
}
