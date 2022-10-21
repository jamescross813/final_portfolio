import React, { Component } from 'react'
import HeaderComponent from "./HeaderComponent"
import NavBarComponent from "./NavBarComponent"

class BaseComponent extends Component{
    render(){
        return(
            <>
                    <div className="col-sm-4">
                        <NavBarComponent/>
                    </div>
                    
                    <div className="col-sm-4">
                        <HeaderComponent/>
                    </div>
         </>
        )
    }
} 

export default BaseComponent
