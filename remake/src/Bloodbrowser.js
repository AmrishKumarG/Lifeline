import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from './Firebase';
import Blood from './Blood';
import { Link, Redirect } from 'react-router-dom';
export class Bloodbrowser extends Component {
constructor(props){
    super(props);
    this.state={
        user:{}
    };
}
    componentDidMount(){
        this.authlist();
    }

    authlist(){
        firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    this.setState(user);
                }
                else{
                    alert("You are not yet logged in");
                    this.setState({user:null});
                }
        });
    }
    render() {
        return (
        <div>{this.state.user?<Blood/>:<Redirect push to="/login"/>}</div>
        )
    }
}
export default Bloodbrowser