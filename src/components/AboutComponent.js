import React, { Component } from 'react'
import BaseComponent from "./BaseComponent"

class AboutComponent extends Component{
    render(){
        return(
            <>
            <div className="row">
                <BaseComponent/>
                <div className="col-sm-3 text-light">
                            <h1 className="title">About</h1>
                            <p className="row">Hi! My name is James Cross. I'm a Geek, a Nerd and a Coder.</p>
                            <p className="row">I've worn many hats over my career span and am excited for the challenges that come with my new path.</p>
                </div>
            </div>
            </>
        )
    }
} 

export default AboutComponent