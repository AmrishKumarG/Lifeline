import React, { Component } from 'react'
import './Profile.css';
import firebase from './Firebase';
import im1 from './156310511.jpg';
import im2 from './logo.png';
import im3 from './vghji.jpg';
import im4 from './156387.jpg';
export class Profile extends Component {
    constructor({match}){
        super();
        this.brow=this.brow.bind(this);
        this.state={
                id:match.params.id,
                name:"",
                blood:"",
                Address:"",
                email:"",
                phone:"",
                city:""
        }
    }
    componentDidMount(){
        this.brow();
    }
    brow (){
        const re=firebase.database().ref(this.state.id);
        re.on("value",(snapshot)=>{
            let rr=snapshot.val();
            this.setState({name:rr.Name});
            this.setState({blood:rr.Blood});
            this.setState({Address:rr.Address});
            this.setState({email:rr.Email});
            this.setState({phone:rr.Phone});
            this.setState({city:rr.city});
        });
    }
    render() {
        return (
            <div className="Jagan">
                <img src={im1} className="somu"></img>
                <a href="/"><img src={im2} className="wi21"></img></a>
                <div className="magesh">
                <h3 className="santhosh">Donor Details</h3>
                    <table className="sankar1">
                    <tbody>
                        <tr>
                            <td className="vandy">Name</td>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <td className="vandy">Blood</td>
                            <td>{this.state.blood}</td>
                        </tr>
                        <tr>
                            <td className="vandy">Phone</td>
                            <td>{this.state.phone}</td>
                        </tr>
                        <tr>
                            <td className="vandy">E-mail</td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td  className="vandy">Address</td>
                            <td>{this.state.Address}</td>
                        </tr>    
                        </tbody>
                    </table>
                <div className="ashok">

                </div>
                <img src={im3} className="ramii"></img>
                <img src={im4} className="velubhai"></img>
                <h1 className="fffuuu">Donor Location</h1>
                <div className="mapsic">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.764206534459!2d80.15152466738589!3d13.114118592321987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263af97c0d353%3A0x1b5f6ae785258cd8!2sAmbattur!5e0!3m2!1sen!2sin!4v1604496885627!5m2!1sen!2sin" width="790" height="465"></iframe>
                </div>
                
                </div>

                
            </div>
        )
    }
}

export default Profile
