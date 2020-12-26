import React, { Component } from 'react'
import Home from './Home';
import Loading from './Loading';

export class Animator extends Component {
    constructor(){
        super();
        this.state = {
            render: false
        }
    }
    componentDidMount() {
        setTimeout(function() {
            this.setState({render: true})
        }.bind(this), 3000)
      }
    render() {
        return (
            <div>
                {this.state.render?<Home/>:<Loading/>}
            </div>
        )
    }
}

export default Animator
