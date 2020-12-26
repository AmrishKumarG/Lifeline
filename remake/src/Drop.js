import React, { Component } from 'react';
import './Drop.css';
import { Link, Redirect } from 'react-router-dom';
import firebase from './Firebase';
export class Drop extends Component {
    constructor() {
        super();
        this.logout=this.logout.bind(this);
        this.state = {
          showMenu: false,
          islogged:false,
          name:"",
          id:""
        };
        
        this.showMenu = this.showMenu.bind(this);
      }
      
      showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      componentDidMount(){
        this.authlist();
    }
      authlist(){
        firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    this.setState({[this.state.id]:user.uid});
                    this.state.id=user.uid;
                    this.setState({[this.state.islogged]:true});
                    this.state.islogged=true;
                    const re=firebase.database().ref(this.state.id);
                    re.on("value",(snapshot)=>{
                        let rr=snapshot.val();
                        this.setState({name:rr.Name});
                        this.state.name=rr.Name;
                    });
                }
        });
    }
    logout(){
        firebase.auth().signOut().then(function() {
            window.alert("sucesss");
          }).catch(function(error) {
            window.alert(error);
          });
    }
      render() {
        return (
            <div>
                {console.log(this.state.name)}
              <button className="mhk" onClick={this.showMenu}>
                {this.state.name}
              </button>
              
              {
                this.state.showMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <Link to="/home" style={{textDecoration:'none'}}><button className="mh" onClick={this.logout}>Logout</button></Link>
                    </div>
                  )
                  : (
                    null
                  )
              }
            </div>
          );
        }
}

export default Drop
