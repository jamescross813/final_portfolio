import React, { Component } from 'react'
import HeaderComponent from "./HeaderComponent"

class BaseComponent extends Component{
    render(){
        return(
            <div classname = "container"> 
            <div className="row">
                <div className="column">
                    <BaseComponent/>
                </div>
                
                <div className="column w-25">
                    <HeaderComponent/>
                </div>
            </div>
        </div>
        )
    }
} 

export default BaseComponent
