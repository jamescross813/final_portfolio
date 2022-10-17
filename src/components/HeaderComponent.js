import React, { Component } from 'react'
import header from "../images/mepic.png"

class HeaderComponent extends Component{
    render(){
        return(
            <div>
                <img src={header} className="header" alt="header" />
            </div>
        )
    }
} 

export default HeaderComponent