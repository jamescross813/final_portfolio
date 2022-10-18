import React, { Component } from 'react'
import HeaderComponent from "./HeaderComponent"
import NavBarComponent from "./NavBarComponent"

class BaseComponent extends Component{
    render(){
        return(
            <>
                <NavBarComponent />
                <HeaderComponent />
            </> 
        )
    }
} 

export default BaseComponent
