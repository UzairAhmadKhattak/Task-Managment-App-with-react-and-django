import React, { Component } from 'react';
import uzair from "../assets/uzair.jpg"
class NAVABR extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <nav id = "top_navbar" className="navbar navbar-light fixed-top">
                <div className="container-fluid d-flex justify-content-center">
                    <a className="navbar-brand" href="#"style={{fontFamily: 'Pacifico'}}>  
                    <img src={uzair} alt="" width="34" height="34" className="d-inline-block align-text-top"/>
                    Task Management
                    </a>
                </div>
                </nav>

            </React.Fragment>
        );
    }
}
 
export default NAVABR;