import React, { Component } from 'react'
import au from './audio/aa.wav';
import './Loading.css'
export class Loading extends Component {
   render() {
        return (
            <div className="b">
                <audio autoPlay loop>
                    <source src={au} type="audio/wav"></source>
                </audio>
                <div className="overlayload"></div>
                <div className="load pulse">
                <img src="logo.png"></img>
                <h1>LifeLine</h1>
                </div>
            </div>
        )
    }
}

export default Loading
