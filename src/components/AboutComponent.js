import React, { Component } from 'react'
import HeaderComponent from "./HeaderComponent"

class AboutComponent extends Component{
    render(){
        return(
            <>
            <div className="row">
                <div className="col-sm-4">
                    <HeaderComponent/>
                </div>
                <div className="col-sm-4 text-light">
                            <h1 className="title">About</h1>
                                <p className="row">Hi! My name is James Cross. I'm a Geek, a Nerd and a Coder.</p>
                                <p className="row">I've worn many hats over my career span and am excited for the challenges that come with my new path.</p>
                                <p> I got into coding as a hobby, then delved deeper trhough Flatiron. Since graduating I've continued my studes, expanded my knowledge base and gotten to use the skills I've learnt in the real world!</p>
                </div>
            </div>
            </>
        )
    }
} 

export default AboutComponent