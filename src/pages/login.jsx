import React, { Component } from 'react';

class LOGIN extends Component {
    state = {  }

    render() { 
    
        return (
    
    <div className="container">
      
      
          {/* <div className="alert alert-success text-center" role="alert" style={{width: "50%",position: "relative",left: "30%",top:"20%"}}> */}
           {/*alert msg will go here  */}
          {/* </div> */}
          {/* <div className="alert alert-warning text-center" role="alert" style={{width: "50%",position: "relative",left: "30%",top:"20%"}}> */}
          {/* alert msg will go here */}
          {/* </div>  */}
      
             
          <div className="login_page">
            <form action="login_submitted" method="post">
              <h1 style={{position: "relative", left: "40%", marginBottom: "5%"}}>Login</h1> 
            
            <div className="login_form">  
            <div className="mb-3">  
                <label htmlFor="user_name" className="form-label"><h5>User Name</h5></label>
                <input type="text" name="user_name" placeholder="User Name" className="form-control" id="user_name"/>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label"><h5>Password</h5></label>
                <input type="password" name="password" placeholder="Password" className="form-control" id="password"/>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
         </div>
         </form>
        </div> 
    </div>
            );
    }
}
 
export default LOGIN;